import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ogImageUrl } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "On The Block Digital is a hyper-local digital growth partner for Main Street businesses. We help you get found, get chosen, and grow.",
  openGraph: {
    images: [{ url: ogImageUrl("About On The Block Digital", "Your neighbors, and we know marketing."), width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h1">
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

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">What we believe</SectionHeading>
          <ul className="space-y-4 text-lg text-text/70">
            <li>
              <strong className="text-primary">Outcomes over services.</strong>{" "}
              We don&apos;t sell packages. We deliver results you can see.
            </li>
            <li>
              <strong className="text-primary">Local knowledge matters.</strong>{" "}
              Every city, every neighborhood, every block is different. We pay
              attention.
            </li>
            <li>
              <strong className="text-primary">Honesty always.</strong> If
              something isn&apos;t working, we&apos;ll tell you. If we&apos;re
              not the right fit, we&apos;ll tell you that too.
            </li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            Ready to get started?
          </SectionHeading>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-text-on-primary transition-colors hover:opacity-90"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
