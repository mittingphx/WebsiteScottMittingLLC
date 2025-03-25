import { apiRequest } from "./queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

/**
 * Sends contact form data to the server to be emailed
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  try {
    await apiRequest("POST", "/api/contact", data);
  } catch (error) {
    console.error("Failed to send contact email:", error);
    throw new Error("Failed to send contact email. Please try again later.");
  }
}
