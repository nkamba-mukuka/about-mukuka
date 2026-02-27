# Firebase Configuration

This directory contains Firebase client-side configuration files for the Latte AI Portfolio project.

## Files

- **`firebase.ts`** - Firebase configuration using environment variables (secure, production-ready)

## Setup

1. Copy `.env.example` to `.env.local` (for Next.js) or `.env`
2. Fill in your Firebase configuration values from your Firebase console
3. The `.env` file is gitignored, so your secrets are protected

## Usage

```typescript
import { db, analytics } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

// Use Firestore
const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "interactions"), {
      question: "What is your experience?",
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
```

## Available Exports

- `app` - Firebase app instance
- `analytics` - Firebase Analytics instance (null on server-side)
- `db` - Firestore database instance

## Project Details

- **Project ID**: `about-mukuka`
- **Account**: `mukukankambaa@gmail.com`
- **Database**: Firestore (default) in `us-central1`

