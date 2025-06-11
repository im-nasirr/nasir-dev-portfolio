// src/utils/sendMail.ts

interface SendMailResponse {
  success: boolean;
  message: string;
}

export async function sendMail(
  name: string,
  email: string,
  message: string
): Promise<SendMailResponse> {
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API Error:", data.error || data.message);
      return { success: false, message: data.message || "Failed to send message." };
    }

    return { success: true, message: data.message || "Message sent successfully!" };
  } catch (error) {
    console.error("Network or unexpected error:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}