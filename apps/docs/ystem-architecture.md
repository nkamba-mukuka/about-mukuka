# System Architecture — Latte AI Portfolio

## Overview

The system is composed of four main layers:
1. Frontend (React / React Three Fiber)
2. Backend API (Node.js / GCP Cloud Functions)
3. AI Layer (LLM Service)
4. Database & Storage (Firestore / GCP)

The goal is to keep the architecture **modular, scalable, and lightweight**, focused on delivering the MVP experience.

---

## 1️⃣ Frontend

**Tech:** React + React Three Fiber (R3F)  
**Responsibilities:**
- Render 3D coffee shop scene
- Display menu and interactive UI
- Capture user input (menu clicks or questions)
- Render coffee cup and AI response text
- Manage session state (current coffee response, interaction history in session)

**Notes:**
- Zustand or React Context can be used for state management
- 3D interactions are lightweight: no physics simulation for MVP

---

## 2️⃣ Backend API

**Tech:** Node.js running on GCP Cloud Functions / Next.js API routes  
**Responsibilities:**
- Receive user interactions (menu selection / questions)
- Orchestrate AI requests
- Format AI responses for frontend consumption
- Optional: log interactions in Firestore for analytics

**Endpoints (MVP):**
| Endpoint              | Method | Description |
|----------------------|--------|-------------|
| `/api/ask`           | POST   | Receives question or menu selection, returns AI response |
| `/api/menu`          | GET    | Returns menu items (optional static JSON) |

---

## 3️⃣ AI Layer

**Tech:** OpenAI / Vertex AI (GCP)  
**Responsibilities:**
- Maintain AI persona: friendly coffee shop barista
- Generate responses **only about the portfolio owner**
- Constrain output to safe, concise answers
- Return response text to backend for formatting

**Implementation:**
- Backend sends prompt + context to AI service
- Backend formats output (short/medium/long)
- Frontend renders output on coffee cup

---

## 4️⃣ Database & Storage

**Tech:** Firestore (GCP)  
**Responsibilities:**
- Optional MVP usage:
  - Log interactions for analytics
  - Store menu items (if dynamic)
  - Store AI prompts/templates
- No user accounts in MVP

**Notes:**
- Firestore is schema-less: perfect for quick MVP logging
- Storage can be used for images (coffee shop textures, cup images)

---

## 5️⃣ Data Flow (User → Coffee Cup)

```txt
User Interaction (click / question)
        ↓
Frontend (React + R3F)
        ↓
Backend API (Node.js / Cloud Function)
        ↓
AI Layer (Vertex AI / LLM)
        ↓
Backend formats response
        ↓
Frontend renders coffee cup with text


6️⃣ Architecture Diagram (High-Level)
+----------------+       +----------------+       +----------------+
|   Frontend     | <---> |   Backend API  | <---> |     AI Layer   |
| React + R3F    |       | Node.js        |       | LLM Service    |
| 3D Coffee Shop |       | GCP Cloud Func |       | Persona Layer  |
+----------------+       +----------------+       +----------------+
        |
        v
+----------------+
| Firestore DB   |
| (Logs/Menu)    |
+----------------+
