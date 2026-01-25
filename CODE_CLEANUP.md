# Code Cleanup & Organization Guide

## Overview

This document outlines the codebase structure, unused files, and recommendations for cleanup.

## Current Structure

### ✅ Active Components

**Frontend:**
- `src/App.tsx` - Main application (refactored, clean)
- `src/components/ShopView.tsx` - Shop interface
- `src/components/CoffeeView.tsx` - Receipt display
- `src/components/ChatView.tsx` - Chat interface
- `src/components/AboutView.tsx` - Introduction
- `src/components/LoadingView.tsx` - Loading screen
- `src/components/QuestionInput.tsx` - Input form
- `src/api/askAI.ts` - API client
- `src/config/firebase.ts` - Firebase config
- `src/services/firestore.ts` - Firestore logging
- `src/utils/textUtils.ts` - Text utilities
- `src/utils/responsive.ts` - Responsive utilities

**Backend:**
- `functions/src/index.ts` - Functions entry point
- `functions/backend/api/ask.js` - API route handler
- `functions/backend/ai/prompt.js` - AI response generation
- `functions/backend/utils/firestore.js` - Firestore utilities

### ⚠️ Unused Components (3D)

These components were created for a 3D React Three Fiber implementation but are not currently used:

- `src/components/Barista.tsx` - 3D barista model
- `src/components/MenuBoard.tsx` - 3D menu board
- `src/components/Scene.tsx` - (Does not exist - was planned)

**Decision**: Keep these files for future 3D implementation, or remove if not planning to use.

### 📁 Unused Files

**Root Level:**
- `lib/firebase.ts` - Duplicate Firebase config (use `frontend/src/config/firebase.ts` instead)
- `lib/README.md` - Outdated documentation

**Recommendation**: Remove or consolidate these files.

## Code Quality Improvements

### ✅ Completed

1. **Component Refactoring**
   - Split large App.tsx into smaller view components
   - Extracted utility functions
   - Improved code organization

2. **Documentation**
   - Created comprehensive README
   - Added architecture documentation
   - Component documentation
   - Deployment guide

3. **Responsive Design**
   - Enhanced mobile breakpoints
   - Added tablet optimizations
   - Improved touch interactions

4. **Code Organization**
   - Created utility modules
   - Separated concerns
   - Improved type safety

### 🔄 Recommended Improvements

1. **Remove Duplicate Files**
   ```bash
   # Remove duplicate Firebase config
   rm lib/firebase.ts
   rm lib/README.md
   ```

2. **Clean Up Unused 3D Components** (Optional)
   ```bash
   # If not planning to use 3D:
   rm frontend/src/components/Barista.tsx
   rm frontend/src/components/MenuBoard.tsx
   ```

3. **Add TypeScript to Backend**
   - Convert `functions/backend/**/*.js` to TypeScript
   - Improves type safety and consistency

4. **Add Error Boundaries**
   - Wrap components in error boundaries
   - Better error handling and user experience

5. **Add Loading States**
   - Skeleton loaders
   - Better UX during API calls

## File Organization

### Current Structure (Clean)

```
latte-ai-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/     # View components
│   │   ├── api/            # API clients
│   │   ├── config/         # Configuration
│   │   ├── services/       # Service layer
│   │   └── utils/          # Utilities
│   └── public/             # Static assets
│
├── functions/
│   ├── src/                # Functions entry
│   └── backend/
│       ├── api/            # API routes
│       ├── ai/             # AI logic
│       └── utils/          # Utilities
│
└── apps/docs/              # Documentation
```

### Recommended Cleanup

1. **Consolidate Documentation**
   - Move all docs to `docs/` directory
   - Keep only essential READMEs in root

2. **Remove Test Files** (if not using)
   - `App.test.tsx`
   - `setupTests.ts`

3. **Organize Media Files**
   - Move videos to `public/videos/`
   - Organize images in `public/images/`

## Code Standards

### TypeScript

- ✅ All frontend code uses TypeScript
- ⚠️ Backend uses JavaScript (consider migrating)

### Naming Conventions

- ✅ Components: PascalCase (`ShopView.tsx`)
- ✅ Utilities: camelCase (`textUtils.ts`)
- ✅ Constants: UPPER_SNAKE_CASE (if needed)

### File Organization

- ✅ One component per file
- ✅ Related utilities grouped
- ✅ Clear separation of concerns

## Performance Optimizations

### Completed

1. ✅ Component splitting
2. ✅ Lazy loading considerations
3. ✅ Responsive optimizations

### Recommended

1. **Code Splitting**
   ```typescript
   // Lazy load views
   const ShopView = lazy(() => import('./components/ShopView'));
   ```

2. **Memoization**
   ```typescript
   // Memoize expensive components
   export default memo(ShopView);
   ```

3. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Add responsive images

## Testing

### Current State

- Manual testing only
- No automated tests

### Recommended

1. **Unit Tests**
   - Test utility functions
   - Test component logic

2. **Integration Tests**
   - Test API integration
   - Test view transitions

3. **E2E Tests**
   - Test user flows
   - Test responsive behavior

## Security

### Current State

- ✅ CORS enabled
- ⚠️ Firestore rules permissive (MVP)
- ✅ Input validation

### Recommended

1. **Firestore Rules**
   - Restrict write access
   - Add authentication if needed

2. **Input Sanitization**
   - Sanitize user inputs
   - Validate on backend

3. **Rate Limiting**
   - Add rate limiting to API
   - Prevent abuse

## Documentation Status

### ✅ Complete

- Main README
- Architecture documentation
- Component documentation
- Deployment guide
- Frontend README
- Backend README

### 📝 To Add

- API documentation (OpenAPI/Swagger)
- Contributing guide
- Changelog
- Troubleshooting guide

---

**Last Updated**: January 2026
