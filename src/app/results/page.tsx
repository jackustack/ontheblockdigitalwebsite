import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OutcomeCard } from "@/components/ui/OutcomeCard";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ogImageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why Main Street Businesses Are Invisible Online | On The Block Digital",
  description:
    "Most small businesses are losing customers they don't even know about. See the real numbers on what's keeping Main Street businesses from being found.",
  openGraph: {
    images: [
      {
        url: ogImageUrl("The problem is real", "And the numbers prove it."),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ResultsPage() {
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
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h1"
            subtext="Your neighbors are searching for businesses like yours every day. Here's what the data says about whether they're finding you."
          >
            The problem is real — and the numbers prove it.
          </SectionHeading>
        </div>
      </section>

      {/* The Visibility Gap */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            as="h2"
            subtext="Most small businesses don't realize how invisible they are online. These are national averages — and your block is no exception."
          >
            The visibility gap
          </SectionHeading>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="text-3xl font-bold text-primary">27%</p>
              <p className="mt-2 text-sm text-text/70">
                of small businesses have no website at all
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="text-3xl font-bold text-primary">70%</p>
              <p className="mt-2 text-sm text-text/70">
                of small business websites lack a clear call-to-action
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="text-3xl font-bold text-primary">73%</p>
              <p className="mt-2 text-sm text-text/70">
                of websites fail basic technical audits
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center">
              <p className="text-3xl font-bold text-primary">75%</p>
              <p className="mt-2 text-sm text-text/70">
                of people never scroll past the first page of search results
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-text/50">
            Sources: Wix Small Business Survey, AIOSEO, Marketing LTB, PageOptimizer Pro
          </p>
        </div>
      </section>

      {/* What's Broken */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            as="h2"
            subtext="Even businesses with websites are often invisible to search engines. Here's what's holding them back."
          >
            What&apos;s broken on most small business websites
          </SectionHeading>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <OutcomeCard
              heading="Slow on phones"
              description="70% of mobile sites take over 5 seconds to load. More than half of visitors leave after 3 seconds."
            />
            <OutcomeCard
              heading="Missing the basics"
              description="28% of small business sites are missing meta descriptions — the snippet people see in search results."
            />
            <OutcomeCard
              heading="No structured data"
              description="Only about 12% of websites use schema markup, the code that helps search engines understand what your business does."
            />
            <OutcomeCard
              heading="Not mobile-friendly"
              description="17% of small business sites still aren't designed for phones — where more than half of all traffic comes from."
            />
            <OutcomeCard
              heading="Unclaimed listings"
              description="Over 11% of Google Business Profiles are unclaimed. That means customers can't find hours, reviews, or directions."
            />
            <OutcomeCard
              heading="No clear next step"
              description="70% of small business homepages don't tell visitors what to do next — no phone number, no form, no direction."
            />
          </div>

          <p className="mt-6 text-center text-sm text-text/50">
            Sources: Google, AIOSEO, Birdeye, Marketing LTB, W3Techs, Hostinger
          </p>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            as="h2"
            subtext="Every industry faces different challenges online. Here's what the research shows."
          >
            How it breaks down by industry
          </SectionHeading>

          <div className="mt-10 space-y-10">
            {/* Restaurants */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Restaurants</h3>
              <div className="space-y-3 text-text/80">
                <p>
                  98% of customers search online before choosing where to eat.
                  But 40% of local food searches now trigger AI-generated answers
                  that push individual restaurants further down the page. If your
                  site is slow, missing key info, or not optimized for local
                  search — you&apos;re invisible to the very people walking past
                  your door.
                </p>
                <p>
                  78% of people who search for a local restaurant on their phone
                  visit one within 24 hours. The question is whether they&apos;re
                  visiting yours.
                </p>
              </div>
            </div>

            {/* Home Services */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Home Services</h3>
              <div className="space-y-3 text-text/80">
                <p>
                  90% of homeowners search online before hiring a plumber,
                  electrician, or contractor. And 75% of them visit a business
                  within 24 hours of searching. The top three results on the map
                  get 3 to 5 times more traffic than anything below them.
                </p>
                <p>
                  Meanwhile, 87% of customers won&apos;t even consider a
                  business with low ratings — so showing up isn&apos;t enough.
                  You need to show up well.
                </p>
              </div>
            </div>

            {/* Dental */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Dental Practices</h3>
              <div className="space-y-3 text-text/80">
                <p>
                  71% of people looking for a dentist search online before
                  scheduling an appointment. And 57% of dental practices say
                  their website needs a redesign — they already know
                  something&apos;s off.
                </p>
                <p>
                  82% of patients now prioritize providers who offer clear,
                  transparent information online. If your website doesn&apos;t
                  answer their questions, they&apos;ll find a practice that does.
                </p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Law Firms</h3>
              <div className="space-y-3 text-text/80">
                <p>
                  79% of law firms say online search is their most important
                  source of new clients. Organic search drives 66% of call
                  conversions in the legal industry. Yet only 74% of law firm
                  websites are mobile-friendly — meaning over a quarter are
                  losing potential clients on every phone search.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-text/50">
            Sources: SeoProfy, The Digital Restaurant, Housecall Pro, NextLeft, Sixth City Marketing, Marketly Digital, GrowLaw, EverSpark Interactive
          </p>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            as="h2"
            subtext="When people can't find you, they find someone else. It's that simple."
          >
            The bottom line
          </SectionHeading>
          <div className="mt-6 space-y-4 text-lg text-text/80">
            <p>
              31% of shoppers have decided against using a business because it
              didn&apos;t have a website. 53% abandon a site that takes more
              than 3 seconds to load on their phone. And 75% never look past
              the first page of search results.
            </p>
            <p>
              These aren&apos;t just numbers. Every one of them represents
              someone in your neighborhood who was looking for exactly what you
              offer — and ended up somewhere else.
            </p>
            <p>
              We&apos;re building something different at On The Block Digital.
              As we work with businesses on the block, we&apos;ll share their
              real stories here — with their permission. Until then, the
              national data makes the case clearly enough: most small businesses
              are losing customers they don&apos;t even know about.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-subtle px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h2"
            subtext="Find out if your business is visible to the people who are already looking for you."
          >
            Want to know where you stand?
          </SectionHeading>
          <LeadCaptureForm heading="Tell us about your business" />
        </div>
      </section>
    </>
  );
}
