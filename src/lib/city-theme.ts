import type { CityColors } from "@/data/types";
import { findCity } from "@/lib/routing";

export const DEFAULT_COLORS: CityColors = {
  primary: "#1A1A2E",
  accent: "#E94560",
  bgSubtle: "#F0F0F0",
  textOnPrimary: "#FFFFFF",
};

export function getCityColors(citySlug: string): CityColors {
  const city = findCity(citySlug);
  return city?.colors ?? DEFAULT_COLORS;
}

export function getCityThemeStyle(
  citySlug: string
): Record<string, string> {
  const colors = getCityColors(citySlug);
  return {
    "--color-primary": colors.primary,
    "--color-accent": colors.accent,
    "--color-bg-subtle": colors.bgSubtle,
    "--color-text-on-primary": colors.textOnPrimary,
  };
}
