# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### 1. Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend (in new terminal)
cd functions
npm install
```

### 2. Configure Environment

Create `frontend/.env`:
```env
REACT_APP_FIREBASE_API_KEY=AIzaSyD9U7LXhlEKF2LuwckjcaKo33ktOv5rGUQ
REACT_APP_FIREBASE_AUTH_DOMAIN=about-mukuka.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=about-mukuka
REACT_APP_FIREBASE_STORAGE_BUCKET=about-mukuka.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1014842419753
REACT_APP_FIREBASE_APP_ID=1:1014842419753:web:73017c4440279bad514a38
REACT_APP_FIREBASE_MEASUREMENT_ID=G-PR6EXF8MFE
```

### 3. Run Locally

```bash
# Frontend (from frontend/)
npm start
# Opens http://localhost:3000
```

### 4. Deploy

```bash
# Build frontend
cd frontend
npm run build

# Deploy everything
cd ..
firebase deploy
```

## 📚 Documentation Quick Links

- [Main README](./README.md) - Project overview
- [Architecture](./ARCHITECTURE.md) - System architecture
- [Components](./frontend/COMPONENTS.md) - Component docs
- [Deployment](./DEPLOYMENT.md) - Deployment guide
- [Code Cleanup](./CODE_CLEANUP.md) - Code organization

## 🎯 Key Features

- ✅ Video-based UI
- ✅ AI-powered responses
- ✅ Responsive design
- ✅ Firestore logging
- ✅ Production-ready

## 🔗 Important URLs

- **Live Site**: https://about-mukuka.web.app
- **API Endpoint**: https://us-central1-about-mukuka.cloudfunctions.net/askAI/api/ask
- **Firebase Console**: https://console.firebase.google.com/project/about-mukuka

---

**Need Help?** Check the [README](./README.md) or [Troubleshooting](./README.md#troubleshooting) section.
