# Rivoaura - Fantasy Cricket Platform

**India's most transparent and educational fantasy cricket platform.** 100% free-to-play community where you build dream teams, compete with thousands of cricket enthusiasts, and sharpen your strategic thinking—all without spending a single rupee.

---

## 🏏 Features

- **Team Builder**: Create fantasy teams with real players from live cricket matches
- **Live Scoring**: Real-time ball-by-ball updates and fantasy points calculation
- **Tournaments**: Join contests and compete with other users
- **Leaderboard**: Track your ranking and compete for the top spot
- **Community**: Share strategies and discuss cricket with fellow enthusiasts
- **Educational**: Learn cricket strategy and player analysis

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- PostgreSQL 14+
- pnpm 10+

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/rivoaura.git
   cd rivoaura
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/rivoaura
   
   # JWT Secret (generate a random string)
   JWT_SECRET=your_very_long_random_secret_key_here
   
   # Cricket Data API (cricketdata.org)
   CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
   
   # App Configuration
   NODE_ENV=development
   PORT=3000
   FRONTEND_URL=http://localhost:3000
   ```

4. **Setup database**
   ```bash
   # Create database
   createdb rivoaura
   
   # Run migrations
   psql -d rivoaura -f database/schema.sql
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open browser**
   ```
   http://localhost:3000
   ```

---

## 🚂 Deploy to Railway

### Step 1: Prepare Your Project

1. Push your code to GitHub
2. Make sure `.env` is in `.gitignore` (it already is)

### Step 2: Create Railway Project

1. Go to [Railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `rivoaura` repository

### Step 3: Add PostgreSQL Database

1. In your Railway project, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically create a database and provide `DATABASE_URL`

### Step 4: Configure Environment Variables

In Railway dashboard, go to your service → Variables tab and add:

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}  # Auto-filled by Railway
JWT_SECRET=your_very_long_random_secret_key_here
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://your-app.railway.app
```

### Step 5: Initialize Database

1. In Railway dashboard, go to PostgreSQL service
2. Click "Connect" → "psql"
3. Copy the connection command and run locally:
   ```bash
   psql postgresql://user:pass@host:port/database < database/schema.sql
   ```

### Step 6: Deploy

1. Railway will automatically deploy your app
2. Once deployed, click "Generate Domain" to get your public URL
3. Visit your app at `https://your-app.railway.app`

### Step 7: Add Custom Domain (Optional)

1. In Railway dashboard, go to Settings → Domains
2. Click "Custom Domain"
3. Add your domain (e.g., `rivoaura.com`)
4. Update your DNS records as instructed by Railway

---

## 📁 Project Structure

```
rivoaura/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts (Auth, etc.)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and helpers
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component with routes
│   │   └── index.css      # Global styles
│   └── index.html
├── server/                # Backend Node.js/Express server
│   ├── index.ts           # Server entry point
│   └── routers.ts         # tRPC API routes
├── shared/                # Shared types between client/server
│   ├── const.ts           # Shared constants
│   └── types.ts           # TypeScript interfaces
├── database/              # Database schemas and migrations
│   └── schema.sql         # PostgreSQL schema
├── drizzle/               # Drizzle ORM configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler configuration
└── railway.json           # Railway deployment configuration
```

---

## 🗄️ Database Schema

The application uses PostgreSQL with the following main tables:

- **users**: User authentication and profiles
- **teams**: Fantasy cricket teams created by users
- **contests**: Fantasy cricket contests/tournaments
- **matches**: Cached cricket match data from API
- **players**: Cached player data from Cricket API
- **player_performance**: Player statistics and fantasy points
- **leaderboard**: Global rankings
- **community_posts**: User discussions and strategies
- **notifications**: User notifications
- **achievements**: User achievements and badges

See `database/schema.sql` for complete schema definition.

---

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server with hot reload

# Building
pnpm build        # Build for production

# Production
pnpm start        # Start production server

# Database
pnpm db:push      # Run database migrations
pnpm db:studio    # Open Drizzle Studio (database GUI)

# Code Quality
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
pnpm test         # Run tests
```

---

## 🌐 API Integration

### Cricket Data API

The platform uses [Cricket Data API](https://cricketdata.org/) for live match data.

**Endpoints used:**
- `GET /currentMatches` - Fetch ongoing and upcoming matches
- `GET /fantasySquad/{matchId}` - Get player squad for a match
- `GET /currentScore/{matchId}` - Get live match scores
- `GET /scorecard/{matchId}` - Get detailed scorecard

**API Key**: `1a822521-d7e0-46ff-98d3-3e51020863f3`

---

## 🔐 Security

- Passwords hashed with bcrypt
- JWT tokens for authentication
- CORS configured for production
- SQL injection prevention with parameterized queries
- Input validation with Zod
- Audit logging for security events

---

## 📜 Legal Compliance

**RIVOAURA is 100% legal in India** under the following regulations:

- **No Real Money**: Completely free-to-play platform
- **Skill-Based**: Fantasy cricket is recognized as a game of skill
- **Age Restriction**: Strictly 18+ community
- **State Compliance**: Blocked in restricted states (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana)

**Operated by**: RIVOAURA PRIVATE LIMITED  
**Registration**: [Company Registration Number]

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

- **Email**: support@rivoaura.com
- **Documentation**: [docs.rivoaura.com](https://docs.rivoaura.com)
- **Community**: Join our Discord server

---

## 🙏 Acknowledgments

- Cricket Data API for providing match data
- shadcn/ui for beautiful UI components
- Railway for seamless deployment
- The open-source community

---

**Built with ❤️ for cricket enthusiasts across India**
