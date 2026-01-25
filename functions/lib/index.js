"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askAI = void 0;
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// Import backend routes
const askRouter = require("../backend/api/ask");
// Create Express app
const app = express();
// Enable CORS for all routes
app.use(cors({ origin: true }));
app.use(express.json());
// Mount backend routes
app.use("/api/ask", askRouter);
// Health check endpoint
app.get("/", (req, res) => {
    res.json({ message: "Latte AI Portfolio API is running ☕" });
});
// Export as Cloud Function
exports.askAI = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map