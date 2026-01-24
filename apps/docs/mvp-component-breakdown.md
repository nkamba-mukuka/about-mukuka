# MVP Component Breakdown — Latte AI Portfolio

This document maps out the **frontend components, backend endpoints, and AI interactions** for the MVP.

It is intended to guide development and ensure clear separation of responsibilities.

---

## 1️⃣ Frontend Components

### 1. App
**Description:** Root component of the application.  
**Responsibilities:**
- Initialize React app
- Provide global state (Zustand / Context)
- Handle routing (if multiple pages later)

---

### 2. CoffeeShopScene
**Description:** Main 3D environment.  
**Tech:** React Three Fiber (R3F)  
**Responsibilities:**
- Render 3D coffee shop
- Handle camera & lighting
- Display interactive objects (menu board, counter, barista)
- Animate coffee cup appearing

**Props / State:**
- `currentResponse`: AI text to render on coffee
- `interactionInProgress`: boolean for animation state

---

### 3. MenuBoard
**Description:** 3D or overlay menu showing portfolio sections.  
**Responsibilities:**
- Display clickable categories (About, Projects, Skills)
- Trigger AI request on click
- Optional hover effects

**Props:**
- `menuItems`: Array of {id, name, description}
- `onMenuSelect(itemId)`

---

### 4. CoffeeCup
**Description:** Visual representation of AI response.  
**Responsibilities:**
- Render cup in scene
- Animate cup appearing
- Render AI text on/above coffee

**Props:**
- `responseText`: string
- `cupType`: espresso / latte / cappuccino (controls size / animation)
- `animationState`: idle / pouring / showing

---

### 5. QuestionInput
**Description:** Overlay input for free-form user questions.  
**Responsibilities:**
- Capture text input
- Submit to backend API
- Clear input on submit

**Props:**
- `onSubmit(question: string)`

---

### 6. AIResponseHandler (Optional Wrapper)
**Description:** Bridges frontend with backend response.  
**Responsibilities:**
- Receive AI text from API
- Update `CoffeeCup` component
- Handle loading/fallback states

**Props / State:**
- `isLoading`: boolean
- `responseText`: string
- `error`: string (optional)

---

## 2️⃣ Backend Endpoints

| Endpoint           | Method | Description |
|-------------------|--------|-------------|
| `/api/menu`        | GET    | Returns menu items (static or Firestore) |
| `/api/ask`         | POST   | Receives question or menu selection and returns AI response |
| `/api/logInteraction` | POST | Optional: logs user interactions for analytics |

**Request / Response Example for `/api/ask`:**

**Request:**
```json
{
  "type": "menu" | "question",
  "value": "Projects"
}


3️⃣ AI Interaction Flow

Frontend triggers request (menu or question)

Backend receives request, formats AI prompt:

Role: Friendly coffee shop barista
Context: Portfolio of <your name>
Input: <menu item or question>


Backend sends prompt to AI service (Vertex AI / OpenAI)

AI returns response text

Backend optionally formats response (short/medium/long)

Frontend receives response and passes to CoffeeCup

Coffee cup animates and displays text



4️⃣ State Management (Frontend)

| State Name              | Purpose                      |
| ----------------------- | ---------------------------- |
| `currentResponse`       | AI response text to display  |
| `interactionInProgress` | Controls cup animation       |
| `menuItems`             | Stores menu categories       |
| `loading`               | API call in progress         |
| `error`                 | API errors/fallback messages |
