import { cn } from "@/lib/utils";

interface OutcomeCardProps {
  icon: string;
  heading: string;
  description: string;
  className?: string;
}

export function OutcomeCard({
  icon,
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
      <div className="mb-3 text-4xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-primary">{heading}</h3>
      <p className="text-text/70">{description}</p>
    </div>
  );
}
