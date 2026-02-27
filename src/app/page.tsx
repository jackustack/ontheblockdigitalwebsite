import type { Metadata } from "next";
import { FunnelFlow } from "@/components/funnel/FunnelFlow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutcomeCard } from "@/components/ui/OutcomeCard";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  professionalServiceHomeSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  description:
    "On The Block Digital — Local business SEO, website performance, and digital growth for restaurants, dentists, law firms, home services, and retail in Oakland and the Bay Area. Get found. Get more calls. Bring more people through the door.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "On The Block Digital — Local SEO for Small Businesses",
    description:
      "Local business SEO, website performance, and digital growth for restaurants, dentists, law firms, home services, and retail in Oakland and the Bay Area.",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: "On The Block Digital — Local SEO for Small Businesses",
    description:
      "Get found. Get more calls. Bring more people through the door. Local SEO for Oakland and Bay Area businesses.",
  },
};

const outcomes = [
  {
    heading: "Get Found",
    description:
      "When your neighbors search for what you do, you show up — not your competition.",
  },
  {
    heading: "Get More Calls",
    description:
      "Your phone rings more. Your calendar fills up. Your business grows.",
  },
  {
    heading: "Bring People Through the Door",
    description:
      "More foot traffic, more regulars, more people who become loyal customers.",
  },
  {
    heading: "Stop Guessing",
    description:
      "Know what's working and what isn't. Spend less time worrying about marketing.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={professionalServiceHomeSchema()} />

      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h1" className="mb-4">
            Your neighbors are searching for you right now.
          </SectionHeading>
          <p className="mb-10 text-xl text-text/70">
            Are they finding you?
          </p>
          <FunnelFlow />
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            as="h2"
            subtext="Here's what changes for your business"
            className="text-center"
          >
            Outcomes, not promises
          </SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <OutcomeCard key={outcome.heading} {...outcome} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
