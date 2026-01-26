# Firestore Setup Guide

This guide will help you set up Firestore in the frontend for production use (no emulators).

## Step 1: Get Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `latte-ai-portfolio`
3. Click the gear icon ⚙️ > **Project Settings**
4. Scroll down to **Your apps** section
5. If you don't have a web app yet:
   - Click **Add app** > **Web** (</> icon)
   - Register your app with a nickname (e.g., "Latte AI Portfolio Web")
   - Copy the configuration values

## Step 2: Create Environment File

Create a `.env` file in the `frontend/` directory:

```bash
cd frontend
touch .env
```

Add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=latte-ai-portfolio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=latte-ai-portfolio
REACT_APP_FIREBASE_STORAGE_BUCKET=latte-ai-portfolio.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1014842419753
REACT_APP_FIREBASE_APP_ID=your-app-id-here
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id-here
```

Replace the placeholder values with your actual Firebase config values.

## Step 3: Verify Firestore Rules

Make sure your Firestore rules allow writes (currently set to allow all for MVP):

```bash
firebase deploy --only firestore:rules
```

Current rules allow read/write to all documents. Update these for production security.

## Step 4: Test the Setup

1. Start the development server:
   ```bash
   cd frontend
   npm start
   ```

2. Open the browser console and check for any Firebase errors

3. Interact with the app - interactions should be logged to Firestore

## Step 5: View Logged Interactions

1. Go to [Firestore Console](https://console.firebase.google.com/project/latte-ai-portfolio/firestore)
2. You should see an `interactions` collection
3. Each interaction will have:
   - `type`: "question" or "menu"
   - `question`: The user's input or menu selection
   - `response`: The AI's response
   - `timestamp`: When the interaction occurred

## Production vs Emulators

✅ **Production Setup (Current)**
- Uses real Firestore database
- Data persists and is accessible in Firebase Console
- No emulator configuration needed
- Works in deployed environments

❌ **Emulator Setup (Not Used)**
- Would require `connectFirestoreEmulator()` call
- Only for local development
- Data doesn't persist
- Not suitable for production

## Troubleshooting

### Error: "Firebase: Error (auth/configuration-not-found)"
- Make sure your `.env` file exists in the `frontend/` directory
- Verify all environment variables are set correctly
- Restart the dev server after creating/updating `.env`

### Error: "Permission denied"
- Check Firestore rules: `firebase deploy --only firestore:rules`
- Make sure rules allow writes to `interactions` collection

### Interactions not logging
- Check browser console for errors
- Verify Firestore is initialized correctly
- Check network tab for Firestore requests

## Next Steps

- [ ] Add proper Firestore security rules
- [ ] Set up Firestore indexes if needed for queries
- [ ] Add analytics dashboard for interaction data
- [ ] Consider adding user authentication (optional)

