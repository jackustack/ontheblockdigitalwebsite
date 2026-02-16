import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findIndustry, findCity, getIndustryCityParams } from "@/lib/routing";
import { getCityThemeStyle } from "@/lib/city-theme";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  professionalServiceSchema,
  faqSchema,
  type FaqItem,
} from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CityBadge } from "@/components/city/CityBadge";
import { LeadCaptureForm } from "@/components/ui/LeadCaptureForm";
import { SITE_NAME, ogImageUrl } from "@/lib/utils";

interface PageProps {
  params: Promise<{ industry: string; city: string }>;
}

export async function generateStaticParams() {
  return getIndustryCityParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: industrySlug, city: citySlug } = await params;
  const industry = findIndustry(industrySlug);
  const city = findCity(citySlug);

  if (!industry || !city) return {};

  if (industry.tier === 1) {
    const title = `Get More Customers for Your ${industry.name} Business in ${city.name}`;
    return {
      title: `${title} | ${SITE_NAME}`,
      description: `${SITE_NAME} helps ${industry.name.toLowerCase()} businesses in ${city.name}, ${city.state} get found, get chosen, and grow. Outcome-driven digital marketing for your block.`,
      openGraph: {
        images: [{ url: ogImageUrl(title, `Outcome-driven marketing in ${city.name}, ${city.state}`, city.slug), width: 1200, height: 630 }],
      },
    };
  }

  const title = `${industry.name} Marketing in ${city.name} — Coming Soon`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description: `We're bringing outcome-driven digital marketing to ${industry.name.toLowerCase()} businesses in ${city.name}, ${city.state}. Be the first on the block.`,
    openGraph: {
      images: [{ url: ogImageUrl(title, `Be the first on the block in ${city.name}`, city.slug), width: 1200, height: 630 }],
    },
  };
}

function getTier1Faqs(industryName: string, cityName: string): FaqItem[] {
  return [
    {
      question: `How can a ${industryName.toLowerCase()} in ${cityName} get more customers?`,
      answer: `The most effective way for ${industryName.toLowerCase()} businesses in ${cityName} to get more customers is to make sure people can find you when they search online. That means showing up in local search results, having a strong online presence, and making it easy for people to choose you over the competition.`,
    },
    {
      question: `What does digital marketing cost for a ${industryName.toLowerCase()} in ${cityName}?`,
      answer: `Costs vary based on your goals and competition in ${cityName}, but most ${industryName.toLowerCase()} businesses see meaningful results with a focused investment. We believe in transparency — you'll know exactly where every dollar goes and what it's doing for your business.`,
    },
    {
      question: `How do ${industryName.toLowerCase()} businesses in ${cityName} compete with larger chains?`,
      answer: `Local ${industryName.toLowerCase()} businesses have a real advantage: they're part of the community. By making sure you show up when neighbors search for what you do, and by building a strong local reputation online, you can compete effectively with any chain.`,
    },
    {
      question: `What should a ${industryName.toLowerCase()} owner in ${cityName} do to grow their business?`,
      answer: `Start by making sure people can find you online. Then focus on getting reviews, keeping your information up to date everywhere, and giving people a reason to choose you. It's not about doing everything — it's about doing the right things consistently.`,
    },
    {
      question: `How long does it take to see results from digital marketing for ${industryName.toLowerCase()} businesses?`,
      answer: `Most ${cityName} ${industryName.toLowerCase()} businesses start seeing more visibility within the first few weeks. Meaningful changes in calls, foot traffic, and revenue typically build over 2-3 months as your online presence strengthens.`,
    },
  ];
}

export default async function IndustryCityPage({ params }: PageProps) {
  const { industry: industrySlug, city: citySlug } = await params;
  const industry = findIndustry(industrySlug);
  const city = findCity(citySlug);

  if (!industry || !city) {
    notFound();
  }

  const themeStyle = getCityThemeStyle(citySlug);

  if (industry.tier === 2) {
    return (
      <div data-city={city.slug} style={themeStyle}>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <CityBadge name={city.name} state={city.state} />
            <SectionHeading as="h1" className="mt-4">
              We&apos;re bringing real results to {city.name}&apos;s{" "}
              {industry.name.toLowerCase()} businesses.
            </SectionHeading>
            <p className="mb-10 text-lg text-text/70">
              On The Block Digital is expanding to help{" "}
              {industry.name.toLowerCase()} businesses in {city.name} get found,
              get more calls, and fill their schedules. We&apos;re not quite
              there yet, but we want to hear from you.
            </p>
          </div>
        </section>

        <section className="bg-bg-subtle px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <LeadCaptureForm
              industry={industry.slug}
              city={city.slug}
              heading={`Be the first ${industry.name.toLowerCase()} business on the block. Tell us about yours.`}
            />
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-text/70">
              {city.name} is a city of neighborhoods — from{" "}
              {city.meta.neighborhoods.slice(0, 3).join(", ")} to{" "}
              {city.meta.neighborhoods.slice(3, 5).join(" and ")}. Every block
              has businesses that deserve to be found. We&apos;re working to
              make that happen.
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Tier 1 — full content page
  const faqs = getTier1Faqs(industry.name, city.name);

  return (
    <div data-city={city.slug} style={themeStyle}>
      <JsonLd
        data={professionalServiceSchema(
          industry.name,
          city.name,
          city.state
        )}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <CityBadge name={city.name} state={city.state} />
          <SectionHeading as="h1" className="mt-4">
            {city.name} {industry.name.toLowerCase()} businesses are losing
            customers every day. Here&apos;s how to fight back.
          </SectionHeading>
          <p className="text-lg text-text/70">
            Right now, people in {city.meta.neighborhoods[0]},{" "}
            {city.meta.neighborhoods[1]}, and {city.meta.neighborhoods[2]} are
            searching for a {industry.name.toLowerCase()} near them. If they
            can&apos;t find you, they&apos;re finding your competition.
          </p>
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            What changes when we work together
          </SectionHeading>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="text-accent">✓</span>
              <span>More people find you when they search online</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="text-accent">✓</span>
              <span>More people walk through your door</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="text-accent">✓</span>
              <span>Your phone rings more</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="text-accent">✓</span>
              <span>You spend less time worrying about marketing</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">How it works</SectionHeading>
          <ol className="space-y-6 text-lg">
            <li className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-text-on-primary font-semibold">
                1
              </span>
              <div>
                <strong>Tell us about your business.</strong> We learn what
                makes your {industry.name.toLowerCase()} business unique and
                what&apos;s happening on your block.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-text-on-primary font-semibold">
                2
              </span>
              <div>
                <strong>We build your visibility.</strong> We make sure people
                in {city.name} can find you when they&apos;re looking for what
                you offer.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-text-on-primary font-semibold">
                3
              </span>
              <div>
                <strong>You see the results.</strong> More calls, more visits,
                more customers. We show you exactly what&apos;s working.
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            {city.name} is a city of neighborhoods
          </SectionHeading>
          <p className="mb-6 text-lg text-text/70">
            From {city.meta.neighborhoods.slice(0, 3).join(", ")} to{" "}
            {city.meta.neighborhoods.slice(3, 6).join(", ")} — every block in{" "}
            {city.name} has {industry.name.toLowerCase()} businesses that
            people are looking for. Known as &ldquo;{city.meta.tagline}
            ,&rdquo; {city.name} has a population of{" "}
            {parseInt(city.meta.population).toLocaleString()} people who need
            local businesses they can trust.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h2">
            Common questions from {industry.name.toLowerCase()} owners in{" "}
            {city.name}
          </SectionHeading>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg font-semibold text-primary">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-text/70">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-bg-subtle px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <LeadCaptureForm
            industry={industry.slug}
            city={city.slug}
            heading={`Ready to get more customers for your ${industry.name.toLowerCase()} business in ${city.name}?`}
          />
        </div>
      </section>
    </div>
  );
}
