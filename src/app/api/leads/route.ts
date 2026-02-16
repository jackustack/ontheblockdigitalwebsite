import { NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  industry?: string;
  city?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 }
      );
    }

    // TODO: Replace with your preferred storage/notification:
    // - Send to email via Resend, SendGrid, etc.
    // - Write to a database (Supabase, Planetscale, etc.)
    // - Forward to a CRM (HubSpot, etc.)
    console.log("New lead received:", {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "",
      message: body.message?.trim() || "",
      industry: body.industry || "",
      city: body.city || "",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
