import { cn } from "@/lib/utils";

interface CityBadgeProps {
  name: string;
  state: string;
  className?: string;
}

export function CityBadge({ name, state, className }: CityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent",
        className
      )}
    >
      {name}, {state}
    </span>
  );
}
