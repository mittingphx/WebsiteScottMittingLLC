import { apiRequest } from "./queryClient";

/**
 * Sends a chat message to the AI assistant and returns the response
 */
export async function sendChatMessage(message: string): Promise<string> {
  try {
    const response = await apiRequest("POST", "/api/chat", { message });
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Chat service error:", error);
    throw new Error("Failed to get a response from the AI assistant. Please try again later.");
  }
}
