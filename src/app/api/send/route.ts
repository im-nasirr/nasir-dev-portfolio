import { ContactEmailTemplate } from "@/app/components/contact-email-template";
import { EmailTemplate } from "@/app/components/email-template"; // This will be the "thank you" email template
// New template for your contact email
import * as React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Send the contact email to your email address
    const { data: contactEmailData, error: contactEmailError } =
      await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>", // Or a verified domain you own
        to: ["mramzannasir555@gmail.com"], // Your email address
        subject: `New Contact Form Submission from ${name}`,
        replyTo: email, // Set reply-to so you can reply directly to the user
        react: React.createElement(ContactEmailTemplate, {
          userName: name,
          userEmail: email,
          userMessage: message,
        }),
      });

    if (contactEmailError) {
      console.error("Error sending contact email:", contactEmailError);
      return Response.json(
        { success: false, message: "Failed to send contact email." },
        { status: 500 }
      );
    }

    // 2. Send the thank you email to the user
    const { data: thankYouEmailData, error: thankYouEmailError } =
      await resend.emails.send({
        from: "Muhammad Ramzan Nasir <noreply@yourdomain.com>",
        to: [email], // The user's email address
        subject: "Thanks for contacting Muhammad Ramzan Nasir!",
        react: React.createElement(EmailTemplate, { firstName: name }),
      });

    if (thankYouEmailError) {
      console.error("Error sending thank you email:", thankYouEmailError);
      return Response.json(
        { success: false, message: "Failed to send thank you email." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    console.error("Internal server error:", error);
    return Response.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
