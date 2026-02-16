import { SITE_URL, SITE_NAME } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Digital growth partner for Main Street businesses.",
    areaServed: [
      { "@type": "City", name: "Oakland", addressRegion: "CA" },
    ],
  };
}

export function professionalServiceSchema(
  industry: string,
  city: string,
  state: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — ${industry} in ${city}`,
    url: SITE_URL,
    areaServed: {
      "@type": "City",
      name: city,
      addressRegion: state,
    },
    serviceType: `Digital Marketing for ${industry}`,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(
  headline: string,
  datePublished: string,
  dateModified: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    datePublished,
    dateModified,
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
