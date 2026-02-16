import { NextResponse } from "next/server";

interface PlacePrediction {
  placePrediction: {
    text: { text: string };
    structuredFormat?: {
      mainText: { text: string };
      secondaryText: { text: string };
    };
    types?: string[];
  };
}

interface AutocompleteResponse {
  suggestions?: PlacePrediction[];
}

interface CityResult {
  city: string;
  state: string;
}

const US_STATE_ABBRS: Record<string, string> = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
  "District of Columbia": "DC",
};

function parseStateAbbr(secondaryText: string): string | null {
  // secondaryText is typically "CA, USA" or "California, USA"
  const parts = secondaryText.split(",").map((s) => s.trim());
  const stateStr = parts[0];
  if (!stateStr) return null;

  // Check if it's already a 2-letter abbreviation
  if (stateStr.length === 2 && stateStr === stateStr.toUpperCase()) {
    return Object.values(US_STATE_ABBRS).includes(stateStr) ? stateStr : null;
  }

  // Look up full state name
  return US_STATE_ABBRS[stateStr] ?? null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();

  if (!query || query.length < 2) {
    return NextResponse.json({ predictions: [] });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY is not configured");
    return NextResponse.json(
      { error: "Places API not configured" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:autocomplete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
        },
        body: JSON.stringify({
          input: query,
          includedPrimaryTypes: ["locality"],
          includedRegionCodes: ["us"],
        }),
      }
    );

    if (!response.ok) {
      console.error("Places API error:", response.status, await response.text());
      return NextResponse.json({ predictions: [] });
    }

    const data = (await response.json()) as AutocompleteResponse;
    const predictions: CityResult[] = [];

    for (const suggestion of data.suggestions ?? []) {
      const structured = suggestion.placePrediction?.structuredFormat;
      if (!structured) continue;

      const city = structured.mainText.text;
      const stateAbbr = parseStateAbbr(structured.secondaryText.text);
      if (city && stateAbbr) {
        predictions.push({ city, state: stateAbbr });
      }
    }

    return NextResponse.json({ predictions });
  } catch (error) {
    console.error("Places API fetch failed:", error);
    return NextResponse.json({ predictions: [] });
  }
}
