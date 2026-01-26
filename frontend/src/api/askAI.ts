import axios from "axios";

const API_URL = "https://us-central1-latte-ai-portfolio.cloudfunctions.net/askAI/api/ask";

export interface AskAIRequest {
  type: "question" | "menu";
  value: string;
  short?: boolean;
}

export interface AskAIResponse {
  responseText: string;
}

export async function askAI(type: "question" | "menu", value: string, short: boolean = false): Promise<string> {
  try {
    // Pass raw value to allow hardcoded backend to match keywords correctly
    const wrappedValue = value;

    const response = await axios.post<AskAIResponse>(API_URL, {
      type,
      value: wrappedValue,
      short
    });
    return response.data.responseText;
  } catch (error) {
    console.error("Error calling AI API:", error);
    throw new Error("Failed to get response from barista ☕");
  }
}
