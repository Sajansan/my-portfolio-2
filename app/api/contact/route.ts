import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm } from "@/lib/validate";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // --- Honeypot check (silent reject) ---
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    // --- Sanitize inputs ---
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    // --- Server-side validation ---
    const { valid, errors } = validateContactForm({ name, email, message });

    if (!valid) {
      return NextResponse.json(
        { success: false, error: "Validation failed.", errors },
        { status: 400 }
      );
    }

    // --- Environment variables ---
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing required email environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // --- Send email via Resend ---
    const resend = new Resend(apiKey);

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    });

    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: [
        `New Contact Form Submission`,
        `─────────────────────────────`,
        ``,
        `Name:      ${name}`,
        `Email:     ${email}`,
        ``,
        `Message:`,
        `${message}`,
        ``,
        `─────────────────────────────`,
        `Submitted: ${timestamp}`,
      ].join("\n"),
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
