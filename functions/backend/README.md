# Backend API

This backend handles AI requests for the Latte AI Portfolio project.

## Structure

```
functions/backend/
├── api/
│   └── ask.js        # Handles AI requests endpoint
├── ai/
│   └── prompt.js     # Wraps user input in barista persona
└── utils/
    └── firestore.js  # Optional logging helper
```

## API Endpoint

The backend is exposed as a Firebase Cloud Function:

**Endpoint:** `https://<PROJECT_ID>.cloudfunctions.net/askAI/api/ask`

**Method:** POST

**Request Body:**
```json
{
  "type": "menu" | "question",
  "value": "User input or question"
}
```

**Response:**
```json
{
  "responseText": "AI-generated response"
}
```

## Usage

The backend is integrated with Firebase Cloud Functions. To deploy:

```bash
cd functions
npm install
firebase deploy --only functions
```

## Next Steps

1. Replace the placeholder in `ai/prompt.js` with actual Vertex AI or OpenAI integration
2. Uncomment the logging line in `api/ask.js` to enable Firestore logging
3. Update the barista persona prompt with your actual name/portfolio details

