import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  city: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  business,
  city,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "rounded-lg border-l-4 border-accent bg-bg-subtle p-6",
        className
      )}
    >
      <p className="mb-4 text-lg italic text-text">&ldquo;{quote}&rdquo;</p>
      <footer className="text-sm text-text/70">
        <strong>{name}</strong> — {business}, {city}
      </footer>
    </blockquote>
  );
}
