const express = require("express");
const router = express.Router();
const { generateAIResponse } = require("../ai/prompt");
// const { logInteraction } = require("../utils/firestore");

/**
 * POST /api/ask
 * Handles AI requests for menu selections and questions
 * 
 * Request Body:
 *   - type: "menu" | "question"
 *   - value: string (menu item ID or question text)
 *   - short: boolean (optional, for shorter responses)
 * 
 * Response:
 *   - responseText: string (AI-generated response)
 */
router.post("/", async (req, res) => {
  try {
    const { type, value, short } = req.body;
    
    // Validate input
    if (!value) {
      return res.status(400).json({ error: "No input provided" });
    }

    if (!type || (type !== "menu" && type !== "question")) {
      return res.status(400).json({ error: "Invalid type. Must be 'menu' or 'question'" });
    }

    // Generate AI response
    const responseText = await generateAIResponse(type, value, !!short);

    // Optional: log interaction to Firestore
    // Uncomment to enable logging:
    // await logInteraction(type, value, responseText);

    res.json({ responseText });
  } catch (err) {
    console.error("Error in /api/ask:", err);
    res.status(500).json({ 
      responseText: "Oops! Something went wrong ☕ Let me try that again!" 
    });
  }
});

module.exports = router;

