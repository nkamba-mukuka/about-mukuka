# Deployment Guide

## Overview

This guide covers deploying the Latte AI Portfolio to production using Firebase.

## Prerequisites

1. Firebase CLI installed: `npm install -g firebase-tools`
2. Firebase project created: `latte-ai-portfolio`
3. Node.js 18+ installed
4. All environment variables configured

## Deployment Steps

### 1. Build Frontend

```bash
cd frontend
npm install
npm run build
```

This creates the `build/` directory with optimized production files.

### 2. Deploy Backend (Cloud Functions)

```bash
cd functions
npm install
firebase deploy --only functions
```

**Expected Output:**
```
✔  functions[askAI(us-central1)] Successful update operation.
Function URL (askAI(us-central1)): https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI
```

### 3. Deploy Frontend (Hosting)

```bash
# From project root
firebase deploy --only hosting
```

**Expected Output:**
```
✔  hosting[latte-ai-portfolio]: file upload complete
✔  Deploy complete!
Hosting URL: https://latte-ai-portfolio.web.app
```

### 4. Deploy Everything

```bash
# From project root
firebase deploy
```

This deploys both functions and hosting.

## Environment Variables

### Frontend

Create `frontend/.env` with:
```env
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=latte-ai-portfolio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=latte-ai-portfolio
REACT_APP_FIREBASE_STORAGE_BUCKET=latte-ai-portfolio.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1014842419753
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**Important**: Environment variables must be set before building. They are baked into the build at compile time.

### Backend

Backend uses Firebase Functions config (deprecated) or environment variables. For production, consider migrating to Firebase Functions environment variables:

```bash
firebase functions:config:set ai.provider="vertex"
```

## Firestore Rules

Deploy Firestore security rules:

```bash
firebase deploy --only firestore:rules
```

Current rules (MVP - permissive):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**⚠️ Security Note**: Update rules for production to restrict access.

## Verification

### Check Backend
```bash
curl https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/
# Should return: {"message":"Latte AI Portfolio API is running ☕"}
```

### Check Frontend
Visit: https://latte-ai-portfolio.web.app

### Check Firestore
1. Go to Firebase Console
2. Navigate to Firestore
3. Check `interactions` collection for logged data

## Troubleshooting

### Build Errors

**Error**: "Module not found"
- Solution: Run `npm install` in both `frontend/` and `functions/`

**Error**: "Environment variable not found"
- Solution: Create `.env` file in `frontend/` directory

### Deployment Errors

**Error**: "Functions deployment failed"
- Check: Node.js version matches `functions/package.json` engines
- Check: All dependencies installed
- Check: Linting passes (`npm run lint`)

**Error**: "Hosting deployment failed"
- Check: `frontend/build` directory exists
- Check: `firebase.json` hosting config is correct

### Runtime Errors

**Error**: "CORS error"
- Check: CORS is enabled in `functions/src/index.ts`
- Check: API endpoint is correct

**Error**: "Firestore permission denied"
- Check: Firestore rules are deployed
- Check: Rules allow the operation

## CI/CD (Future)

Consider setting up GitHub Actions or similar for automated deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd frontend && npm install && npm run build
      - run: cd functions && npm install
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: latte-ai-portfolio
```

## Rollback

If deployment fails:

1. **Functions**: Use Firebase Console to rollback to previous version
2. **Hosting**: Use `firebase hosting:clone` or redeploy previous build

## Performance Optimization

### Frontend
- Enable compression in `firebase.json`
- Use CDN for static assets
- Optimize video files (compress before upload)

### Backend
- Monitor function execution time
- Consider caching responses
- Optimize cold start times

## Monitoring

### Firebase Console
- Functions: View logs and metrics
- Hosting: View analytics
- Firestore: View usage and performance

### Custom Monitoring
- Set up error tracking (Sentry)
- Add performance monitoring
- Track user interactions

---

**Last Updated**: January 2026
