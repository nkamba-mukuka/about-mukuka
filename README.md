# Latte AI Portfolio

Portfolio site for **Mukuka Nkamba**.  
**Free deployment:** frontend on Firebase Hosting (Spark) + chatbot backend on [Render](https://render.com) (free tier). No upgrade to Firebase Blaze needed — see [Free deployment (no Blaze)](#free-deployment-no-blaze-no-paid-plans) below. — Full Stack Software Engineer | AI & GenAI (RAG) Enthusiast | Data Analyst | Content Creator. Includes an AI chatbot that answers questions about her work, skills, experience, and interests (professional, casual, and Gen Z / millennial phrasing).

## What’s in this repo

- **Frontend (React + TypeScript)** — Multi-page portfolio (Home, Case Studies, Work With Me, For Hiring Managers) and an **AI** page that talks to the backend.
- **Backend (Firebase Cloud Functions)** — One HTTP function `askAI` that serves `POST /api/ask` with hardcoded, keyword-based responses (no external AI API).
- **Firestore** — Optional interaction logging (configurable in code).

## Tech stack

| Layer    | Tech |
|----------|------|
| Frontend | React, TypeScript, Tailwind CSS, React Router, Axios |
| Backend  | Node.js, Express, Firebase Cloud Functions |
| Hosting  | Firebase Hosting (frontend) |
| API      | Cloud Function `askAI` at `/api/ask` |

## Quick start (local)

### 1. Install and run the frontend

```bash
cd frontend
npm install
npm start
```

App runs at **http://localhost:3000** (or the port shown in the terminal).

### 2. Run the AI backend locally (so the chatbot works)

In a **second terminal**:

```bash
cd functions
npm install
npm run serve:local
```

This starts the API at **http://localhost:5001/api/ask**.  
The frontend in development is configured to use this URL automatically.

### 3. Use the AI page

Open **http://localhost:3000/ai** and ask things like “hi”, “tell me about yourself”, “what’s your tech stack?”, “contact”, “cooking”, “what do you do at Hytel?”, etc.

## Deployment

You can run the full site (including the chatbot) **for free** without upgrading Firebase to Blaze.

---

### Free deployment (no Blaze, no paid plans)

Use **Firebase Hosting** (free Spark plan) for the frontend and **Render.com** (free tier) for the AI backend.

#### Step 1 — Deploy the AI backend to Render (free)

1. Create an account at [render.com](https://render.com) (free).
2. **New → Web Service**.
3. Connect your GitHub repo (this project).
4. Set:
   - **Root Directory:** `functions`
   - **Build Command:** `npm install`
   - **Start Command:** `node serve-local.js`
   - **Instance Type:** Free
5. Click **Create Web Service**. Wait for the first deploy to finish.
6. Copy your service URL, e.g. `https://latte-ai-chatbot-api.onrender.com`.  
   The API path is `/api/ask`, so the full URL is:  
   `https://YOUR-SERVICE-NAME.onrender.com/api/ask`

#### Step 2 — Point the frontend to your Render API

In **`frontend/.env`** add (use your real Render URL):

```env
REACT_APP_AI_API_URL=https://YOUR-SERVICE-NAME.onrender.com/api/ask
```

Example: if your Render service is `https://latte-ai-chatbot-api.onrender.com`, then:

```env
REACT_APP_AI_API_URL=https://latte-ai-chatbot-api.onrender.com/api/ask
```

#### Step 3 — Build and deploy the frontend to Firebase

```bash
cd frontend
npm run build
cd ..
npx firebase-tools deploy --only hosting
```

Use `npx firebase-tools` if `firebase` is not in your PATH. Log in first with `npx firebase-tools login` if needed.

Your site will be live at **https://about-mukuka.web.app** (or your Firebase Hosting URL), and the chatbot will call your Render API. No Blaze plan required.

**Note:** On Render’s free tier the service may spin down after inactivity; the first request after a while can be slow (cold start). For always-on hosting you’d need a paid plan or Firebase Blaze for Cloud Functions.

#### Resume (CV) download — "file wasn't available on site"

If the "Download resume" button fails on the live site (e.g. "file wasn't available"), use a **direct URL** to your PDF:

1. Upload your CV PDF somewhere that gives a direct link, e.g. Firebase Storage (make file public, copy download URL) or Google Drive (share "Anyone with the link", use a direct-download link).
2. In **`frontend/.env`** add: `REACT_APP_CV_URL=https://your-direct-pdf-url-here`
3. Rebuild and redeploy the frontend. The button will open that URL; users can download from there.

If you prefer to serve the PDF from the same site, put the file at **`frontend/public/cv.pdf`** and redeploy so it's included in the build (use when `REACT_APP_CV_URL` is not set).

---

### Paid option: Firebase Blaze (Cloud Functions)

If you later upgrade Firebase to the **Blaze** plan, you can host the backend on Firebase instead of Render:

1. [Upgrade the project to Blaze](https://console.firebase.google.com/project/about-mukuka/usage/details).
2. From repo root:
   ```bash
   cd frontend && npm run build && cd ..
   cd functions && npm run build && cd ..
   npx firebase-tools deploy
   ```
3. Remove or leave `REACT_APP_AI_API_URL` unset in `frontend/.env` so the production build uses the default Cloud Function URL.

---

### How the chatbot URL is chosen

- **Development** (`npm start`): uses **http://localhost:5001/api/ask**. Run `npm run serve:local` in `functions/` so the chatbot works locally.
- **Production** (deployed build):
  - If **`REACT_APP_AI_API_URL`** is set (e.g. your Render URL), the app uses that.
  - Otherwise it uses **https://us-central1-about-mukuka.cloudfunctions.net/askAI/api/ask** (only works if you’ve deployed Functions on Blaze).

---

### If something fails

- **“command not found: firebase”**  
  Use `npx firebase-tools` instead of `firebase`.

- **Chatbot “Request failed” on the live site**  
  - Using free setup: ensure the backend is deployed on Render and `REACT_APP_AI_API_URL` in `frontend/.env` matches your Render URL (including `/api/ask`), then rebuild and redeploy hosting.
  - Using Blaze: ensure `askAI` is deployed (`npx firebase-tools deploy --only functions`) and the project is on Blaze.

## Project structure (main pieces)

```
├── frontend/
│   ├── src/
│   │   ├── api/askAI.ts          # Calls AI API (localhost in dev, Cloud Function in prod)
│   │   ├── components/           # Layout, FloatingBlobs, RevealSection
│   │   ├── content/site.ts       # CV and site copy (single source of truth)
│   │   ├── pages/                # HomePage, CaseStudiesPage, WorkWithMePage, ForHiringManagersPage, AIPage
│   │   └── ...
│   └── build/                    # Output of `npm run build` (deployed to Hosting)
│
├── functions/
│   ├── src/index.ts              # Express app → askAI Cloud Function
│   ├── backend/
│   │   ├── api/ask.js            # POST /api/ask handler
│   │   └── ai/prompt.js          # Keyword-based response logic (no external AI)
│   ├── serve-local.js            # Run API locally (npm run serve:local)
│   └── lib/                      # Compiled output (used when deploying)
│
├── firebase.json                 # Hosting + Functions + Firestore config
├── .firebaserc                   # Project: about-mukuka
└── README.md
```

## Environment variables

**Frontend (`frontend/.env`)**

- Firebase config: `REACT_APP_FIREBASE_*` (see `frontend/.env.example` or Firebase Console).
- **`REACT_APP_AI_API_URL`** — **Required for free production:** set this to your Render backend URL (e.g. `https://your-app.onrender.com/api/ask`) before `npm run build` so the deployed site uses your Render API. Optional for local dev (app uses localhost when not set).

**Functions**

- No env vars required for the hardcoded AI. If you add Firestore or other services, configure them in the Firebase Console or via environment config for Cloud Functions.

## Testing the API

**Local:**

```bash
curl -X POST http://localhost:5001/api/ask \
  -H "Content-Type: application/json" \
  -d '{"type":"question","value":"hi"}'
```

**Production (after deploy):**  
Use your Render URL if you used the free setup, or the Cloud Function URL if you’re on Blaze:

```bash
# Replace with your Render URL or Cloud Function URL
curl -X POST https://YOUR-RENDER-URL.onrender.com/api/ask \
  -H "Content-Type: application/json" \
  -d '{"type":"question","value":"hi"}'
```

## Author & contact

**Mukuka Nkamba**  
Full Stack Software Engineer | AI & GenAI (RAG) Enthusiast | Data Analyst | Content Creator  

- Email: mukukankambaa@gmail.com  
- LinkedIn: [linkedin.com/in/mukuka-nkamba-4a9b16290](https://www.linkedin.com/in/mukuka-nkamba-4a9b16290/)  
- GitHub: [github.com/nkamba-mukuka](https://github.com/nkamba-mukuka)

---

**Live site (after deploy):** [about-mukuka.web.app](https://about-mukuka.web.app)
