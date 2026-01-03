/**
 * Cricket Data API Integration
 * Real-time cricket match data with local storage caching
 * API Documentation: https://cricketdata.org/
 */

const API_BASE_URL = 'https://api.cricapi.com/v1';
const API_KEY = '1a822521-d7e0-46ff-98d3-3e51020863f3';

// Cache configuration
const CACHE_KEYS = {
  MATCHES: 'rivoaura_matches_cache',
  MATCH_SQUAD: 'rivoaura_squad_cache_',
  MATCH_POINTS: 'rivoaura_points_cache_',
  FANTASY_SUMMARY: 'rivoaura_fantasy_summary_',
  SCORECARD: 'rivoaura_scorecard_',
  LAST_FETCH: 'rivoaura_last_fetch',
};

const CACHE_DURATION = {
  UPCOMING_MATCHES: 60 * 1000, // 60 seconds (as per API guide)
  LIVE_MATCHES: 30 * 1000, // 30 seconds (as per API guide)
  SQUAD: 5 * 60 * 1000, // 5 minutes
  FANTASY_SUMMARY: 30 * 1000, // 30 seconds for live matches
  SCORECARD: 30 * 1000, // 30 seconds for live matches
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

export interface LiveScore {
  matchId: string;
  status: string;
  score: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  currentInning: string;
  runRate: number;
  requiredRunRate?: number;
  target?: number;
  lastUpdate: string;
}

export interface PlayerFantasyPoints {
  playerId: string;
  name: string;
  points: number;
  batting: {
    runs: number;
    fours: number;
    sixes: number;
    strikeRate: number;
  };
  bowling: {
    wickets: number;
    economy: number;
    maidens: number;
  };
  fielding: {
    catches: number;
    runOuts: number;
  };
}

export interface FantasySummary {
  matchId: string;
  players: PlayerFantasyPoints[];
  lastUpdate: string;
}

export interface BallByBall {
  inning: number;
  over: number;
  ball: number;
  batsman: string;
  bowler: string;
  runs: number;
  extras?: string;
  wicket?: boolean;
  wicketType?: string;
  commentary: string;
}

export interface Scorecard {
  matchId: string;
  innings: Array<{
    inningNumber: number;
    team: string;
    batting: Array<{
      playerId: string;
      name: string;
      runs: number;
      balls: number;
      fours: number;
      sixes: number;
      strikeRate: number;
      dismissal: string;
    }>;
    bowling: Array<{
      playerId: string;
      name: string;
      overs: number;
      maidens: number;
      runs: number;
      wickets: number;
      economy: number;
    }>;
    extras: {
      total: number;
      byes: number;
      legByes: number;
      wides: number;
      noBalls: number;
    };
    total: {
      runs: number;
      wickets: number;
      overs: number;
    };
  }>;
}

// Standard credit calculation
function calculatePlayerCredit(role: string, playerName: string): number {
  // List of premium players (star performers)
  const premiumPlayers = [
    'Virat Kohli', 'Rohit Sharma', 'Babar Azam', 'Kane Williamson', 'Steve Smith',
    'Joe Root', 'David Warner', 'AB de Villiers', 'Quinton de Kock', 'Jos Buttler',
    'Jasprit Bumrah', 'Pat Cummins', 'Kagiso Rabada', 'Trent Boult', 'Rashid Khan',
    'Ravindra Jadeja', 'Ben Stokes', 'Shakib Al Hasan', 'Glenn Maxwell', 'Hardik Pandya',
    'Mitchell Starc', 'Mohammed Shami', 'Shaheen Afridi', 'Rishabh Pant', 'KL Rahul',
    'Travis Head', 'Suryakumar Yadav', 'Mohammad Rizwan', 'Jonny Bairstow'
  ];
  
  const isPremium = premiumPlayers.some(p => playerName.toLowerCase().includes(p.toLowerCase()));
  
  // Credit ranges based on role and player status
  const creditRanges: Record<string, { premium: number; regular: number; budget: number }> = {
    'Batsman': { premium: 10.5, regular: 9, budget: 8.5 },
    'Bowler': { premium: 9.5, regular: 8.5, budget: 8 },
    'WK-Batsman': { premium: 10, regular: 9, budget: 8.5 },
    'Batting Allrounder': { premium: 10, regular: 9, budget: 8.5 },
    'Bowling Allrounder': { premium: 9.5, regular: 9, budget: 8.5 },
  };
  
  const range = creditRanges[role] || { premium: 9, regular: 8, budget: 7.5 };
  
  // Add slight randomization for variety
  if (isPremium) {
    return range.premium + (Math.random() * 0.5 - 0.25); // ±0.25 variation
  } else {
    // 70% regular, 30% budget
    return Math.random() < 0.7 ? range.regular : range.budget;
  }
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

// Retry helper for failed requests
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries: number = 3
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      // If rate limited, wait and retry
      if (response.status === 429 && i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        continue;
      }
      
      throw new Error(`API Error: ${response.status}`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 500 * (i + 1)));
    }
  }
  throw new Error('Max retries reached');
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
    
    const response = await fetchWithRetry(
      `${API_BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`
    );
    
    // Enhanced error logging as per guide
    console.log('API Response Status:', response.status);
    
    const result = await response.json();
    console.log('API Response Data:', result);
    
    if (result.status !== 'success') {
      console.error('API Error:', result.message || 'Unknown error');
      throw new Error(`API returned status: ${result.status}`);
    }
    
    const matches: Match[] = result.data || [];
    
    // Filter: only matches that haven't ended
    // Note: fantasyEnabled field is not reliable from API, so we show all matches
    const filteredMatches = matches.filter(
      (match) => !match.matchEnded
    );
    
    // Sort by date (earliest first) as per guide
    filteredMatches.sort((a, b) => {
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
    
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
 * Fetch live matches only
 * Filters based on matchStarted, matchEnded, and status field as per API guide
 */
export async function getLiveMatches(): Promise<Match[]> {
  const allMatches = await getCurrentMatches();
  
  const liveMatches = allMatches.filter((match) => {
    // Match must have started
    const hasStarted = match.matchStarted === true;
    
    // Match must not have ended
    const notEnded = match.matchEnded === false;
    
    // Status should indicate live play (case-insensitive check)
    const isLive = match.status && (
      match.status.toLowerCase().includes("live") ||
      match.status.toLowerCase().includes("in progress") ||
      match.status.toLowerCase().includes("innings")
    );
    
    return hasStarted && notEnded && isLive;
  });
  
  // Sort by date (earliest first)
  liveMatches.sort((a, b) => {
    return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
  });
  
  return liveMatches;
}

/**
 * Fetch upcoming matches only
 * Filters based on matchStarted, status field, and future date as per API guide
 */
export async function getUpcomingMatches(): Promise<Match[]> {
  const allMatches = await getCurrentMatches();
  const now = new Date();
  
  const upcomingMatches = allMatches.filter((match) => {
    // Match must not have started (primary check)
    const notStarted = match.matchStarted === false;
    
    // Match must not have ended
    const notEnded = match.matchEnded === false;
    
    // Match date should be today or in the future
    const matchDate = new Date(match.dateTimeGMT);
    const isFuture = matchDate >= now;
    
    // Optional: Status check (if status exists, it should not indicate live play)
    const notLiveStatus = !match.status || (
      !match.status.toLowerCase().includes("live") &&
      !match.status.toLowerCase().includes("in progress") &&
      !match.status.toLowerCase().includes("innings")
    );
    
    return notStarted && notEnded && isFuture && notLiveStatus;
  });
  
  // Sort by date (earliest first)
  upcomingMatches.sort((a, b) => {
    return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
  });
  
  return upcomingMatches;
}

/**
 * Fetch completed matches
 * Filters based on matchEnded field as per API guide
 */
export async function getCompletedMatches(): Promise<Match[]> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`
    );
    
    console.log('API Response Status:', response.status);
    
    const result = await response.json();
    console.log('API Response Data:', result);
    
    if (result.status !== 'success') {
      console.error('API Error:', result.message || 'Unknown error');
      return [];
    }
    
    const matches: Match[] = result.data || [];
    
    const completedMatches = matches.filter(match => match.matchEnded === true);
    
    // Sort by date (most recent first for completed matches)
    completedMatches.sort((a, b) => {
      return new Date(b.dateTimeGMT).getTime() - new Date(a.dateTimeGMT).getTime();
    });
    
    return completedMatches;
  } catch (error) {
    console.error('Failed to fetch completed matches:', error);
    return [];
  }
}

/**
 * Fetch match details by ID
 */
export async function getMatchInfo(matchId: string): Promise<Match | null> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE_URL}/match_info?apikey=${API_KEY}&id=${matchId}`
    );
    
    console.log(`Match Info API Response Status for ${matchId}:`, response.status);
    
    const result = await response.json();
    console.log(`Match Info API Response Data for ${matchId}:`, result);
    
    if (result.status !== 'success') {
      console.error(`Match Info API Error for ${matchId}:`, result.message || 'Unknown error');
      return null;
    }
    
    return result.data || null;
  } catch (error) {
    console.error(`Failed to fetch match info for ${matchId}:`, error);
    return null;
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
    
    const response = await fetchWithRetry(
      `${API_BASE_URL}/match_squad?apikey=${API_KEY}&id=${matchId}`
    );
    
    console.log(`Squad API Response Status for ${matchId}:`, response.status);
    
    const result = await response.json();
    console.log(`Squad API Response Data for ${matchId}:`, result);
    
    if (result.status !== 'success') {
      console.error(`Squad API Error for ${matchId}:`, result.message || 'Unknown error');
      throw new Error(`API returned status: ${result.status}`);
    }
    
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
    const response = await fetchWithRetry(
      `${API_BASE_URL}/match_points?apikey=${API_KEY}&id=${matchId}&ruleset=0`
    );
    
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
 * Fetch detailed fantasy summary with player-wise breakdown
 */
export async function getFantasySummary(matchId: string): Promise<FantasySummary | null> {
  try {
    const cacheKey = CACHE_KEYS.FANTASY_SUMMARY + matchId;
    const cached = getCache<FantasySummary>(cacheKey, CACHE_DURATION.FANTASY_SUMMARY);
    if (cached) {
      return cached;
    }
    
    const response = await fetchWithRetry(
      `${API_BASE_URL}/fantasySummary?apikey=${API_KEY}&id=${matchId}`
    );
    
    const result = await response.json();
    const data = result.data;
    
    if (!data) return null;
    
    const summary: FantasySummary = {
      matchId,
      players: data.players || [],
      lastUpdate: new Date().toISOString(),
    };
    
    setCache(cacheKey, summary);
    return summary;
  } catch (error) {
    console.error(`Failed to fetch fantasy summary for match ${matchId}:`, error);
    return null;
  }
}

/**
 * Fetch live score for a specific match
 */
export async function getLiveScore(matchId: string): Promise<LiveScore | null> {
  try {
    const response = await fetchWithRetry(
      `${API_BASE_URL}/match_info?apikey=${API_KEY}&id=${matchId}`
    );
    
    const result = await response.json();
    const match = result.data;
    
    if (!match) return null;
    
    // Calculate run rates
    let runRate = 0;
    let requiredRunRate;
    let target;
    
    if (match.score && match.score.length > 0) {
      const currentInning = match.score[match.score.length - 1];
      runRate = currentInning.o > 0 ? (currentInning.r / currentInning.o) : 0;
      
      // If second innings, calculate required run rate
      if (match.score.length > 1) {
        const firstInning = match.score[0];
        target = firstInning.r + 1;
        const oversRemaining = (match.matchType === 't20' ? 20 : 50) - currentInning.o;
        const runsRequired = target - currentInning.r;
        requiredRunRate = oversRemaining > 0 ? (runsRequired / oversRemaining) : 0;
      }
    }
    
    return {
      matchId: match.id,
      status: match.status,
      score: match.score || [],
      currentInning: match.score && match.score.length > 0 ? match.score[match.score.length - 1].inning : '',
      runRate: parseFloat(runRate.toFixed(2)),
      requiredRunRate: requiredRunRate ? parseFloat(requiredRunRate.toFixed(2)) : undefined,
      target,
      lastUpdate: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Failed to fetch live score for match ${matchId}:`, error);
    return null;
  }
}

/**
 * Fetch scorecard with detailed player performance
 */
export async function getMatchScorecard(matchId: string): Promise<Scorecard | null> {
  try {
    const cacheKey = CACHE_KEYS.SCORECARD + matchId;
    const cached = getCache<Scorecard>(cacheKey, CACHE_DURATION.SCORECARD);
    if (cached) {
      return cached;
    }
    
    const response = await fetchWithRetry(
      `${API_BASE_URL}/match_scorecard?apikey=${API_KEY}&id=${matchId}`
    );
    
    const result = await response.json();
    const data = result.data;
    
    if (!data) return null;
    
    const scorecard: Scorecard = {
      matchId,
      innings: data.innings || [],
    };
    
    setCache(cacheKey, scorecard);
    return scorecard;
  } catch (error) {
    console.error(`Failed to fetch scorecard for match ${matchId}:`, error);
    return null;
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

/**
 * Get cache statistics
 */
export function getCacheStats(): Record<string, any> {
  const stats: Record<string, any> = {};
  
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('rivoaura_')) {
      try {
        const cached = JSON.parse(localStorage.getItem(key) || '{}');
        const age = Date.now() - (cached.timestamp || 0);
        stats[key] = {
          size: new Blob([localStorage.getItem(key) || '']).size,
          age: Math.floor(age / 1000), // seconds
          timestamp: new Date(cached.timestamp).toISOString(),
        };
      } catch (error) {
        // Ignore parse errors
      }
    }
  });
  
  return stats;
}
