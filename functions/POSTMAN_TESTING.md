# Postman Testing Guide

This guide will help you test your Latte AI Portfolio backend API using Postman.

## API Endpoint

**Base URL:** `https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI`

**Full Endpoint:** `https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask`

## Setup in Postman

### Step 1: Create a New Request

1. Open Postman
2. Click **New** → **HTTP Request**
3. Name it: "Latte AI Portfolio - Ask Question"

### Step 2: Configure the Request

1. **Method:** Select `POST`
2. **URL:** Enter `https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask`
3. **Headers:** 
   - Click on **Headers** tab
   - Add:
     - Key: `Content-Type`
     - Value: `application/json`

### Step 3: Add Request Body

1. Click on **Body** tab
2. Select **raw**
3. Choose **JSON** from the dropdown
4. Enter the request body:

```json
{
  "type": "question",
  "value": "Tell me about your skills"
}
```

## Test Cases

### 1. Test Skills Question

**Request Body:**
```json
{
  "type": "question",
  "value": "What are your skills?"
}
```

**Expected Response:**
```json
{
  "responseText": "I have a diverse skill set across multiple areas! ..."
}
```

### 2. Test Greeting

**Request Body:**
```json
{
  "type": "question",
  "value": "Hello!"
}
```

### 3. Test About/Bio

**Request Body:**
```json
{
  "type": "question",
  "value": "Tell me about yourself"
}
```

### 4. Test Experience

**Request Body:**
```json
{
  "type": "question",
  "value": "What's your work experience?"
}
```

### 5. Test Education

**Request Body:**
```json
{
  "type": "question",
  "value": "What's your education background?"
}
```

### 6. Test Interests/Hobbies

**Request Body:**
```json
{
  "type": "question",
  "value": "What are your hobbies?"
}
```

**Expected Response:** Should include Cooking and Interior Design

### 7. Test Contact Info

**Request Body:**
```json
{
  "type": "question",
  "value": "How can I contact you?"
}
```

### 8. Test Projects

**Request Body:**
```json
{
  "type": "question",
  "value": "What projects have you worked on?"
}
```

### 9. Test Certifications

**Request Body:**
```json
{
  "type": "question",
  "value": "What certifications do you have?"
}
```

### 10. Test Menu Click (Skills)

**Request Body:**
```json
{
  "type": "menu",
  "value": "skills"
}
```

### 11. Test Fallback Response (Random Question)

**Request Body:**
```json
{
  "type": "question",
  "value": "What's your favorite color?"
}
```

**Expected Response:**
```json
{
  "responseText": "Sorry, we don't have that order available currently! ☕ But for more info, contact management via email: mukukankambaa@gmail.com"
}
```

### 12. Test Relationship Question (Fallback)

**Request Body:**
```json
{
  "type": "question",
  "value": "Are you in a relationship?"
}
```

**Expected Response:** Should return the fallback message

## Quick Import (Postman Collection)

You can create a Postman Collection with all these requests:

1. In Postman, click **New** → **Collection**
2. Name it: "Latte AI Portfolio API"
3. Add all the test cases above as separate requests

## Response Format

All successful responses will have this format:

```json
{
  "responseText": "The barista's response here..."
}
```

## Error Responses

If something goes wrong, you might see:

```json
{
  "error": "No input provided"
}
```

Or:

```json
{
  "responseText": "Oops! Something went wrong ☕"
}
```

## Health Check

You can also test if the function is running:

1. **Method:** `GET`
2. **URL:** `https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/`

**Expected Response:**
```json
{
  "message": "Latte AI Portfolio API is running ☕"
}
```

## Tips

- Save your requests in a Postman Collection for easy reuse
- Use Postman's **Tests** tab to add assertions
- Use **Environments** to switch between local and production URLs
- Check the **Console** in Postman to see request/response details

## Troubleshooting

### CORS Error
- The API has CORS enabled, so this shouldn't be an issue
- If you see CORS errors, check that you're using the correct endpoint

### 404 Not Found
- Verify the URL is correct
- Make sure the function is deployed: `firebase deploy --only functions`

### 500 Internal Server Error
- Check Firebase Functions logs: `firebase functions:log`
- Verify the request body format is correct JSON

### Timeout
- Cloud Functions may take a few seconds on cold start
- Wait a moment and try again

