import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See how On The Block Digital helps Main Street businesses get found, get more calls, and grow. Real outcomes for real businesses.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            as="h1"
            subtext="Real outcomes for real businesses on the block."
          >
            Results that matter
          </SectionHeading>
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-text/70">
            We&apos;re currently building case studies from our first partners.
            Check back soon to see real stories from businesses on the block.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-text-on-primary transition-colors hover:opacity-90"
          >
            Become Our Next Success Story
          </Link>
        </div>
      </section>
    </>
  );
}
