# Latte AI Portfolio - Frontend ☕✨

A beautiful, girly 3D coffee shop portfolio built with React Three Fiber.

## Features

- 🎨 **3D Coffee Shop Environment** - Cozy, pastel-colored coffee shop scene
- ☕ **Interactive Menu Board** - Click menu items to learn about Mukuka
- 🤖 **AI Barista** - Ask questions and get responses served as coffee
- 💕 **Girly Aesthetic** - Pastel pinks, lavender, and cream colors
- ✨ **Smooth Animations** - Floating coffee cups, gentle barista movements
- 📊 **Firestore Integration** - Logs interactions for analytics (production Firestore, no emulators)

## Tech Stack

- **React** + **TypeScript**
- **React Three Fiber** - 3D rendering
- **Drei** - 3D helpers and utilities
- **Tailwind CSS** - Styling with custom girly palette
- **Axios** - API calls to backend
- **Firebase** - Firestore for interaction logging (production)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Firebase Configuration

**Important:** You need to create a `.env` file with your Firebase config.

1. Get your Firebase config from [Firebase Console](https://console.firebase.google.com/project/latte-ai-portfolio/settings/general)
2. Create `.env` file in the `frontend/` directory:

```bash
cd frontend
touch .env
```

3. Add your Firebase configuration (see `.env.example` for template):

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=latte-ai-portfolio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=latte-ai-portfolio
REACT_APP_FIREBASE_STORAGE_BUCKET=latte-ai-portfolio.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1014842419753
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

See `FIRESTORE_SETUP.md` for detailed instructions.

### 3. Run Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── api/
│   └── askAI.ts              # Backend API integration
├── config/
│   └── firebase.ts           # Firebase configuration (production)
├── services/
│   └── firestore.ts          # Firestore logging service
├── components/
│   ├── Scene.tsx            # Main 3D scene
│   ├── Barista.tsx           # 3D barista character
│   ├── CoffeeCup.tsx         # Coffee cup with text
│   ├── MenuBoard.tsx         # Interactive menu
│   └── QuestionInput.tsx     # Question input form
├── App.tsx                   # Main app component
└── index.css                 # Tailwind + custom styles
```

## Backend Integration

The frontend connects to the Firebase Cloud Function:
- **Endpoint**: `https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask`
- **Method**: POST
- **Body**: `{ type: "question" | "menu", value: string }`

## Firestore Integration

- **Production Firestore** - No emulators used
- **Interaction Logging** - All menu clicks and questions are logged to Firestore
- **Collection**: `interactions`
- **Fields**: `type`, `question`, `response`, `timestamp`

See `FIRESTORE_SETUP.md` for setup instructions.

## Customization

### Colors

Edit `tailwind.config.js` to customize the girly color palette:
- `pink-pastel`, `pink-soft`
- `lavender`, `lavender-dark`
- `cream`, `peach`, `rose`, `mauve`

### 3D Elements

All 3D components are in `src/components/`:
- Modify `Scene.tsx` to change the coffee shop layout
- Update `Barista.tsx` to enhance the barista character
- Customize `CoffeeCup.tsx` for different cup styles

## Important Notes

- ✅ **Production Firestore** - Uses real Firestore database, not emulators
- ✅ **Environment Variables** - Required for Firebase config (see `.env.example`)
- ✅ **No Emulator Setup** - All Firebase services use production

## Troubleshooting

### Firebase Errors
- Make sure `.env` file exists with correct values
- Restart dev server after creating/updating `.env`
- Check browser console for specific error messages

### Firestore Permission Errors
- Deploy Firestore rules: `firebase deploy --only firestore:rules`
- Check rules allow writes to `interactions` collection

## Next Steps

- [ ] Enhance barista 3D model with animations
- [ ] Add more decorative elements (flowers, fairy lights)
- [ ] Improve coffee cup text rendering
- [ ] Add sound effects
- [ ] Mobile responsiveness improvements
- [ ] Add Firestore security rules for production
