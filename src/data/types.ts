export interface Industry {
  name: string;
  slug: string;
  tier: 1 | 2;
  aliases: string[];
}

export interface CityColors {
  primary: string;
  accent: string;
  bgSubtle: string;
  textOnPrimary: string;
}

export interface CityMeta {
  population: string;
  tagline: string;
  neighborhoods: string[];
}

export interface City {
  name: string;
  state: string;
  slug: string;
  active: boolean;
  colors: CityColors;
  meta: CityMeta;
}

export interface IndustriesData {
  industries: Industry[];
}

export interface CitiesData {
  cities: City[];
}
