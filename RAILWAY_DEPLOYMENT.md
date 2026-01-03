# Railway Deployment Guide for Rivoaura Fantasy Cricket

## Current Status
- ✅ MySQL Database connected
- ✅ Environment variables configured
- ⚠️ Need to deploy latest code changes

## Environment Variables (Already Set)
```
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
DATABASE_URL=mysql://root:KGjYHZwPzWhhryOWFYFumCijtoJxjijM@nozomi.proxy.rlwy.net:49913/railway
JWT_SECRET=your_very_long_random_secret_key_here_change_this_in_production
NODE_ENV=production
FRONTEND_URL=https://rivoauralive.com
```

## Deployment Steps

### 1. Push Latest Code to GitHub
```bash
git add -A
git commit -m "Add backend Cricket API and authentication"
git push origin main
```

### 2. Deploy on Railway
- Click "Deploy" button in Railway dashboard (you have 2 pending changes)
- Wait for deployment to complete
- Check deployment logs for errors

### 3. Verify Deployment
- Visit https://rivoaura live.com/tournaments
- Check if matches are loading
- Test login/register functionality

## Build Configuration

### For Backend (Node.js Service)
```
Build Command: pnpm install
Start Command: pnpm start
Root Directory: /
```

### For Frontend (if separate service)
```
Build Command: cd client && pnpm install && pnpm build
Start Command: pnpm preview
Root Directory: /client
```

## Common Issues & Solutions

### Issue 1: Matches Not Loading
**Cause**: Frontend can't reach Cricket API due to CORS
**Solution**: The frontend is currently calling Cricket API directly. This works in development but might have CORS issues in production.

**Quick Fix**: 
- Make sure your domain is whitelisted by Cricket API
- Or implement the backend proxy we created (server/cricketApi.ts and server/matches.ts)

### Issue 2: Database Connection Failed
**Cause**: Wrong DATABASE_URL format
**Solution**: Make sure it's `mysql://` not `postgresql://`

### Issue 3: Authentication Not Working
**Cause**: JWT_SECRET not set or too short
**Solution**: Set a long random string (at least 32 characters)

## Next Steps After Deployment

1. **Test all features**:
   - Match loading
   - User registration
   - User login
   - Match details
   - Favorites
   - Notifications

2. **Monitor logs** in Railway dashboard for errors

3. **Implement backend Cricket API proxy** (recommended for security):
   - Move API calls from frontend to backend
   - Keep API key secret on server
   - Avoid CORS issues

## Production Checklist

- [ ] All environment variables set correctly
- [ ] Database schema pushed (`pnpm db:push`)
- [ ] Latest code pushed to GitHub
- [ ] Railway deployment successful
- [ ] Website loads at https://rivoauralive.com
- [ ] Matches are loading
- [ ] Login/Register working
- [ ] No console errors in browser

## Support

If you encounter issues:
1. Check Railway deployment logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Test API endpoints manually using curl or Postman
