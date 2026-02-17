import { NextResponse } from "next/server";
import { appendLead } from "@/lib/sheets";

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

    const leadData = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "",
      message: body.message?.trim() || "",
      industry: body.industry || "",
      city: body.city || "",
      receivedAt: new Date().toISOString(),
    };

    console.log("New lead received:", leadData);

    try {
      await appendLead(leadData);
    } catch (sheetError) {
      console.error("Failed to write lead to Google Sheet:", sheetError);
      return NextResponse.json(
        { error: "Something went wrong. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
