import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ogImageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, strategies, and local insights to help Main Street businesses get found and grow. From On The Block Digital.",
  openGraph: {
    images: [{ url: ogImageUrl("The Block Blog", "Tips, insights, and stories from the block."), width: 1200, height: 630 }],
  },
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
