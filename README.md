# Latte AI Portfolio ☕✨

An interactive, video-based portfolio experience where an AI barista answers questions about Mukuka Nkamba's work, skills, and experience. Instead of traditional portfolio pages, visitors explore through a cozy coffee shop interface where responses are served as coffee.

## 🎯 Project Overview

**Latte AI Portfolio** is a unique portfolio website that combines:
- **Video-based UI** - Immersive coffee shop experience with video backgrounds
- **AI-Powered Barista** - Intelligent responses with a girly, vibey personality
- **Interactive Menu** - Coffee-themed menu items for different portfolio sections
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🏗️ Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React + TypeScript)             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   App.tsx    │  │  Components  │  │   Services   │      │
│  │  (Views)     │  │  (UI)        │  │  (API/Fire)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│         Backend API (Firebase Cloud Functions)              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Express     │  │  AI Prompt  │  │  Firestore   │      │
│  │  Router      │  │  Handler    │  │  Logger      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Firestore Database                       │
│              (Interaction Logging & Analytics)              │
└─────────────────────────────────────────────────────────────┘
```

### Tech Stack

**Frontend:**
- React 19 + TypeScript
- Tailwind CSS for styling
- Axios for API calls
- Firebase SDK for Firestore integration

**Backend:**
- Node.js + Express
- Firebase Cloud Functions
- Hardcoded AI responses (MVP approach - cost-effective)

**Database:**
- Firestore (production) for interaction logging

**Deployment:**
- Firebase Hosting (frontend)
- Firebase Cloud Functions (backend)

## 📁 Project Structure

```
latte-ai-portfolio/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── api/             # API integration
│   │   │   └── askAI.ts
│   │   ├── components/      # React components
│   │   │   ├── QuestionInput.tsx
│   │   │   ├── Barista.tsx  # (Unused - 3D component)
│   │   │   └── MenuBoard.tsx # (Unused - 3D component)
│   │   ├── config/          # Configuration files
│   │   │   └── firebase.ts
│   │   ├── services/        # Service layer
│   │   │   └── firestore.ts
│   │   ├── App.tsx          # Main application component
│   │   └── index.tsx        # Entry point
│   ├── public/              # Static assets (videos, images)
│   └── package.json
│
├── functions/                # Firebase Cloud Functions
│   ├── backend/
│   │   ├── api/             # API routes
│   │   │   └── ask.js
│   │   ├── ai/              # AI response generation
│   │   │   └── prompt.js
│   │   └── utils/           # Utilities
│   │       └── firestore.js
│   ├── src/
│   │   └── index.ts         # Functions entry point
│   └── package.json
│
├── apps/docs/               # Documentation
│   ├── system-architecture.md
│   ├── mvp-component-breakdown.md
│   ├── mvp-data-flow.md
│   └── functional-requirements.md
│
├── firebase.json             # Firebase configuration
├── firestore.rules          # Firestore security rules
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)
- Firebase project with Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd latte-ai-portfolio
   ```

2. **Set up Firebase configuration**
   ```bash
   # Create frontend/.env file
   cd frontend
   cp .env.example .env
   # Edit .env with your Firebase config values
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies**
   ```bash
   cd functions
   npm install
   ```

### Running Locally

**Frontend:**
```bash
cd frontend
npm start
# Opens http://localhost:3000
```

**Backend (deployed to Firebase):**
The backend runs on Firebase Cloud Functions. To test locally, you can use the Firebase emulator (optional):
```bash
cd functions
npm run serve
```

### Deployment

**Deploy Backend:**
```bash
cd functions
firebase deploy --only functions
```

**Deploy Frontend:**
```bash
cd frontend
npm run build
firebase deploy --only hosting
```

**Deploy Everything:**
```bash
firebase deploy
```

## 🎨 Features

### Views

1. **Shop View** - Main coffee shop interface with menu and barista video
2. **Coffee View** - Displays AI response as a coffee receipt
3. **Chat View** - Interactive chat interface with the barista
4. **About View** - Introduction to the portfolio

### Menu Items

- **Origin Roast (Americano)** - About Me
- **Java Script Injection (Espresso)** - Skills
- **Full-Stack Filter (Cold Brew)** - Projects
- **Legacy Blend (Macchiato)** - Experience
- **Academic Steam (Flat White)** - Education
- **Matcha Networking** - Contact

### AI Personality

The AI barista has a girly, vibey personality with expressions like:
- "Ouuu"
- "Opps"
- "Too good"
- "Honestly"
- "Like"

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Adaptive video positioning
- Flexible menu layout (stacks on mobile)
- Responsive text sizes
- Touch-friendly interactions

## 🔧 Configuration

### Environment Variables

Create `frontend/.env`:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=latte-ai-portfolio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=latte-ai-portfolio
REACT_APP_FIREBASE_STORAGE_BUCKET=latte-ai-portfolio.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1014842419753
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Firebase Configuration

See `frontend/FIRESTORE_SETUP.md` for detailed Firestore setup instructions.

## 📚 Documentation

- [System Architecture](./apps/docs/ystem-architecture.md)
- [Component Breakdown](./apps/docs/mvp-component-breakdown.md)
- [Data Flow](./apps/docs/mvp-data-flow.md)
- [Functional Requirements](./apps/docs/functional-requirements.md)
- [Backend Setup](./functions/README.md)
- [Firestore Setup](./frontend/FIRESTORE_SETUP.md)
- [Postman Testing](./functions/POSTMAN_TESTING.md)

## 🧪 Testing

### API Testing

Use Postman or curl to test the backend:

```bash
curl -X POST https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask \
  -H "Content-Type: application/json" \
  -d '{"type":"question","value":"What are your skills?"}'
```

See [POSTMAN_TESTING.md](./functions/POSTMAN_TESTING.md) for more examples.

## 🐛 Troubleshooting

### Common Issues

1. **Firebase config errors**
   - Ensure `.env` file exists in `frontend/` directory
   - Verify all environment variables are set
   - Restart dev server after updating `.env`

2. **API not responding**
   - Check Firebase Functions are deployed
   - Verify CORS is enabled
   - Check browser console for errors

3. **Videos not loading**
   - Ensure video files are in `frontend/public/`
   - Check file names match in code
   - Verify video formats are supported

## 📝 License

This project is private and proprietary.

## 👤 Author

**Mukuka Nkamba**
- Full Stack Software Engineer | Data Analyst
- Email: mukukankambaa@gmail.com
- LinkedIn: [linkedin.com/in/mukuka-nkamba-4a9b16290](https://linkedin.com/in/mukuka-nkamba-4a9b16290)
- GitHub: [github.com/nkamba-mukuka](https://github.com/nkamba-mukuka)

## 🙏 Acknowledgments

- Built with React, Firebase, and lots of coffee ☕
- Inspired by the cozy coffee shop atmosphere

---

**Live Site**: [latte-ai-portfolio.web.app](https://latte-ai-portfolio.web.app)
