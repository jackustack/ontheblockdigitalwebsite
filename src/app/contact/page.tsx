import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with On The Block Digital. Tell us about your business and we'll show you how to get found, get more calls, and grow.",
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
