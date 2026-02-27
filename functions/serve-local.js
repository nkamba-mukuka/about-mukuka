/**
 * Run the AI API locally so the frontend can call it without deploying.
 * From repo root: node functions/serve-local.js
 * Or from functions/: node serve-local.js
 * Then set in frontend/.env: REACT_APP_AI_API_URL=http://localhost:5001/api/ask
 */

// Run from repo root or from functions/
const functionsDir = __dirname;
process.chdir(functionsDir);

const express = require("express");
const cors = require("cors");
const askRouter = require("./backend/api/ask");

const app = express();
// Use PORT for Render/Railway/etc.; AI_PORT or 5001 for local
const PORT = process.env.PORT || process.env.AI_PORT || 5001;

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/ask", askRouter);

app.get("/", (req, res) => {
  res.json({ message: "Latte AI Portfolio API (local) — POST /api/ask", port: PORT });
});

app.listen(PORT, () => {
  console.log(`AI API running at http://localhost:${PORT}`);
  console.log(`  POST http://localhost:${PORT}/api/ask`);
  console.log(`In frontend/.env set: REACT_APP_AI_API_URL=http://localhost:${PORT}/api/ask`);
});
