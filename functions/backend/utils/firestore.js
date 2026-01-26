const admin = require("firebase-admin");

// Initialize only if not already initialized (Firebase Functions auto-initializes)
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

async function logInteraction(type, question, response) {
  await db.collection("interactions").add({
    type,
    question,
    response,
    timestamp: new Date(),
  });
}

module.exports = { logInteraction };

