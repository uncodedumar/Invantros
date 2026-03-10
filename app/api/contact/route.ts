import { NextRequest, NextResponse } from "next/server";

// Lazy-load Resend on demand for better cold-start performance
async function getResend() {
  const { Resend } = await import("resend");
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(apiKey);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      role,
      companyOrPortfolio,
      graduationOrLaunch,
      email,
      phone,
      message,
    } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.RESEND_TO_EMAIL;

    if (!from || !to) {
      return NextResponse.json(
        { error: "Email environment variables not configured" },
        { status: 500 }
      );
    }

    const resend = await getResend();

    const subject = `New Contact from Invantros (${role || "Guest"}) - ${firstName} ${lastName}`;

    const html = `
      <h2>New Contact Submission - Invantros</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Role:</strong> ${role || "Not specified"}</p>
      <p><strong>Company / Portfolio:</strong> ${companyOrPortfolio || "Not provided"}</p>
      <p><strong>Graduation / Launch:</strong> ${graduationOrLaunch || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, "<br />") : "No message provided."}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

