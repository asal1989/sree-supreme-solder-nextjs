import { NextResponse } from "next/server";
import { getContactRecipient, getTransporter, isMailerConfigured } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!isMailerConfigured()) {
    return NextResponse.json(
      { error: "Newsletter sign-up is not configured on the server yet." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email } = (body ?? {}) as Record<string, unknown>;

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Sree Supreme Solder Website" <${process.env.SMTP_USER}>`,
      to: getContactRecipient(),
      replyTo: email,
      subject: "New newsletter sign-up",
      text: `New newsletter subscriber: ${email.trim()}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/newsletter]", error);
    return NextResponse.json({ error: "Could not process your sign-up. Please try again later." }, { status: 502 });
  }
}
