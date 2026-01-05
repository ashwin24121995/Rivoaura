# Next.js Migration Notes

## Pre-Migration Architecture (Vite + React)

### Current Stack:
- **Frontend**: React 19 + Vite
- **Routing**: Wouter (client-side)
- **Backend**: Express + tRPC 11
- **Database**: MySQL via Drizzle ORM
- **Styling**: Tailwind CSS 4
- **Auth**: JWT + bcrypt

### Key Files to Migrate:
1. **Pages** (client/src/pages/):
   - Home.tsx - Dynamic homepage with live/upcoming/completed matches
   - Tournaments.tsx - Match lobby with filters, search, pagination
   - CreateTeamNew.tsx - Team builder with 100-point budget
   - Contests.tsx - Contest listing
   - Login.tsx, Register.tsx - Auth pages
   - About.tsx, HowToPlay.tsx, Terms.tsx, etc. - Static pages

2. **Components** (client/src/components/):
   - Layout.tsx - Header/footer wrapper
   - LiveMatchDetailCard.tsx - Live scorecard with 5s refresh
   - FullScorecardView.tsx - Complete batting/bowling tables
   - SEOHead.tsx - Meta tags component
   - UI components (shadcn/ui)

3. **Backend** (server/):
   - routers.ts - tRPC routers
   - _core/cricketApi.ts - Cricket API service
   - db.ts - Database queries
   - matches.ts - Match endpoints
   - teams.ts - Team endpoints

4. **Database** (drizzle/schema.ts):
   - users, matches, players, userTeams, userTeamPlayers, contests, contestEntries

### Features to Preserve:
- ✅ Cricket API integration (cricapi.com)
- ✅ Real-time live match data with auto-refresh
- ✅ Team creation with budget validation
- ✅ Authentication (login/register)
- ✅ Contest system
- ✅ SEO optimization
- ✅ Player photos with fallback
- ✅ Match filters, search, pagination
- ✅ Favorites and notifications

## Migration Strategy:

### Phase 1: Setup Next.js
- Create new Next.js 14+ app with App Router
- Install dependencies (tRPC, Drizzle, Tailwind, shadcn/ui)
- Configure TypeScript

### Phase 2: Backend Migration
- Move tRPC routers to Next.js API routes
- Migrate Cricket API service
- Keep Drizzle ORM setup
- Update environment variables

### Phase 3: Frontend Migration
- Convert pages to Next.js app directory structure
- Update routing from Wouter to Next.js
- Migrate components (keep React components mostly as-is)
- Update imports and paths

### Phase 4: Auth Migration
- Convert JWT auth to Next.js middleware
- Update AuthContext for Next.js
- Implement server-side auth checks

### Phase 5: Testing & Deployment
- Test all features
- Update deployment config
- Verify Cricket API integration
