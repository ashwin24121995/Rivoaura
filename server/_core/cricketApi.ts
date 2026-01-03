/**
 * Cricket API Integration
 * API Documentation: https://www.cricapi.com/
 * Base URL: https://api.cricapi.com/v1/
 */

const CRICKET_API_BASE_URL = 'https://api.cricapi.com/v1';
const CRICKET_API_KEY = process.env.CRICKET_API_KEY;

if (!CRICKET_API_KEY) {
  console.warn('⚠️  CRICKET_API_KEY is not set. Cricket API features will not work.');
}

// Type Definitions
export interface CricketMatch {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: Array<{
    name: string;
    img: string;
    shortname: string;
  }>;
  score: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  matchStatus: string;
}

export interface FantasyMatchPoints {
  matchId: string;
  players: Array<{
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
  }>;
}

/**
 * Make a request to the Cricket API
 */
async function cricketApiRequest<T>(endpoint: string): Promise<T> {
  if (!CRICKET_API_KEY) {
    throw new Error('CRICKET_API_KEY is not configured');
  }

  const url = `${CRICKET_API_BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}apikey=${CRICKET_API_KEY}`;
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Cricket API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  if (data.status !== 'success' && !data.data) {
    throw new Error(`Cricket API returned error: ${data.status || 'Unknown error'}`);
  }

  return data.data as T;
}

/**
 * Get all current matches (live + upcoming)
 */
export async function getCurrentMatches(): Promise<CricketMatch[]> {
  try {
    const matches = await cricketApiRequest<CricketMatch[]>('/currentMatches');
    return matches || [];
  } catch (error) {
    console.error('Error fetching current matches:', error);
    return [];
  }
}

/**
 * Get live matches only
 */
export async function getLiveMatches(): Promise<CricketMatch[]> {
  try {
    const allMatches = await getCurrentMatches();
    return allMatches.filter(match => 
      match.status === 'Live' || match.matchStatus?.toLowerCase().includes('live')
    );
  } catch (error) {
    console.error('Error fetching live matches:', error);
    return [];
  }
}

/**
 * Get upcoming matches only
 */
export async function getUpcomingMatches(): Promise<CricketMatch[]> {
  try {
    const allMatches = await getCurrentMatches();
    return allMatches.filter(match => 
      match.status === 'Match not started' || 
      match.matchStatus?.toLowerCase().includes('not started')
    );
  } catch (error) {
    console.error('Error fetching upcoming matches:', error);
    return [];
  }
}

/**
 * Get completed matches
 */
export async function getCompletedMatches(): Promise<CricketMatch[]> {
  try {
    const allMatches = await getCurrentMatches();
    return allMatches.filter(match => 
      match.status === 'Completed' || 
      match.matchStatus?.toLowerCase().includes('completed')
    );
  } catch (error) {
    console.error('Error fetching completed matches:', error);
    return [];
  }
}

/**
 * Get match details by ID
 */
export async function getMatchInfo(matchId: string): Promise<CricketMatch> {
  try {
    const match = await cricketApiRequest<CricketMatch>(`/match_info?id=${matchId}`);
    return match;
  } catch (error) {
    console.error(`Error fetching match info for ${matchId}:`, error);
    throw error;
  }
}

/**
 * Get match scorecard (live scores)
 */
export async function getMatchScorecard(matchId: string): Promise<any> {
  try {
    const scorecard = await cricketApiRequest<any>(`/match_scorecard?id=${matchId}`);
    return scorecard;
  } catch (error) {
    console.error(`Error fetching scorecard for ${matchId}:`, error);
    throw error;
  }
}

/**
 * Get fantasy points for a match
 */
export async function getFantasyMatchPoints(matchId: string): Promise<FantasyMatchPoints> {
  try {
    const points = await cricketApiRequest<FantasyMatchPoints>(`/fantasySummary?id=${matchId}`);
    return points;
  } catch (error) {
    console.error(`Error fetching fantasy points for ${matchId}:`, error);
    throw error;
  }
}

/**
 * Test API connection
 */
export async function testCricketApiConnection(): Promise<boolean> {
  try {
    await getCurrentMatches();
    return true;
  } catch (error) {
    console.error('Cricket API connection test failed:', error);
    return false;
  }
}
