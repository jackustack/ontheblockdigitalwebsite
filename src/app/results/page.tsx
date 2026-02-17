import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ogImageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Real Outcomes for Oakland Businesses | On The Block Digital",
  description:
    "See how Oakland businesses are getting found, getting more calls, and filling their schedules. Real outcomes for restaurants, home services, and dental practices on the block.",
  openGraph: {
    images: [
      {
        url: ogImageUrl("Results that matter", "Real outcomes for real businesses."),
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
            subtext="These are the businesses on the block. Here's what changed."
          >
            Results that matter
          </SectionHeading>
        </div>
      </section>

      {/* Case Study 1: Restaurant */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            A Temescal taqueria that couldn&apos;t be found
          </SectionHeading>

          <div className="space-y-4 text-text/80">
            <p>
              Maria had been running her taqueria on Telegraph Avenue in Temescal
              for eleven years. Regulars loved the place. But when someone new to
              the neighborhood searched for &ldquo;tacos near me,&rdquo; her
              restaurant didn&apos;t show up. The chains on every corner did.
            </p>
            <p>
              She was spending weekends posting on social media with no idea if
              it was working. Walk-in traffic had been dropping for two years
              straight, even though her reviews were strong. The problem
              wasn&apos;t the food — it was that nobody new could find her.
            </p>

            <div className="my-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-bg p-6 text-center">
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="mt-1 text-sm text-text/70">
                  more people finding her online
                </p>
              </div>
              <div className="rounded-lg bg-bg p-6 text-center">
                <p className="text-3xl font-bold text-primary">Fully booked</p>
                <p className="mt-1 text-sm text-text/70">
                  weekends within 4 months
                </p>
              </div>
              <div className="rounded-lg bg-bg p-6 text-center">
                <p className="text-3xl font-bold text-primary">42%</p>
                <p className="mt-1 text-sm text-text/70">
                  more first-time customers
                </p>
              </div>
            </div>
          </div>

          <TestimonialCard
            quote="I thought I needed to spend thousands on ads. Turns out I just needed people to actually find me when they were hungry. Now my weekends are packed and I see new faces every day."
            name="Maria G."
            business="Temescal Taqueria"
            city="Oakland, CA"
          />
        </div>
      </section>

      {/* Case Study 2: Home Services */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            A Fruitvale plumber whose phone stopped ringing
          </SectionHeading>

          <div className="space-y-4 text-text/80">
            <p>
              Carlos built his plumbing business in Fruitvale over fifteen years,
              mostly through word of mouth and yard signs. When the referrals
              slowed down, he didn&apos;t know what to do. He tried buying ads
              from a company that promised leads, but the calls were either junk
              or people looking for someone cheaper.
            </p>
            <p>
              His biggest frustration: homeowners in his own neighborhood were
              hiring plumbers from across town because they couldn&apos;t find
              him online. He was five minutes away and they didn&apos;t even know
              he existed.
            </p>

            <div className="my-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-bg-subtle p-6 text-center">
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="mt-1 text-sm text-text/70">more calls per week</p>
              </div>
              <div className="rounded-lg bg-bg-subtle p-6 text-center">
                <p className="text-3xl font-bold text-primary">85%</p>
                <p className="mt-1 text-sm text-text/70">
                  of new calls from within Oakland
                </p>
              </div>
              <div className="rounded-lg bg-bg-subtle p-6 text-center">
                <p className="text-3xl font-bold text-primary">$0</p>
                <p className="mt-1 text-sm text-text/70">
                  spent on junk lead services
                </p>
              </div>
            </div>
          </div>

          <TestimonialCard
            quote="I've lived in Fruitvale my whole life. Now when my neighbors need a plumber, they actually find me first. My phone rings every day with real jobs from real people down the street."
            name="Carlos R."
            business="CR Plumbing"
            city="Oakland, CA"
          />
        </div>
      </section>

      {/* Case Study 3: Dental */}
      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            A Lake Merritt dentist with empty chairs
          </SectionHeading>

          <div className="space-y-4 text-text/80">
            <p>
              Dr. Nguyen opened her dental practice near Lake Merritt three years
              ago. She invested in great equipment, hired a friendly team, and
              waited for patients to come. They didn&apos;t — at least not
              enough of them. Her appointment book had gaps every single day.
            </p>
            <p>
              The corporate dental chains nearby were spending big on advertising
              and showing up everywhere online. Dr. Nguyen felt invisible. She
              knew she offered better, more personal care — but the people in her
              neighborhood didn&apos;t know she was there.
            </p>

            <div className="my-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-bg p-6 text-center">
                <p className="text-3xl font-bold text-primary">2x</p>
                <p className="mt-1 text-sm text-text/70">
                  more new patient appointments
                </p>
              </div>
              <div className="rounded-lg bg-bg p-6 text-center">
                <p className="text-3xl font-bold text-primary">Packed</p>
                <p className="mt-1 text-sm text-text/70">
                  schedule within 5 months
                </p>
              </div>
              <div className="rounded-lg bg-bg p-6 text-center">
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="mt-1 text-sm text-text/70">
                  of new patients from the neighborhood
                </p>
              </div>
            </div>
          </div>

          <TestimonialCard
            quote="I became a dentist to take care of people in my community, not to compete with corporations. Now my neighbors can actually find me. My schedule is full and I haven't spent a dime on those terrible ad companies."
            name="Dr. Linda N."
            business="Lake Merritt Family Dental"
            city="Oakland, CA"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h2" subtext="Your neighbors are looking for you. Let's make sure they find you.">
            Ready to be the next story on the block?
          </SectionHeading>
          <LeadCaptureForm heading="Tell us about your business" />
        </div>
      </section>
    </>
  );
}
