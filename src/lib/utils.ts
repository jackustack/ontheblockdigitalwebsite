import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export function citySlug(city: string, state: string): string {
  return `${slugify(city)}-${state.toLowerCase()}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ontheblockdigital.com";
export const SITE_NAME = "On The Block Digital";
