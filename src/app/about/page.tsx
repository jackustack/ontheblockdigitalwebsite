import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutcomeCard } from "@/components/ui/OutcomeCard";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ogImageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About On The Block Digital | Your Neighbors Who Know Marketing",
  description:
    "On The Block Digital is a hyper-local digital growth partner for Main Street businesses. We help you get found, get chosen, and grow.",
  openGraph: {
    images: [
      {
        url: ogImageUrl(
          "About On The Block Digital",
          "Your neighbors, and we know marketing."
        ),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutPage() {
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
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            as="h1"
            subtext="On The Block Digital is a hyper-local growth partner for Main Street businesses in Oakland and beyond."
          >
            We&apos;re your neighbors, and we know marketing.
          </SectionHeading>
          <p className="mb-6 text-lg text-text/70">
            On The Block Digital exists for one reason: to help Main Street
            businesses compete. Not with jargon. Not with dashboards full of
            numbers that don&apos;t mean anything. With real outcomes — more
            calls, more customers, more growth.
          </p>
          <p className="mb-6 text-lg text-text/70">
            We started because we saw too many great local businesses getting
            overlooked online. The bakery down the street that makes the best
            sourdough in town? Invisible on Google. The plumber who&apos;s been
            serving the neighborhood for 20 years? Losing jobs to a company
            with better ads.
          </p>
          <p className="text-lg text-text/70">
            That&apos;s not right. Your neighbors are searching for you. We
            make sure they find you.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">Our story</SectionHeading>
          <p className="mb-6 text-lg text-text/70">
            On The Block Digital was born in Oakland, California — a city where
            every neighborhood has its own personality. Temescal has its
            corridor of independent shops and restaurants. Fruitvale is the
            heart of the community, where families have run businesses for
            generations. Lake Merritt brings people together every weekend. And
            on every one of these blocks, there are business owners pouring
            everything they have into their work.
          </p>
          <p className="mb-6 text-lg text-text/70">
            But here&apos;s the thing we kept seeing: the businesses that
            deserved the most attention were getting the least. Chain
            restaurants with big budgets dominated search results while the
            family-owned spot with the best tamales in Fruitvale sat on page
            three. A contractor who&apos;d been doing honest work in West
            Oakland for decades was losing bids to companies running flashy
            ads from out of state.
          </p>
          <p className="text-lg text-text/70">
            We knew how to fix that. So we started doing it — one block at a
            time. Not with complicated strategies or marketing speak, but by
            making sure the right people could find the right businesses in
            their own neighborhoods. That&apos;s still what we do. That&apos;s
            all we do.
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">What we believe</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-3">
            <OutcomeCard
              heading="Outcomes over services"
              description="We don't sell packages. We deliver results you can see — more calls, more customers, more growth."
            />
            <OutcomeCard
              heading="Local knowledge matters"
              description="Every city, every neighborhood, every block is different. We pay attention to yours."
            />
            <OutcomeCard
              heading="Honesty always"
              description="If something isn't working, we'll tell you. If we're not the right fit, we'll tell you that too."
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">How we work</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="mb-2 text-3xl font-bold text-accent">1</p>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                We learn your block
              </h3>
              <p className="text-text/70">
                We get to know your business, your neighborhood, and the people
                you serve. No cookie-cutter approaches.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="mb-2 text-3xl font-bold text-accent">2</p>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                We make sure you&apos;re found
              </h3>
              <p className="text-text/70">
                When your neighbors search for what you do, they find you —
                not a chain three cities away.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="mb-2 text-3xl font-bold text-accent">3</p>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                You grow
              </h3>
              <p className="text-text/70">
                More calls. More walk-ins. A fuller schedule. We measure what
                matters to your business, not vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">Who we are</SectionHeading>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                Terrance — Founder
              </h3>
              <p className="mt-2 text-lg text-text/70">
                Oakland born and raised. Terrance spent years watching Main
                Street businesses struggle to compete online — not because they
                lacked quality, but because nobody was in their corner. On The
                Block Digital is his answer to that. When he&apos;s not helping
                businesses get found, you&apos;ll find him exploring
                Rockridge&apos;s coffee shops or walking the Lake Merritt loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h2">
            Ready to get your business found?
          </SectionHeading>
          <LeadCaptureForm heading="Tell us about your business and your block." />
        </div>
      </section>
    </>
  );
}
