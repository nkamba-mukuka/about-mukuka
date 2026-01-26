# Architecture Documentation - Latte AI Portfolio

## Overview

Latte AI Portfolio is a modern, video-based portfolio application built with React and Firebase. The architecture follows a clean separation of concerns with a client-server model.

## System Architecture

### High-Level Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              React Application (Frontend)             │  │
│  │  • View Management (Shop, Coffee, Chat, About)        │  │
│  │  • User Interaction Handling                          │  │
│  │  • Video Background Rendering                         │  │
│  │  • Responsive UI Components                           │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/REST
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                      Application Layer                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Firebase Cloud Functions (Backend)            │  │
│  │  • Express Router                                     │  │
│  │  • API Endpoints (/api/ask)                           │  │
│  │  • Request Validation                                 │  │
│  │  • Response Formatting                                │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                        Business Logic                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              AI Response Generation                   │  │
│  │  • Hardcoded Portfolio Data                          │  │
│  │  • Barista Persona Logic                             │  │
│  │  • Response Templates                                │  │
│  │  • Keyword Matching                                   │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                        Data Layer                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                    Firestore                         │  │
│  │  • Interaction Logging                               │  │
│  │  • Analytics Data                                    │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Component Architecture

### Frontend Components

#### App.tsx (Main Component)
**Responsibilities:**
- View state management (shop, coffee, chat, about)
- API integration
- Video loading and management
- Responsive breakpoint handling

**State Management:**
- `view`: Current view state
- `currentResponse`: AI response for coffee view
- `lastQuestion` / `lastResponse`: Chat view data
- `isLoading`: Loading states
- `isMobile`: Responsive state

#### QuestionInput Component
**Responsibilities:**
- User input capture
- Form submission handling
- Loading state display

#### Unused Components (3D)
- `Barista.tsx` - 3D barista model (not currently used)
- `MenuBoard.tsx` - 3D menu board (not currently used)

### Backend Architecture

#### API Layer (`functions/src/index.ts`)
- Express application setup
- CORS configuration
- Route mounting
- Health check endpoint

#### Request Handler (`functions/backend/api/ask.js`)
- Request validation
- Type checking (menu/question)
- Error handling
- Response formatting

#### AI Logic (`functions/backend/ai/prompt.js`)
- Portfolio data structure
- Keyword matching
- Response generation
- Barista persona implementation

#### Utilities (`functions/backend/utils/firestore.js`)
- Firestore logging
- Error handling
- Optional analytics

## Data Flow

### User Interaction Flow

```
1. User Action (Menu Click / Question)
   │
   ▼
2. Frontend: handleMenuSelect() / handleQuestionSubmit()
   │
   ▼
3. API Call: askAI(type, value)
   │
   ▼
4. Backend: POST /api/ask
   │
   ▼
5. AI Logic: generateAIResponse()
   │
   ├─► Menu Selection → Direct response lookup
   └─► Question → Keyword matching → Response generation
   │
   ▼
6. Response returned to frontend
   │
   ▼
7. View transition (coffee/chat)
   │
   ▼
8. Optional: Firestore logging
```

## Technology Choices

### Frontend
- **React 19**: Latest React with improved performance
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first styling, responsive design
- **Axios**: HTTP client for API calls
- **Firebase SDK**: Firestore integration

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Firebase Cloud Functions**: Serverless deployment
- **Firestore**: NoSQL database for logging

### Why These Choices?

1. **React**: Component-based, large ecosystem, great for interactive UIs
2. **TypeScript**: Catches errors early, improves maintainability
3. **Tailwind**: Rapid UI development, consistent design system
4. **Firebase**: Integrated services, easy deployment, scalable
5. **Hardcoded AI**: Cost-effective MVP, no API costs, instant responses

## Security Considerations

### Current Implementation
- CORS enabled for all origins (development)
- Firestore rules allow read/write (MVP - needs tightening)
- No authentication required (public portfolio)

### Production Recommendations
1. **CORS**: Restrict to specific domains
2. **Firestore Rules**: Implement proper security rules
3. **Rate Limiting**: Add rate limiting to API endpoints
4. **Input Validation**: Enhanced validation on backend
5. **Error Handling**: Sanitize error messages

## Performance Considerations

### Frontend
- **Video Optimization**: Videos are preloaded and looped
- **Lazy Loading**: Components load on demand
- **Responsive Images**: Adaptive sizing for different screens
- **Code Splitting**: React handles automatic code splitting

### Backend
- **Serverless**: Auto-scaling with Cloud Functions
- **Caching**: Consider adding response caching
- **Cold Starts**: First request may be slower (~1-2s)

## Scalability

### Current Limitations
- Hardcoded responses (not scalable for dynamic content)
- Single region deployment
- No CDN for static assets

### Future Improvements
1. **AI Integration**: Replace hardcoded with actual AI (Vertex AI/OpenAI)
2. **CDN**: Use Firebase Hosting CDN for videos
3. **Caching**: Implement Redis or similar for API responses
4. **Multi-region**: Deploy functions to multiple regions

## Deployment Architecture

```
┌─────────────────────────────────────────┐
│      Firebase Hosting (Frontend)        │
│  • Static files (build/)                 │
│  • CDN distribution                      │
│  • HTTPS enabled                         │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│   Firebase Cloud Functions (Backend)    │
│  • Serverless execution                  │
│  • Auto-scaling                          │
│  • Pay-per-use                          │
└─────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│         Firestore Database               │
│  • NoSQL document store                  │
│  • Real-time capabilities                │
│  • Automatic scaling                     │
└─────────────────────────────────────────┘
```

## Monitoring & Analytics

### Current Implementation
- Firestore logging for interactions
- Browser console logging
- Firebase Analytics (if configured)

### Recommended Additions
1. **Error Tracking**: Sentry or similar
2. **Performance Monitoring**: Firebase Performance
3. **User Analytics**: Enhanced Firebase Analytics
4. **API Monitoring**: Cloud Functions logs

## Development Workflow

### Local Development
1. Frontend: `npm start` (port 3000)
2. Backend: Deployed to Firebase (no local emulator)
3. Testing: Manual testing + Postman for API

### Deployment Process
1. Build frontend: `npm run build`
2. Deploy functions: `firebase deploy --only functions`
3. Deploy hosting: `firebase deploy --only hosting`
4. Verify: Check live site

## Code Organization Principles

1. **Separation of Concerns**: Clear boundaries between layers
2. **Single Responsibility**: Each component has one job
3. **DRY**: Don't repeat yourself
4. **Type Safety**: TypeScript for type checking
5. **Modularity**: Reusable components and utilities

## Future Architecture Considerations

### Potential Enhancements
1. **State Management**: Add Zustand or Redux for complex state
2. **3D Integration**: Re-enable React Three Fiber components
3. **Real-time Updates**: WebSocket for live interactions
4. **Progressive Web App**: PWA capabilities
5. **Offline Support**: Service workers for offline access

---

**Last Updated**: January 2026
**Version**: 1.0.0
