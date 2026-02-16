import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { ogImageUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with On The Block Digital. Tell us about your business and we'll show you how to get found, get more calls, and grow.",
  openGraph: {
    images: [{ url: ogImageUrl("Let's talk about your block", "Tell us about your business."), width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <section className="px-4 py-20">
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
  );
}
