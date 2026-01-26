# Backend Setup Guide

## Quick Setup for Vertex AI (GCP)

### 1. Enable Vertex AI API

```bash
# Using gcloud CLI
gcloud services enable aiplatform.googleapis.com --project=latte-ai-portfolio

# Or via Console:
# https://console.cloud.google.com/apis/library/aiplatform.googleapis.com?project=latte-ai-portfolio
```

### 2. Grant Permissions to Cloud Functions Service Account

```bash
# Get your project number
PROJECT_NUMBER=$(gcloud projects describe latte-ai-portfolio --format="value(projectNumber)")

# Grant Vertex AI User role
gcloud projects add-iam-policy-binding latte-ai-portfolio \
  --member="serviceAccount:${PROJECT_NUMBER}-compute@developer.gserviceaccount.com" \
  --role="roles/aiplatform.user"
```

### 3. Set Environment Variables for Cloud Functions

```bash
firebase functions:config:set \
  ai.provider="vertex" \
  gcp.project_id="latte-ai-portfolio" \
  gcp.location="us-central1" \
  vertex.model="gemini-1.5-flash-001"
```

### 4. For Local Development

Create a `.env` file in the `functions/` directory:

```env
AI_PROVIDER=vertex
GCP_PROJECT_ID=latte-ai-portfolio
GCP_LOCATION=us-central1
VERTEX_MODEL=gemini-1.5-flash-001
```

Then authenticate:
```bash
gcloud auth application-default login
```

### 5. Install Dependencies & Deploy

```bash
cd functions
npm install
firebase deploy --only functions
```

## Testing

Test the endpoint:
```bash
curl -X POST https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask \
  -H "Content-Type: application/json" \
  -d '{"type":"question","value":"Tell me about your portfolio"}'
```

## Alternative: OpenAI Setup

If you prefer OpenAI:

```bash
firebase functions:config:set \
  ai.provider="openai" \
  openai.api_key="sk-your-key-here" \
  openai.model="gpt-3.5-turbo"
```

