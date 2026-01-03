/**
 * Server-side Cricket Data API Integration
 * Keeps API key secure on the server
 * API Documentation: https://cricketdata.org/
 */

const API_BASE_URL = 'https://api.cricapi.com/v1';
const API_KEY = process.env.CRICKET_API_KEY || '';

if (!API_KEY) {
  console.error('⚠️  CRICKET_API_KEY environment variable is not set!');
}

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
  matchStarted: boolean;
  matchEnded: boolean;
}

export interface MatchSquad {
  id: string;
  name: string;
  teams: {
    [teamName: string]: {
      players: Array<{
        id: string;
        name: string;
        role: string;
      }>;
    };
  };
}

export interface LiveScore {
  id: string;
  name: string;
  status: string;
  score: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
}

/**
 * Fetch current matches from Cricket API
 */
export async function getCurrentMatches(): Promise<Match[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`
    );

    if (!response.ok) {
      console.error(`Cricket API error: ${response.status} ${response.statusText}`);
      throw new Error(`Cricket API returned ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data || !Array.isArray(data.data)) {
      console.error('Invalid Cricket API response:', data);
      return [];
    }

    console.log(`✅ Fetched ${data.data.length} matches from Cricket API`);
    return data.data;
  } catch (error) {
    console.error('Error fetching current matches:', error);
    throw error;
  }
}

/**
 * Get upcoming matches (not started yet)
 */
export async function getUpcomingMatches(): Promise<Match[]> {
  const matches = await getCurrentMatches();
  const now = new Date();

  return matches
    .filter((match) => {
      // Check if match hasn't started
      const notStarted = match.matchStarted === false;
      
      // Check if match date is in the future
      const matchDate = new Date(match.dateTimeGMT);
      const isFuture = matchDate > now;

      return notStarted && isFuture;
    })
    .sort((a, b) => {
      // Sort by date (earliest first)
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
}

/**
 * Get live matches (currently in progress)
 */
export async function getLiveMatches(): Promise<Match[]> {
  const matches = await getCurrentMatches();

  return matches
    .filter((match) => {
      const status = match.status?.toLowerCase() || '';
      const isLive =
        status.includes('live') ||
        status.includes('in progress') ||
        status.includes('innings');
      
      return isLive && match.matchStarted === true && match.matchEnded === false;
    })
    .sort((a, b) => {
      return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
    });
}

/**
 * Get completed matches
 */
export async function getCompletedMatches(): Promise<Match[]> {
  const matches = await getCurrentMatches();

  return matches
    .filter((match) => match.matchEnded === true)
    .sort((a, b) => {
      // Sort by date (most recent first)
      return new Date(b.dateTimeGMT).getTime() - new Date(a.dateTimeGMT).getTime();
    });
}

/**
 * Get match details by ID
 */
export async function getMatchInfo(matchId: string): Promise<Match | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/match_info?apikey=${API_KEY}&id=${matchId}`
    );

    if (!response.ok) {
      console.error(`Cricket API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    if (!data.data) {
      console.error('Invalid match info response:', data);
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(`Error fetching match info for ${matchId}:`, error);
    return null;
  }
}

/**
 * Get match squad (players) by match ID
 */
export async function getMatchSquad(matchId: string): Promise<MatchSquad | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/match_squad?apikey=${API_KEY}&id=${matchId}`
    );

    if (!response.ok) {
      console.error(`Cricket API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    if (!data.data) {
      console.error('Invalid squad response:', data);
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(`Error fetching squad for match ${matchId}:`, error);
    return null;
  }
}

/**
 * Get live score for a match
 */
export async function getLiveScore(matchId: string): Promise<LiveScore | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/match_scorecard?apikey=${API_KEY}&id=${matchId}`
    );

    if (!response.ok) {
      console.error(`Cricket API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    if (!data.data) {
      console.error('Invalid scorecard response:', data);
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(`Error fetching live score for match ${matchId}:`, error);
    return null;
  }
}
