const express = require("express");
const router = express.Router();
const { generateAIResponse } = require("../ai/prompt");
// const { logInteraction } = require("../utils/firestore");

// POST /api/ask
router.post("/", async (req, res) => {
  try {
    const { type, value } = req.body;
    if (!value) return res.status(400).json({ error: "No input provided" });

    // Generate AI response
    const responseText = await generateAIResponse(type, value);

    // Optional: log interaction
    // await logInteraction(type, value, responseText);

    res.json({ responseText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ responseText: "Oops! Something went wrong ☕" });
  }
});

module.exports = router;

