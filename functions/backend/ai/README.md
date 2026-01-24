# AI Integration Setup Guide

This guide will help you set up Vertex AI (recommended for GCP) or OpenAI for the Latte AI Portfolio backend.

## Quick Start

### Option 1: Vertex AI (Recommended for GCP)

Vertex AI is Google's unified AI platform and integrates seamlessly with Firebase/Cloud Functions.

#### Step 1: Enable Vertex AI API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: `latte-ai-portfolio`
3. Navigate to **APIs & Services** > **Library**
4. Search for "Vertex AI API"
5. Click **Enable**

#### Step 2: Set Up Authentication

For Cloud Functions (production):
- Cloud Functions automatically use the default service account
- Grant the service account the "Vertex AI User" role:
  ```bash
  gcloud projects add-iam-policy-binding latte-ai-portfolio \
    --member="serviceAccount:PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
    --role="roles/aiplatform.user"
  ```

For local development:
```bash
gcloud auth application-default login
```

#### Step 3: Configure Environment Variables

Set these in Firebase Functions config:
```bash
firebase functions:config:set ai.provider="vertex" gcp.location="us-central1" vertex.model="gemini-1.5-flash-001"
```

Or set in `.env` for local development:
```env
AI_PROVIDER=vertex
GCP_PROJECT_ID=latte-ai-portfolio
GCP_LOCATION=us-central1
VERTEX_MODEL=gemini-1.5-flash-001
```

### Option 2: OpenAI

#### Step 1: Get API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Navigate to **API Keys**
3. Create a new secret key

#### Step 2: Configure Environment Variables

Set in Firebase Functions config:
```bash
firebase functions:config:set ai.provider="openai" openai.api_key="your-api-key-here" openai.model="gpt-3.5-turbo"
```

Or set in `.env` for local development:
```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_MODEL=gpt-3.5-turbo
```

## Environment Variables Reference

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `AI_PROVIDER` | AI provider: `vertex` or `openai` | `vertex` | No |
| `GCP_PROJECT_ID` | GCP Project ID | `latte-ai-portfolio` | Yes (for Vertex AI) |
| `GCP_LOCATION` | GCP region | `us-central1` | No |
| `VERTEX_MODEL` | Vertex AI model name | `gemini-1.5-flash-001` | No |
| `OPENAI_API_KEY` | OpenAI API key | - | Yes (for OpenAI) |
| `OPENAI_MODEL` | OpenAI model name | `gpt-3.5-turbo` | No |

## Testing Locally

1. Install dependencies:
   ```bash
   cd functions
   npm install
   ```

2. Set up environment variables (create `.env` file or use `firebase functions:config:get`)

3. Run the emulator:
   ```bash
   npm run serve
   ```

4. Test the endpoint:
   ```bash
   curl -X POST http://localhost:5001/latte-ai-portfolio/us-central1/askAI/api/ask \
     -H "Content-Type: application/json" \
     -d '{"type":"question","value":"Tell me about your experience"}'
   ```

## Deployment

1. Set environment variables in Firebase:
   ```bash
   firebase functions:config:set ai.provider="vertex"
   ```

2. Deploy:
   ```bash
   firebase deploy --only functions
   ```

3. Your endpoint will be available at:
   ```
   https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask
   ```

## Troubleshooting

### Vertex AI: "Permission denied"
- Ensure Vertex AI API is enabled
- Grant "Vertex AI User" role to the service account
- For local dev: run `gcloud auth application-default login`

### OpenAI: "Invalid API key"
- Verify your API key is correct
- Check that the key has sufficient credits/quota

### "Unable to get access token"
- For Cloud Functions: ensure service account has proper permissions
- For local: run `gcloud auth application-default login`

