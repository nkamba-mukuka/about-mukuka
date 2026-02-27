import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Firebase configuration — about-mukuka project
// Set these in frontend/.env (see .env.example)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "about-mukuka.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "about-mukuka",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "about-mukuka.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "119916570168",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.warn(
    "Firebase config missing. Create frontend/.env with REACT_APP_FIREBASE_* vars (see .env.example)."
  );
}

let app: FirebaseApp;
let db: Firestore;
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
  if (typeof window !== "undefined" && firebaseConfig.measurementId) {
    try {
      analytics = getAnalytics(app);
    } catch (error) {
      console.warn("Analytics init failed:", error);
    }
  }
} else {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
}

export { app, db, analytics };
export default app;
