import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";

export default function NotFound() {
  return (
    <>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h1">
            This page isn&apos;t on the block.
          </SectionHeading>
          <p className="mb-8 text-lg text-text/70">
            We couldn&apos;t find what you were looking for. But we can help you
            find your customers.
          </p>
          <nav aria-label="Quick links">
            <ul className="flex flex-wrap justify-center gap-4">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-text-on-primary hover:opacity-90"
                >
                  Go Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-text-on-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-text-on-primary"
                >
                  Read the Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <LeadCaptureForm heading="Tell us about your business" />
        </div>
      </section>
    </>
  );
}
