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

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Local business SEO, website performance, and digital growth for restaurants, dentists, law firms, home services, and retail in Oakland and the Bay Area.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oakland",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Oakland", addressRegion: "CA" },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 37.8044,
          longitude: -122.2712,
        },
        geoRadius: "50000",
      },
    ],
    serviceType: [
      "Local SEO",
      "Website Performance Optimization",
      "Google Business Profile Optimization",
      "ADA/WCAG Compliance",
      "Small Business Digital Marketing",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Unified Stack LLC",
      url: "https://unifiedstack.io",
    },
    founder: {
      "@type": "Person",
      name: "Jack Tyler",
      url: "https://jackatyler.com",
    },
    sameAs: ["https://unifiedstack.io", "https://jackatyler.com"],
  };
}

export function professionalServiceHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Outcome-driven digital growth for local businesses. We help restaurants, dentists, law firms, home service providers, and retailers get found, get more calls, and bring more customers through the door.",
    areaServed: {
      "@type": "City",
      name: "Oakland",
      addressRegion: "CA",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local Business Growth Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Local SEO for Restaurants" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Local SEO for Home Services" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO for Dental Practices",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Local SEO for Law Firms" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Local SEO for Retail" },
        },
      ],
    },
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
