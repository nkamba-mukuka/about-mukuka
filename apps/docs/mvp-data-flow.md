# MVP Data Flow & Technical Decisions — Latte AI Portfolio

## Overview

This document shows how **data moves through the system** and the **key technical choices** for the MVP.

It ensures clarity for developers, designers, and stakeholders.

---

## 1️⃣ Data Flow (Step-by-Step)

### User Interaction Flow

```txt
+----------------+         +----------------+        +----------------+
|    Visitor     |         |    Frontend    |        |     Backend    |
|  (Browser)    | ---->   |  React + R3F   | ---->  | Node.js / API |
| clicks menu   |         | MenuBoard /    |        | /api/ask      |
| or submits Q  |         | QuestionInput  |        |                |
+----------------+         +----------------+        +----------------+
                                         |
                                         v
                               +----------------+
                               |    AI Layer    |
                               | Vertex AI /    |
                               | OpenAI LLM     |
                               +----------------+
                                         |
                                         v
                               +----------------+
                               | Backend formats|
                               | response       |
                               +----------------+
                                         |
                                         v
                               +----------------+
                               |   Frontend     |
                               | CoffeeCup      |
                               | renders text   |
                               +----------------+
                                         |
                                         v
                               Optional: Firestore logs



2️⃣ Technical Decisions

| Area               | Choice & Reason                                                               |
| ------------------ | ----------------------------------------------------------------------------- |
| Frontend Framework | **React + React Three Fiber (R3F)** – easy 3D integration, works with Next.js |
| Backend Framework  | **Node.js / Next.js API routes or Cloud Functions** – lightweight, serverless |
| AI Layer           | **Vertex AI (GCP) or OpenAI API** – fast, controllable persona, scalable      |
| Database           | **Firestore (GCP)** – schema-less, simple logging, optional menu storage      |
| State Management   | **Zustand or React Context** – lightweight, session-based                     |
| 3D Rendering       | R3F, with **CoffeeCup**, **MenuBoard**, **Barista** components                |
| Deployment         | **GCP Hosting** (Next.js) – serverless frontend + backend                     |
| Error Handling     | Friendly fallback coffee text if AI fails                                     |
| Security           | API keys hidden in backend, no user authentication MVP                        |


3️⃣ Component Interaction Summary
| Component / System | Sends To / Receives From | Notes                                       |
| ------------------ | ------------------------ | ------------------------------------------- |
| MenuBoard / Input  | Backend API `/api/ask`   | Menu clicks or question text                |
| Backend API        | AI Layer                 | Formats prompt for barista persona          |
| AI Layer           | Backend API              | Returns response text                       |
| Backend API        | Frontend (CoffeeCup)     | Sends formatted response                    |
| CoffeeCup          | Renders text             | Animation and display                       |
| Optional Logging   | Firestore                | Stores menu selection / question / response |
