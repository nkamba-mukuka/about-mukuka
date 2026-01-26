# Frontend Components Documentation

## Overview

The frontend is built with React and TypeScript, using a component-based architecture. Each view is a separate component for better maintainability and code organization.

## Component Structure

```
src/
├── App.tsx                 # Main application orchestrator
├── components/
│   ├── ShopView.tsx       # Main coffee shop interface
│   ├── CoffeeView.tsx     # Coffee receipt display
│   ├── ChatView.tsx       # Interactive chat interface
│   ├── AboutView.tsx      # Introduction view
│   ├── LoadingView.tsx    # Loading screen
│   ├── QuestionInput.tsx   # Question input form
│   ├── Barista.tsx        # (Unused - 3D component)
│   └── MenuBoard.tsx      # (Unused - 3D component)
├── api/
│   └── askAI.ts           # API integration
├── config/
│   └── firebase.ts        # Firebase configuration
├── services/
│   └── firestore.ts       # Firestore logging
└── utils/
    └── textUtils.ts       # Text formatting utilities
```

## Components

### App.tsx
**Purpose**: Main application component that manages state and view routing.

**Responsibilities**:
- View state management
- API call orchestration
- Video loading management
- Responsive breakpoint handling
- Firestore logging integration

**State**:
- `view`: Current view ('shop' | 'coffee' | 'chat' | 'about')
- `currentResponse`: AI response for coffee view
- `lastQuestion` / `lastResponse`: Chat view data
- `isLoading`: Loading states
- `isMobile`: Responsive state

**Key Methods**:
- `handleMenuSelect()`: Handles menu item clicks
- `handleQuestionSubmit()`: Handles question submissions
- `handleBackToShop()`: Resets state and returns to shop

---

### ShopView.tsx
**Purpose**: Main coffee shop interface with menu and barista video.

**Props**:
- `videoRef`: Video element reference
- `isMobile`: Mobile breakpoint flag
- `isLoading`: Loading state
- `onMenuSelect`: Menu item click handler
- `onQuestionSubmit`: Question submit handler
- `onAboutClick`: About view navigation
- `onVideoLoad`: Video load callback

**Features**:
- Responsive menu sidebar (stacks on mobile)
- Barista video background
- Interactive menu items
- Question input form

---

### CoffeeView.tsx
**Purpose**: Displays AI response as a coffee receipt.

**Props**:
- `videoRef`: Video element reference
- `response`: AI response text
- `onBack`: Back to shop handler

**Features**:
- Receipt-style layout
- Text summarization (600 char limit)
- Link rendering
- Responsive design

---

### ChatView.tsx
**Purpose**: Interactive chat interface with the barista.

**Props**:
- `videoRef`: Video element reference
- `question`: User's question
- `response`: Barista's response
- `isLoading`: Loading state
- `onBack`: Back to shop handler
- `onQuestionSubmit`: Question submit handler

**Features**:
- Chat bubble UI
- Staggered message animations
- Follow-up question input
- Link rendering in responses

---

### AboutView.tsx
**Purpose**: Introduction view with staggered bubble animations.

**Props**:
- `videoRef`: Video element reference
- `showBubble1/2/3`: Bubble visibility states
- `onBack`: Back to shop handler

**Features**:
- Staggered bubble animations (500ms, 2500ms, 4500ms)
- Introduction messages
- Video background

---

### LoadingView.tsx
**Purpose**: Initial loading screen while videos load.

**Features**:
- Animated coffee cup
- Progress indicator
- 5-second timeout fallback

---

### QuestionInput.tsx
**Purpose**: Reusable question input form component.

**Props**:
- `onSubmit`: Submit handler
- `isLoading`: Loading state

**Features**:
- Responsive sizing
- Disabled state handling
- Form validation

---

## Utilities

### textUtils.ts
**Functions**:
- `renderContentWithLinks()`: Converts URLs to clickable links
- `summarizeForReceipt()`: Truncates text at punctuation

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features
- Adaptive video positioning
- Flexible menu layout
- Responsive text sizes
- Touch-friendly interactions
- Safe area insets for mobile devices

### CSS Classes
- `md:` - Medium screens and up (768px+)
- `lg:` - Large screens and up (1024px+)
- Custom responsive utilities in `index.css`

---

## State Management

Currently using React's built-in state management:
- `useState` for component state
- `useEffect` for side effects
- `useRef` for DOM references

**Future Consideration**: Could migrate to Zustand or Context API for complex state if needed.

---

## Performance Considerations

1. **Video Loading**: Videos are preloaded and cached
2. **Component Splitting**: Views are separate components for code splitting
3. **Lazy Loading**: Components load on demand
4. **Memoization**: Consider adding `React.memo` for expensive components

---

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- ARIA labels (to be added)
- Focus management
- Screen reader compatibility (to be enhanced)

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Testing

Currently manual testing. Future additions:
- Unit tests for utilities
- Component tests with React Testing Library
- E2E tests with Cypress/Playwright
