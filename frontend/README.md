# Latte AI Portfolio - Frontend

A beautiful, video-based portfolio experience built with React and TypeScript.

## 🎨 Features

- **Video-Based UI** - Immersive coffee shop experience with video backgrounds
- **AI-Powered Barista** - Intelligent responses with a girly, vibey personality
- **Interactive Menu** - Coffee-themed menu items for different portfolio sections
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Firestore Integration** - Logs interactions for analytics

## 🏗️ Architecture

### Component Structure

```
src/
├── App.tsx                 # Main orchestrator
├── components/
│   ├── ShopView.tsx       # Main shop interface
│   ├── CoffeeView.tsx     # Receipt display
│   ├── ChatView.tsx       # Chat interface
│   ├── AboutView.tsx      # Introduction
│   ├── LoadingView.tsx    # Loading screen
│   └── QuestionInput.tsx   # Input form
├── api/
│   └── askAI.ts           # Backend API client
├── config/
│   └── firebase.ts        # Firebase config
├── services/
│   └── firestore.ts       # Firestore logging
└── utils/
    ├── textUtils.ts       # Text formatting
    └── responsive.ts      # Responsive utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project configured

### Installation

```bash
npm install
```

### Environment Setup

Create `.env` file:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=latte-ai-portfolio.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=latte-ai-portfolio
REACT_APP_FIREBASE_STORAGE_BUCKET=latte-ai-portfolio.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1014842419753
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Development

```bash
npm start
```

Opens http://localhost:3000

### Build

```bash
npm run build
```

Creates optimized production build in `build/` directory.

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Features

- Adaptive video positioning
- Flexible menu layout (stacks on mobile)
- Responsive text sizes
- Touch-friendly interactions
- Safe area insets for mobile devices

## 🎯 Views

1. **Shop View** - Main interface with menu and barista video
2. **Coffee View** - Displays AI response as receipt
3. **Chat View** - Interactive chat with barista
4. **About View** - Introduction with staggered bubbles

## 🔧 Configuration

### Firebase

See `FIRESTORE_SETUP.md` for detailed setup instructions.

### API Endpoint

Backend API endpoint is configured in `src/api/askAI.ts`:
- Production: `https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask`

## 📚 Documentation

- [Component Documentation](./COMPONENTS.md)
- [Firestore Setup](./FIRESTORE_SETUP.md)
- [Architecture](../ARCHITECTURE.md)

## 🧪 Testing

### Manual Testing

1. Test menu item clicks
2. Test question submission
3. Test responsive breakpoints
4. Test video loading
5. Test Firestore logging

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

**Videos not loading**
- Check video files exist in `public/` directory
- Verify file names match code
- Check browser console for errors

**Firebase errors**
- Verify `.env` file exists
- Check environment variables are correct
- Restart dev server after updating `.env`

**Responsive issues**
- Clear browser cache
- Check Tailwind classes are correct
- Verify breakpoints in browser dev tools

## 📦 Dependencies

### Production
- `react` - UI framework
- `react-dom` - DOM rendering
- `axios` - HTTP client
- `firebase` - Firebase SDK

### Development
- `typescript` - Type checking
- `tailwindcss` - Styling
- `react-scripts` - Build tooling

## 🚢 Deployment

See [DEPLOYMENT.md](../DEPLOYMENT.md) for deployment instructions.

Quick deploy:
```bash
npm run build
firebase deploy --only hosting
```

## 📝 Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Component-based architecture

## 🔮 Future Enhancements

- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Implement 3D components (currently unused)
- [ ] Add PWA support
- [ ] Add offline support
- [ ] Performance optimizations

---

**Live Site**: [latte-ai-portfolio.web.app](https://latte-ai-portfolio.web.app)
