import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

// Import backend routes
const askRouter = require("../backend/api/ask");

// Create Express app
const app = express();

// Enable CORS for all routes
app.use(cors({origin: true}));
app.use(express.json());

// Mount backend routes
app.use("/api/ask", askRouter);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({message: "Latte AI Portfolio API is running ☕"});
});

// Export as Cloud Function
export const askAI = functions.https.onRequest(app);

