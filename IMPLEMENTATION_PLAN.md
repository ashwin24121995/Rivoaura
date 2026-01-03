# Fantasy Cricket Platform Implementation Plan

## Based on: The Ultimate Guide to Building a Fantasy Cricket Platform

### Current Architecture
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express + tRPC
- **Database**: MySQL (Railway) + Drizzle ORM
- **Auth**: bcrypt + JWT (already implemented)

### Guide Architecture (Next.js)
- **Framework**: Next.js with App Router
- **Auth**: NextAuth.js
- **Database**: PlanetScale (MySQL) + Drizzle ORM

---

## Phase 1: Database Schema Updates ✅ (Partially Done)

### Current Schema Status:
- ✅ `users` table exists (with password field)
- ❌ `user_teams` table - NEEDS TO BE CREATED
- ❌ `team_players` table - NEEDS TO BE CREATED  
- ❌ `contests` table - NEEDS TO BE CREATED
- ❌ `contest_entries` table - NEEDS TO BE CREATED

### Required Schema from Guide:
```sql
users: id, name, email, password, created_at
user_teams: id, user_id, match_id, name, captain_id, vice_captain_id, total_credits_used, created_at
team_players: id, team_id, player_id
contests: id, match_id, name, entry_fee, prize_pool, max_entries, current_entries, status, created_at
contest_entries: id, contest_id, user_id, team_id, points, rank_position, created_at
```

---

## Phase 2: Fix Cricket API Issue (CRITICAL - DO FIRST!)

### Problem:
Production site shows "Loading Match Center..." forever - matches not loading

### Root Causes:
1. Missing `CRIC_API_KEY` environment variable on Railway
2. Backend server might not be running on Railway
3. Frontend trying to call API that doesn't exist

### Solution Steps:
1. Verify Cricket API key is set in Railway environment
2. Check backend deployment status on Railway
3. Test API endpoints locally first
4. Fix CORS if needed
5. Deploy fixes to Railway

---

## Phase 3: Core Features Implementation

### 3.1 Team Building System
- Player selection interface
- Credit system (100 credits total)
- Position requirements:
  - 1-4 Wicketkeepers
  - 3-6 Batsmen
  - 1-4 All-rounders
  - 3-6 Bowlers
  - Max 7 players from one team
- Captain (2x points) and Vice-Captain (1.5x points) selection

### 3.2 Contest System
- Create contests for matches
- Join contests with teams
- Entry fees and prize pools
- Live leaderboard during matches
- Final rankings and results

### 3.3 Points Calculation
Batting:
- Run: +1 point
- Boundary: +1 point
- Six: +2 points
- 30 run bonus: +4 points
- Half-century: +8 points
- Century: +16 points
- Duck: -2 points

Bowling:
- Wicket: +25 points
- Maiden: +12 points
- 3 wickets: +4 points
- 4 wickets: +8 points
- 5 wickets: +16 points

Fielding:
- Catch: +8 points
- Stumping/Run-out: +12 points

---

## Phase 4: API Endpoints (tRPC Routers)

### Auth Router (✅ Done)
- `auth.login`
- `auth.register`

### Teams Router (❌ To Do)
- `teams.create` - Create new team
- `teams.getByUser` - Get user's teams
- `teams.getById` - Get team details
- `teams.update` - Update team
- `teams.delete` - Delete team

### Contests Router (❌ To Do)
- `contests.getByMatch` - Get contests for a match
- `contests.create` - Create new contest
- `contests.join` - Join contest with team
- `contests.getLeaderboard` - Get live leaderboard
- `contests.getUserEntries` - Get user's contest entries

### Matches Router (❌ To Do)
- `matches.getCurrent` - Get current matches
- `matches.getUpcoming` - Get upcoming matches
- `matches.getLive` - Get live matches
- `matches.getById` - Get match details

---

## Phase 5: Frontend Pages

### Existing Pages:
- ✅ Home
- ✅ Tournaments
- ✅ Login
- ✅ Register
- ⚠️ My Contests (needs real data)
- ⚠️ User Profile (needs real data)

### New Pages Needed:
- ❌ Team Builder (`/create-team/:matchId`)
- ❌ Contest Lobby (`/contests/:matchId`)
- ❌ Live Leaderboard (`/leaderboard/:contestId`)
- ❌ Match Details (partially done)

---

## Phase 6: Deployment to Railway

### Environment Variables Needed:
```
DATABASE_URL=mysql://user:password@host:port/database
CRIC_API_KEY=your_cricket_api_key
JWT_SECRET=your_jwt_secret
NODE_ENV=production
PORT=3000
```

### Deployment Steps:
1. Push code to GitHub
2. Connect Railway to GitHub repo
3. Set environment variables in Railway
4. Deploy backend service
5. Deploy frontend service (or build static and serve from backend)
6. Configure custom domain

---

## Priority Order:

### IMMEDIATE (Phase 1):
1. ✅ Fix Cricket API - Get matches loading on production
2. ✅ Verify Railway MySQL connection
3. ✅ Test authentication on production

### SHORT TERM (Phase 2):
1. Update database schema
2. Create tRPC routers for teams and contests
3. Build Team Builder page
4. Build Contest Lobby page

### MEDIUM TERM (Phase 3):
1. Implement points calculation system
2. Build live leaderboard
3. Add real-time updates for live matches
4. Polish UI/UX

---

## Current Status:
- ✅ Project setup complete
- ✅ Authentication implemented
- ✅ Basic UI pages created
- ❌ Cricket API not working on production
- ❌ Database schema incomplete
- ❌ Core fantasy features not implemented

## Next Immediate Action:
**FIX THE CRICKET API ISSUE SO MATCHES LOAD ON PRODUCTION!**
