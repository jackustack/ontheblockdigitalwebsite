import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, strategies, and local insights to help Main Street businesses get found and grow. From On The Block Digital.",
};

export default function BlogPage() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          as="h1"
          subtext="Tips, insights, and stories from the block."
        >
          The Block Blog
        </SectionHeading>
        <p className="mt-8 text-lg text-text/70">
          We&apos;re working on our first posts. Check back soon for tips on
          getting found, growing your business, and thriving on your block.
        </p>
      </div>
    </section>
  );
}
