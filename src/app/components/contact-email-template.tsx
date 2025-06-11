import * as React from "react";

interface ContactEmailTemplateProps {
  userName: string;
  userEmail: string;
  userMessage: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  userName,
  userEmail,
  userMessage,
}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Form Submission</title>
    </head>
    <body style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #eee", borderRadius: "8px" }}>
        <h2 style={{ color: "#0056b3" }}>New Contact Form Submission</h2>
        <p>You have received a new message from your portfolio contact form.</p>
        <p>
          <strong>Name:</strong> {userName}
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${userEmail}`}>{userEmail}</a>
        </p>
        <p>
          <strong>Message:</strong>
        </p>
        <p style={{ backgroundColor: "#f9f9f9", padding: "15px", borderLeft: "4px solid #0056b3", whiteSpace: "pre-wrap" }}>
          {userMessage}
        </p>
        <p style={{ fontSize: "0.8em", color: "#777", marginTop: "20px" }}>
          This email was sent from your portfolio website.
        </p>
      </div>
    </body>
  </html>
);