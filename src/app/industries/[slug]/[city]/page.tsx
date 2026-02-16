import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";

interface PageProps {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, city } = await params;
  const industryName = slug.replace(/-/g, " ");
  const cityName = city.replace(/-/g, " ");

  return {
    title: `${industryName} in ${cityName} | On The Block Digital`,
    robots: { index: false, follow: false },
  };
}

export default async function Tier3Page({ params }: PageProps) {
  const { slug, city } = await params;
  const industryName = slug.replace(/-/g, " ");
  const isRequest = city === "request";

  return (
    <>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading as="h1">
            Every business on the block deserves to be found.
          </SectionHeading>
          <p className="text-lg text-text/70">
            {isRequest
              ? `We're not in your area yet, but we want to hear from you. Tell us about your ${industryName} business and we'll let you know when we arrive on your block.`
              : `We're not working with ${industryName} businesses yet, but we want to hear from you. Every block has businesses that deserve more customers.`}
          </p>
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <LeadCaptureForm
            industry={slug}
            city={city}
            heading="Want us to come to your block?"
          />
        </div>
      </section>
    </>
  );
}
