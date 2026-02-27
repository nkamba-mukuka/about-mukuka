/**
 * Portfolio chatbot API — all prompts and responses run in the browser.
 * No backend or network call. Data and logic live in src/lib/portfolioBotData.ts and portfolioBot.ts.
 */

import { generateAIResponse } from "../lib/portfolioBot";

export interface AskAIRequest {
  type: "question" | "menu";
  value: string;
  short?: boolean;
}

export interface AskAIResponse {
  responseText: string;
}

/**
 * Get chatbot response. Runs entirely in the frontend using portfolioBot.
 */
export async function askAI(
  type: "question" | "menu",
  value: string,
  short = false
): Promise<string> {
  const responseText = generateAIResponse(type, value, short);
  return responseText;
}
