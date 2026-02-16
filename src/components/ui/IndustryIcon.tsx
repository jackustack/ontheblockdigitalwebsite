const iconMap: Record<string, string> = {
  restaurants: "🍽️",
  "home-services": "🔧",
  dental: "🦷",
  legal: "⚖️",
  retail: "🛍️",
};

interface IndustryIconProps {
  slug: string;
  className?: string;
}

export function IndustryIcon({ slug, className }: IndustryIconProps) {
  const icon = iconMap[slug] ?? "🏪";
  return (
    <span className={className} aria-hidden="true" role="img">
      {icon}
    </span>
  );
}
