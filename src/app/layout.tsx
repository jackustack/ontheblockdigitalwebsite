import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Your neighbors are searching for you`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "On The Block Digital helps Main Street businesses get found, get chosen, and grow. Outcome-driven digital marketing for your block.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Your neighbors are searching for you`,
    description:
      "On The Block Digital helps Main Street businesses get found, get chosen, and grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Your neighbors are searching for you`,
    description:
      "On The Block Digital helps Main Street businesses get found, get chosen, and grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${sourceSans3.variable}`}
    >
      <body className="antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
