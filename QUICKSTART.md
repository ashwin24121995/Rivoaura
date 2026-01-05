# RIVOAURA Next.js - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd rivoaura-nextjs
pnpm install
```

### 2. Configure Environment
Create `.env.local` file:
```env
# Required
DATABASE_URL=your_mysql_connection_string
JWT_SECRET=your_secret_key_here
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3

# Optional
NEXT_PUBLIC_SITE_URL=https://rivoauralive.com
```

### 3. Run Development Server
```bash
pnpm run dev
```

Visit: **http://localhost:3000**

---

## 📦 What's Included

✅ **30+ Pages** - All migrated from Vite to Next.js
✅ **Cricket API** - Real-time match data integration  
✅ **Authentication** - JWT-based login/register
✅ **Team Builder** - 100-point budget system
✅ **Live Scorecard** - Auto-refreshing match stats
✅ **Responsive Design** - Mobile-first approach
✅ **SEO Optimized** - Meta tags & Open Graph

---

## 🔧 Common Commands

```bash
# Development
pnpm run dev          # Start dev server

# Production
pnpm run build        # Build for production
pnpm start            # Start production server

# Database
pnpm db:push          # Push schema changes

# Linting
pnpm run lint         # Check code quality
```

---

## 📁 Key Files

- `src/app/page.tsx` - Homepage
- `src/app/layout.tsx` - Root layout with providers
- `src/lib/trpc-provider.tsx` - tRPC client setup
- `server/routers.ts` - API endpoints
- `server/_core/cricketApi.ts` - Cricket API service

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
pkill -f "next dev"
pnpm run dev
```

### Database connection error
- Check `DATABASE_URL` in `.env.local`
- Ensure MySQL is running
- Run `pnpm db:push` to sync schema

### TypeScript errors
```bash
rm -rf .next
pnpm run build
```

---

## 📚 Documentation

- [Full Migration Guide](./MIGRATION_COMPLETE.md)
- [Next.js Docs](https://nextjs.org/docs)
- [tRPC Docs](https://trpc.io/docs)

---

## 🎯 Next Steps

1. Test all pages and features
2. Update environment variables for production
3. Deploy to Vercel or Railway
4. Configure custom domain
5. Set up monitoring and analytics

---

**Need Help?** Check `MIGRATION_COMPLETE.md` for detailed information.
