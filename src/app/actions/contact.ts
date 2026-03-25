"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  phone?: string;
  message: string;
  referralSource: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    RECIPIENT_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !RECIPIENT_EMAIL) {
    console.error("SMTP configuration is missing in .env");
    return {
      success: false,
      error: "Email service not configured. Please check SMTP settings in .env"
    };
  }

  try {
    const { fullName, email, organization, role, phone, message, referralSource } = formData;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports (like 587)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${fullName}" <${SMTP_USER}>`, // Most SMTP providers require 'from' to match the authenticated user
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Demo Request: ${fullName} from ${organization}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #17A36B;">New Demo Request</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Role / Title:</strong> ${role}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>How they heard about us:</strong> ${referralSource}</p>
          <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (err: any) {
    console.error("SMTP error:", err);
    return { success: false, error: err.message || "Failed to send email" };
  }
}
