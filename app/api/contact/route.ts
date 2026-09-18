import { NextResponse } from "next/server";
import { getContactRecipient, getTransporter, isMailerConfigured } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!isMailerConfigured()) {
    return NextResponse.json(
      { error: "Email sending is not configured on the server yet." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in name, a valid email, and a message." }, { status: 400 });
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Sree Supreme Solder Website" <${process.env.SMTP_USER}>`,
      to: getContactRecipient(),
      replyTo: email,
      subject: `Enquiry from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        typeof company === "string" && company.trim() ? `Company: ${company.trim()}` : null,
        `Email: ${email.trim()}`,
        typeof phone === "string" && phone.trim() ? `Phone: ${phone.trim()}` : null,
        "",
        message.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[/api/contact]", error);
    return NextResponse.json({ error: "Could not send your enquiry. Please try again later." }, { status: 502 });
  }
}
