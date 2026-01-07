# Cricket API Implementation Notes

## From XSNAP Fantasy Cricket API Guide

### API Configuration
- **Base URL:** https://api.cricapi.com/v1/
- **API Key:** Stored in `CRICKET_API_KEY` environment variable
- **Authentication:** API key passed as query parameter `?apikey=YOUR_KEY`

### Available Endpoints

| Endpoint | Purpose | Response Data |
|----------|---------|---------------|
| `/currentMatches` | Get live and upcoming matches | Match list with status, teams, venue, date |
| `/match_info` | Get detailed match information | Full match details including squads |
| `/match_scorecard` | Get live scorecard | Ball-by-ball scores, player stats |
| `/fantasySummary` | Get fantasy points for players | Player-wise fantasy points breakdown |

### Data Structure

#### CricketMatch Interface
```typescript
interface CricketMatch {
  id: string;              // Unique match ID (UUID)
  name: string;            // Match name (e.g., "India vs Australia")
  matchType: string;       // "t20" | "odi" | "test"
  status: string;          // "Match not started" | "Live" | "Completed"
  venue: string;           // Stadium name and location
  date: string;            // ISO date string
  dateTimeGMT: string;     // GMT timestamp
  teams: string[];         // Array of 2 team names
  teamInfo: Array<{
    name: string;
    img: string;           // Team logo URL
    shortname: string;     // 3-letter code (e.g., "IND")
  }>;
  score: Array<{
    r: number;             // Runs
    w: number;             // Wickets
    o: number;             // Overs
    inning: string;        // "Inning 1" | "Inning 2"
  }>;
  matchStatus: string;     // Live status text (e.g., "India 150/5 (18.2 ov)")
}
```

### Backend Functions (server/_core/cricketApi.ts)
```typescript
// Get all current matches (live + upcoming)
export async function getCurrentMatches(): Promise<CricketMatch[]>

// Get live matches only
export async function getLiveMatches(): Promise<CricketMatch[]>

// Get upcoming matches only
export async function getUpcomingMatches(): Promise<CricketMatch[]>

// Get completed matches
export async function getCompletedMatches(): Promise<CricketMatch[]>

// Get match details by ID
export async function getMatchInfo(matchId: string): Promise<CricketMatch>

// Get match scorecard
export async function getMatchScorecard(matchId: string): Promise<any>

// Get fantasy points for a match
export async function getFantasyMatchPoints(matchId: string): Promise<FantasyMatchPoints>
```

### Frontend Data Fetching Pattern

#### Basic Query
```typescript
import { trpc } from "@/lib/trpc";

const { data, isLoading, error } = trpc.matches.getUpcoming.useQuery();
```

#### Auto-Refresh Pattern (Live Data)
```typescript
const { data: liveMatches } = trpc.matches.getLive.useQuery(
  undefined,
  {
    refetchInterval: 30 * 1000,      // Refresh every 30 seconds
    refetchOnWindowFocus: true,      // Refresh when user returns to tab
  }
);
```

## Current Implementation Issues

### Problem: Matches Not Showing
Possible causes:
1. **API Key Issue:** Environment variable `CRICKET_API_KEY` not set or incorrect
2. **API Response Format:** Response structure doesn't match expected TypeScript interface
3. **tRPC Router:** Router not properly configured or exported
4. **Frontend Query:** Component not using correct tRPC hook
5. **Error Handling:** Errors being silently swallowed

### Debugging Steps
1. Check if `CRICKET_API_KEY` is set in environment
2. Test API endpoint directly: `curl "https://api.cricapi.com/v1/currentMatches?apikey=YOUR_KEY"`
3. Check server logs for API errors
4. Verify tRPC router is exported and mounted
5. Check browser console for frontend errors
