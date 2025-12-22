# Cricket Data API Information

## Account Details
- **API Provider:** Cricket Data (cricketdata.org)
- **Account Email:** sonu.singh3622@yahoo.in
- **Subscription:** 2 active subscriptions
- **Expiry:** 18 Jan 2026 (auto-renews)

## API Key
```
afb22ee0-add7-48b4-af1d-bdf319c03c9d
```

## API Access
- **Lifetime API Hits:** 3861
- **API Hits Today:** 209
- **Plan:** All Fantasy APIs (includes Scorecard, Points, Ball by Ball)

## Next Steps
1. Go to "API Test Playground" to test endpoints
2. Check "at this link" for API Guide
3. Review "sample codes" for implementation examples
4. Study all available endpoints and response formats


## Current Matches API

**Endpoint:** `https://api.cricapi.com/v1/currentMatches`

**Parameters:**
- `apikey` (required): API key
- `offset` (optional): Pagination offset (default: 0)

**Response Structure:**
```json
{
  "apikey": "...",
  "data": [
    {
      "id": "match_id",
      "name": "Team A vs Team B, Match Name",
      "matchType": "t20" | "odi" | "test",
      "status": "Match status text",
      "venue": "Stadium name, City",
      "date": "2025-12-22",
      "dateTimeGMT": "2025-12-22T14:30:00",
      "teams": ["Team A", "Team B"],
      "teamInfo": [
        {
          "name": "Team A",
          "shortname": "TA",
          "img": "team_logo_url"
        }
      ],
      "score": [
        {
          "r": 134,  // runs
          "w": 8,    // wickets
          "o": 20,   // overs
          "inning": "Team A Inning 1"
        }
      ],
      "series_id": "series_id",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    }
  ]
}
```

**Key Fields for Our Use:**
- `fantasyEnabled`: true = can be used for fantasy
- `matchStarted`: false = upcoming, true = live/completed
- `matchEnded`: true = completed (should be hidden)
- `hasSquad`: true = players available


## Fantasy Squad API

**Endpoint:** `https://api.cricapi.com/v1/match_squad`

**Parameters:**
- `apikey` (required): API key
- `id` (required): Match ID (from Current Matches API)

**Response Structure:**
```json
{
  "apikey": "...",
  "data": [
    {
      "teamName": "Team A",
      "shortname": "TA",
      "img": "team_logo_url",
      "players": [
        {
          "id": "player_id",
          "name": "Player Name",
          "role": "Batsman" | "Bowler" | "WK-Batsman" | "Batting Allrounder" | "Bowling Allrounder",
          "battingStyle": "Right Handed Bat" | "Left Handed Bat",
          "bowlingStyle": "Right-arm medium" | "Right-arm fast-medium" | "Right-arm offbreak" | etc,
          "country": "Country Name",
          "playerImg": "player_image_url"
        }
      ]
    }
  ]
}
```

**Note:** This API provides player details but does NOT include fantasy credits/points. Need to check Fantasy Match Points or Fantasy Scorecard API for credits.

**Player Roles:**
- Batsman
- Bowler
- WK-Batsman (Wicket Keeper)
- Batting Allrounder
- Bowling Allrounder


## Fantasy Match Points API ⭐ (MOST IMPORTANT FOR FANTASY)

**Endpoint:** `https://api.cricapi.com/v1/match_points`

**Parameters:**
- `apikey` (required): API key
- `id` (required): Match ID (from Current Matches API)
- `ruleset` (optional): Ruleset ID (default: 0)

**Response Structure:**
```json
{
  "apikey": "...",
  "data": {
    "innings": [
      {
        "inning": "Team Name Inning 1",
        "batting": [
          {
            "id": "player_id",
            "name": "Player Name",
            "allnames": ["alternate names"],
            "points": 24  // ⭐ FANTASY POINTS EARNED
          }
        ],
        "bowling": [
          {
            "id": "player_id",
            "name": "Player Name",
            "points": 15
          }
        ]
      }
    ]
  }
}
```

**Key Features:**
- ✅ Provides LIVE fantasy points for each player
- ✅ Updates in real-time during matches
- ✅ Separate points for batting and bowling performances
- ✅ Can be used to calculate total fantasy score

**Important Note:** This API shows points AFTER the match has started. For player CREDITS (cost) before match, we need to check if there's another API or use a standard credit system.


## Implementation Strategy

### Required API Endpoints:
1. **Current Matches** (`/v1/currentMatches`) - Main data source
2. **Fantasy Squad** (`/v1/match_squad`) - Player details
3. **Fantasy Match Points** (`/v1/match_points`) - Live points

### API Key:
- **Primary:** `1a822521-d7e0-46ff-98d3-3e51020863f3` (CricketData U)
- **Backup:** `afb22ee0-add7-48b4-af1d-bdf319c03c9d` (Lifetime Free)

### Standard Credit System (100 total budget):
```javascript
const calculatePlayerCredit = (role, isTopPlayer = false) => {
  const credits = {
    'Batsman': isTopPlayer ? 10 : 9,
    'Bowler': isTopPlayer ? 9 : 8,
    'WK-Batsman': isTopPlayer ? 10.5 : 9.5,
    'Batting Allrounder': isTopPlayer ? 9.5 : 8.5,
    'Bowling Allrounder': isTopPlayer ? 9.5 : 8.5,
  };
  return credits[role] || 8;
};
```

### Match Status Logic:
- `matchStarted: false` → **Upcoming** (show in lobby)
- `matchStarted: true && matchEnded: false` → **Live** (show live badge)
- `matchEnded: true` → **Completed** (hide from lobby)

### Local Storage Caching:
- Cache key: `cricket_matches_cache`
- Refresh interval: 2 minutes for upcoming, 30 seconds for live
- Fallback to cache if API fails

### Data Flow:
1. Fetch current matches on page load
2. Filter by `fantasyEnabled: true`
3. For each match, fetch squad when user clicks
4. Calculate credits based on player role
5. Update points in real-time for live matches
