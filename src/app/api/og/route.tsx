import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

const BRAND_COLORS = {
  primary: "#1A1A2E",
  accent: "#E94560",
  bg: "#FAFAFA",
};

const CITY_COLORS: Record<string, { primary: string; accent: string }> = {
  "oakland-ca": { primary: "#2D5F2D", accent: "#C4A747" },
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "On The Block Digital";
  const subtitle = searchParams.get("subtitle") || "";
  const city = searchParams.get("city") || "";

  const colors = city && CITY_COLORS[city]
    ? CITY_COLORS[city]
    : { primary: BRAND_COLORS.primary, accent: BRAND_COLORS.accent };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          backgroundColor: BRAND_COLORS.bg,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: colors.primary,
              }}
            />
            <span
              style={{
                fontSize: "24px",
                color: colors.primary,
                fontWeight: 400,
              }}
            >
              On The Block Digital
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            <h1
              style={{
                fontSize: title.length > 50 ? "48px" : "56px",
                lineHeight: 1.15,
                color: colors.primary,
                fontWeight: 400,
                margin: 0,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: "24px",
                  color: "#666666",
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#999999",
            }}
          >
            ontheblockdigital.com
          </span>
          <div
            style={{
              display: "flex",
              gap: "6px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: colors.primary,
              }}
            />
            <div
              style={{
                width: "40px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: colors.accent,
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
