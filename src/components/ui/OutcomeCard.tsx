import { cn } from "@/lib/utils";

interface OutcomeCardProps {
  heading: string;
  description: string;
  className?: string;
}

export function OutcomeCard({
  heading,
  description,
  className,
}: OutcomeCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-bg-subtle p-6 text-center",
        className
      )}
    >
      <h3 className="mb-2 text-lg font-semibold text-primary">{heading}</h3>
      <p className="text-text/70">{description}</p>
    </div>
  );
}
