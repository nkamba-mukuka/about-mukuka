# GCP Cloud Functions Setup - Step by Step

Follow these steps to set up the Latte AI Portfolio backend on Google Cloud Platform.

## Prerequisites

- Google Cloud Project: `about-mukuka`
- Firebase CLI installed and authenticated
- gcloud CLI installed (for local development)
- **Firebase Blaze (pay-as-you-go) plan** - Required for Cloud Functions deployment
  - Upgrade at: https://console.firebase.google.com/project/about-mukuka/usage/details

## MVP Approach: Hardcoded Responses

**Current Implementation:** The backend uses hardcoded portfolio information with barista-style responses. This is a cost-effective MVP approach that:
- ✅ No AI model costs (no Vertex AI or OpenAI calls)
- ✅ Minimal Cloud Functions invocation costs
- ✅ Fast, reliable responses
- ✅ Easy to customize portfolio information

**Future Enhancement:** Can be upgraded to use Vertex AI or OpenAI for dynamic AI-generated responses when needed.

## Step 1: Enable Required APIs

Enable Cloud Functions and related APIs:

```bash
gcloud services enable cloudfunctions.googleapis.com --project=about-mukuka
gcloud services enable cloudbuild.googleapis.com --project=about-mukuka
gcloud services enable run.googleapis.com --project=about-mukuka
```

**Note:** For MVP with hardcoded responses, Vertex AI API is not required. If you plan to upgrade to AI-generated responses later, enable it with:
```bash
gcloud services enable aiplatform.googleapis.com --project=about-mukuka
```

## Step 2: Configure Firebase Functions (Optional for MVP)

For the MVP hardcoded approach, no special configuration is needed. The function works out of the box.

If you plan to use Vertex AI later, you can set config:
```bash
firebase functions:config:set \
  ai.provider="vertex" \
  gcp.project_id="about-mukuka" \
  gcp.location="us-central1" \
  vertex.model="gemini-1.5-flash"
```

**Verify the config:**
```bash
firebase functions:config:get
```

## Step 3: Install Dependencies

```bash
cd functions
npm install
```

## Step 4: Deploy

```bash
firebase deploy --only functions
```

## Step 5: Test

Test your endpoint:

```bash
curl -X POST https://us-central1-about-mukuka.cloudfunctions.net/askAI/api/ask \
  -H "Content-Type: application/json" \
  -d '{"type":"question","value":"Tell me about your portfolio"}'
```

## Local Development Setup

For testing locally with the Firebase emulator:

1. **Create a `.env` file in `functions/` directory (optional for MVP):**
   ```env
   # Not required for hardcoded MVP approach
   # Only needed if upgrading to AI-generated responses
   AI_PROVIDER=vertex
   GCP_PROJECT_ID=about-mukuka
   GCP_LOCATION=us-central1
   VERTEX_MODEL=gemini-1.5-flash
   ```

2. **Authenticate with Application Default Credentials (only if using AI):**
   ```bash
   gcloud auth application-default login --project=about-mukuka
   ```

3. **Run the emulator:**
   ```bash
   cd functions
   npm run serve
   ```

4. **Test locally:**
   ```bash
   curl -X POST http://localhost:5001/about-mukuka/us-central1/askAI/api/ask \
     -H "Content-Type: application/json" \
     -d '{"type":"question","value":"Hello!"}'
   ```

## Customizing Portfolio Information

To update the hardcoded portfolio information, edit `functions/backend/ai/prompt.js`:

```javascript
const PORTFOLIO_INFO = {
  name: "Your Name",
  skills: ["Skill1", "Skill2", ...],
  projects: [
    {
      name: "Project Name",
      description: "Project description",
      tech: ["Tech1", "Tech2"],
    },
  ],
  interests: ["Interest1", "Interest2"],
  bio: "Your bio here",
};
```

## Troubleshooting

### Error: "Function not found"
- Ensure the function is deployed: `firebase deploy --only functions`
- Check the function URL matches your project ID

### Error: "Permission denied" or "403 Forbidden"
- Ensure Cloud Functions API is enabled
- Verify Firebase Blaze plan is active
- Check that you're using the correct project ID

### For Future AI Integration:
- Ensure Vertex AI API is enabled
- Verify the service account has `roles/aiplatform.user` role
- Check model availability in your region

## Next Steps

- Customize the barista persona in `functions/backend/ai/prompt.js`
- Enable Firestore logging by uncommenting the logging line in `functions/backend/api/ask.js`
- Monitor usage in [Vertex AI Console](https://console.cloud.google.com/vertex-ai?project=about-mukuka)

