import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export interface InteractionLog {
  type: "question" | "menu";
  value: string;
  response: string;
  timestamp: Date;
}

/**
 * Log user interaction to Firestore (optional analytics)
 * @param type - Type of interaction ('question' or 'menu')
 * @param value - User input or menu selection
 * @param response - AI response text
 */
export async function logInteraction(
  type: "question" | "menu",
  value: string,
  response: string
): Promise<void> {
  try {
    await addDoc(collection(db, "interactions"), {
      type,
      question: value,
      response,
      timestamp: Timestamp.now(),
    });
    console.log("Interaction logged to Firestore");
  } catch (error) {
    console.error("Error logging interaction to Firestore:", error);
    // Don't throw - logging is optional, shouldn't break the app
  }
}

