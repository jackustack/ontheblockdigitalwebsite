import industriesData from "@/data/industries.json";
import citiesData from "@/data/cities.json";
import type { Industry, City } from "@/data/types";
import { slugify } from "@/lib/utils";

const industries: Industry[] = industriesData.industries as Industry[];
const cities: City[] = citiesData.cities as City[];

export function findIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function findIndustryByInput(input: string): Industry | undefined {
  const lower = input.toLowerCase().trim();
  return industries.find(
    (i) =>
      i.name.toLowerCase() === lower ||
      i.slug === lower ||
      i.aliases.some((a) => a.toLowerCase() === lower)
  );
}

export function findCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function findCityByNameState(
  name: string,
  state: string
): City | undefined {
  const lowerName = name.toLowerCase().trim();
  const lowerState = state.toLowerCase().trim();
  return cities.find(
    (c) =>
      c.name.toLowerCase() === lowerName &&
      c.state.toLowerCase() === lowerState
  );
}

export function getFunnelRedirectPath(
  industryInput: string,
  cityName: string,
  stateAbbr: string
): string {
  const industry = findIndustryByInput(industryInput);
  const city = findCityByNameState(cityName, stateAbbr);

  if (industry && city?.active) {
    // Tier 1 or Tier 2 — both route to /{industry.slug}/{city.slug}
    return `/${industry.slug}/${city.slug}`;
  }

  // Unknown industry or unknown city
  const industrySlug = industry?.slug ?? slugify(industryInput);
  if (city?.active) {
    return `/industries/${industrySlug}/${city.slug}`;
  }

  // Unknown city
  return `/industries/${industrySlug}/request`;
}

export function getIndustryCityParams(): { industry: string; city: string }[] {
  const params: { industry: string; city: string }[] = [];
  for (const industry of industries) {
    for (const city of cities) {
      if (city.active) {
        params.push({ industry: industry.slug, city: city.slug });
      }
    }
  }
  return params;
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}

export function getAllCitySlugs(): string[] {
  return cities.filter((c) => c.active).map((c) => c.slug);
}

export function getIndustries(): Industry[] {
  return industries;
}

export function getCities(): City[] {
  return cities;
}
