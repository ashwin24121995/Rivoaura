/**
 * Cricket Data API Integration
 * Real-time cricket match data with local storage caching
 */

const API_BASE_URL = 'https://api.cricapi.com/v1';
const API_KEY = '1a822521-d7e0-46ff-98d3-3e51020863f3';

// Cache configuration
const CACHE_KEYS = {
  MATCHES: 'rivoaura_matches_cache',
  MATCH_SQUAD: 'rivoaura_squad_cache_',
  MATCH_POINTS: 'rivoaura_points_cache_',
  LAST_FETCH: 'rivoaura_last_fetch',
};

const CACHE_DURATION = {
  UPCOMING_MATCHES: 2 * 60 * 1000, // 2 minutes
  LIVE_MATCHES: 30 * 1000, // 30 seconds
  SQUAD: 5 * 60 * 1000, // 5 minutes
};

// Types
export interface Match {
  id: string;
  name: string;
  matchType: 't20' | 'odi' | 'test';
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: Array<{
    name: string;
    shortname: string;
    img: string;
  }>;
  score: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

export interface Player {
  id: string;
  name: string;
  role: 'Batsman' | 'Bowler' | 'WK-Batsman' | 'Batting Allrounder' | 'Bowling Allrounder';
  battingStyle: string;
  bowlingStyle: string;
  country: string;
  playerImg: string;
  credit: number; // Calculated based on role
  points?: number; // Live fantasy points
}

export interface MatchSquad {
  teamName: string;
  shortname: string;
  img: string;
  players: Player[];
}

// Standard credit calculation
function calculatePlayerCredit(role: string, playerName: string): number {
  // Top players get higher credits (simplified - can be enhanced with player stats)
  const isTopPlayer = false; // TODO: Implement player ranking logic
  
  const credits: Record<string, number> = {
    'Batsman': isTopPlayer ? 10 : 9,
    'Bowler': isTopPlayer ? 9 : 8,
    'WK-Batsman': isTopPlayer ? 10.5 : 9.5,
    'Batting Allrounder': isTopPlayer ? 9.5 : 8.5,
    'Bowling Allrounder': isTopPlayer ? 9.5 : 8.5,
  };
  
  return credits[role] || 8;
}

// Cache helpers
function setCache(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  } catch (error) {
    console.error('Failed to set cache:', error);
  }
}

function getCache<T>(key: string, maxAge: number): T | null {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > maxAge) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data as T;
  } catch (error) {
    console.error('Failed to get cache:', error);
    return null;
  }
}

// API Functions

/**
 * Fetch current matches (upcoming and live)
 */
export async function getCurrentMatches(): Promise<Match[]> {
  try {
    // Check cache first
    const cached = getCache<Match[]>(CACHE_KEYS.MATCHES, CACHE_DURATION.UPCOMING_MATCHES);
    if (cached) {
      console.log('Using cached matches');
      return cached;
    }
    
    const response = await fetch(
      `${API_BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`
    );
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const result = await response.json();
    const matches: Match[] = result.data || [];
    
    // Filter: only fantasy-enabled matches that haven't ended
    const filteredMatches = matches.filter(
      (match) => match.fantasyEnabled && !match.matchEnded
    );
    
    // Cache the result
    setCache(CACHE_KEYS.MATCHES, filteredMatches);
    
    return filteredMatches;
  } catch (error) {
    console.error('Failed to fetch matches:', error);
    
    // Fallback to cache (even if expired)
    const fallback = localStorage.getItem(CACHE_KEYS.MATCHES);
    if (fallback) {
      console.log('Using fallback cache');
      return JSON.parse(fallback).data || [];
    }
    
    throw error;
  }
}

/**
 * Fetch squad for a specific match
 */
export async function getMatchSquad(matchId: string): Promise<MatchSquad[]> {
  try {
    const cacheKey = CACHE_KEYS.MATCH_SQUAD + matchId;
    const cached = getCache<MatchSquad[]>(cacheKey, CACHE_DURATION.SQUAD);
    if (cached) {
      console.log(`Using cached squad for match ${matchId}`);
      return cached;
    }
    
    const response = await fetch(
      `${API_BASE_URL}/match_squad?apikey=${API_KEY}&id=${matchId}`
    );
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const result = await response.json();
    const squads: MatchSquad[] = result.data || [];
    
    // Calculate credits for each player
    const squadsWithCredits = squads.map((squad) => ({
      ...squad,
      players: squad.players.map((player) => ({
        ...player,
        credit: calculatePlayerCredit(player.role, player.name),
      })),
    }));
    
    setCache(cacheKey, squadsWithCredits);
    
    return squadsWithCredits;
  } catch (error) {
    console.error(`Failed to fetch squad for match ${matchId}:`, error);
    
    // Fallback to cache
    const cacheKey = CACHE_KEYS.MATCH_SQUAD + matchId;
    const fallback = localStorage.getItem(cacheKey);
    if (fallback) {
      return JSON.parse(fallback).data || [];
    }
    
    throw error;
  }
}

/**
 * Fetch live fantasy points for a match
 */
export async function getMatchPoints(matchId: string): Promise<Record<string, number>> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/match_points?apikey=${API_KEY}&id=${matchId}&ruleset=0`
    );
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const result = await response.json();
    const innings = result.data?.innings || [];
    
    // Aggregate points from all innings
    const playerPoints: Record<string, number> = {};
    
    innings.forEach((inning: any) => {
      // Batting points
      inning.batting?.forEach((player: any) => {
        playerPoints[player.id] = (playerPoints[player.id] || 0) + (player.points || 0);
      });
      
      // Bowling points
      inning.bowling?.forEach((player: any) => {
        playerPoints[player.id] = (playerPoints[player.id] || 0) + (player.points || 0);
      });
    });
    
    return playerPoints;
  } catch (error) {
    console.error(`Failed to fetch points for match ${matchId}:`, error);
    return {};
  }
}

/**
 * Clear all caches (useful for debugging or manual refresh)
 */
export function clearAllCaches(): void {
  Object.values(CACHE_KEYS).forEach((key) => {
    if (key.endsWith('_')) {
      // Clear all keys with this prefix
      Object.keys(localStorage).forEach((storageKey) => {
        if (storageKey.startsWith(key)) {
          localStorage.removeItem(storageKey);
        }
      });
    } else {
      localStorage.removeItem(key);
    }
  });
  console.log('All caches cleared');
}
