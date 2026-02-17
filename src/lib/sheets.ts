import { google } from "googleapis";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  message: string;
  industry: string;
  city: string;
  receivedAt: string;
}

function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendLead(data: LeadData): Promise<void> {
  const sheets = getSheets();
  const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID;

  if (!sheetId) {
    throw new Error("GOOGLE_SHEETS_SHEET_ID is not configured");
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.name,
          data.email,
          data.phone,
          data.message,
          data.industry,
          data.city,
          data.receivedAt,
        ],
      ],
    },
  });
}
