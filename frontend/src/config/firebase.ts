import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Firebase configuration - using production Firebase (NO EMULATORS)
// Set these values in .env file (see .env.example)
// Get values from Firebase Console > Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "latte-ai-portfolio.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "latte-ai-portfolio",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "latte-ai-portfolio.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "1014842419753",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Validate required config
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.warn(
    "⚠️ Firebase config missing! Create a .env file with REACT_APP_FIREBASE_API_KEY and REACT_APP_FIREBASE_PROJECT_ID"
  );
}

// Initialize Firebase (production only - no emulators)
let app: FirebaseApp;
let db: Firestore;
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  // Only initialize if not already initialized
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore - PRODUCTION ONLY (no emulator connection)
  // Note: We explicitly do NOT call connectFirestoreEmulator() - using production Firestore
  db = getFirestore(app);

  // Initialize Analytics (only in browser)
  if (typeof window !== "undefined" && "measurementId" in firebaseConfig) {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.warn("Analytics initialization failed:", error);
    }
  }
} else {
  // Server-side: minimal initialization
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
}

export { app, db, analytics };
export default app;

