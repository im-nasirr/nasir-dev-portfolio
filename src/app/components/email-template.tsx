// src/app/components/email-template.tsx
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Thanks for contacting me!</title>
    </head>
    <body
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ color: "#0056b3" }}>Welcome, {firstName}!</h1>
        <p>
          Thank you for reaching out to me. I have received your message and
          will get back to you as soon as possible.
        </p>
        <p>I appreciate your interest!</p>
        <p>Best regards,</p>
        <p>Muhammad Ramzan Nasir</p>
        <p style={{ fontSize: "0.8em", color: "#777", marginTop: "20px" }}>
          This is an automated email, please do not reply to this message
          directly.
        </p>
      </div>
    </body>
  </html>
);
