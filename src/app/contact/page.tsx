import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutcomeCard } from "@/components/ui/OutcomeCard";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ogImageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact On The Block Digital | Let's Talk About Your Block",
  description:
    "Get in touch with On The Block Digital. Tell us about your business and we'll show you how to get found, get more calls, and grow.",
  openGraph: {
    images: [
      {
        url: ogImageUrl("Let's talk about your block", "Tell us about your business."),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "On The Block Digital",
          url: "https://ontheblockdigital.com",
          description:
            "Digital growth partner for Main Street businesses in Oakland and beyond.",
          areaServed: [
            { "@type": "City", name: "Oakland", addressRegion: "CA" },
          ],
        }}
      />

      {/* Hero */}
      <section id="contact-form" className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            as="h1"
            subtext="Tell us about your business. We'll tell you what's possible."
          >
            Let&apos;s talk about your block.
          </SectionHeading>
          <div className="mt-10">
            <LeadCaptureForm heading="Send us a message" />
          </div>
        </div>
      </section>

      {/* Why Reach Out */}
      <section className="bg-bg-subtle px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            subtext="No pressure. No pitch. Just a conversation about what's possible for your business."
          >
            Reasons people reach out
          </SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <OutcomeCard
              heading="You want more customers"
              description="People in your neighborhood are searching for exactly what you offer. You just need them to find you first."
              className="bg-white"
            />
            <OutcomeCard
              heading="You're not sure what's working"
              description="You've tried a few things but can't tell what's bringing people through the door and what's wasting your time."
              className="bg-white"
            />
            <OutcomeCard
              heading="You're ready to grow"
              description="Business is good, but you know it could be better. You want a plan that actually makes sense for your block."
              className="bg-white"
            />
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            subtext="We're rooted in Oakland, California — and we serve businesses across the city and beyond."
          >
            Where we are
          </SectionHeading>
          <div className="mt-6 space-y-4 text-lg text-text/80">
            <p>
              On The Block Digital started on the streets of Oakland. From
              Temescal to Fruitvale, Jack London Square to Downtown — we know
              these neighborhoods because we live and work in them.
            </p>
            <p>
              We&apos;re not a faceless agency in another time zone. When we
              talk about your block, we mean it. We walk past the businesses we
              help. We eat at the restaurants, visit the shops, and recommend
              them to our neighbors.
            </p>
            <p>
              Whether your business is in Rockridge, Piedmont Ave, Lake Merritt,
              or anywhere else in Oakland — we&apos;d love to hear from you. And
              if you&apos;re outside Oakland, we&apos;re growing. Reach out and
              let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-subtle px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            subtext="It starts with a conversation. Tell us about your business and we'll take it from there."
          >
            Ready to get started?
          </SectionHeading>
          <Link
            href="#contact-form"
            className="mt-4 inline-block rounded-md bg-primary px-8 py-3 font-semibold text-text-on-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Fill out the form above
          </Link>
        </div>
      </section>
    </>
  );
}
