import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  subtext?: string;
  className?: string;
}

const sizeMap = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export function SectionHeading({
  as: Tag = "h2",
  children,
  subtext,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-6", className)}>
      <Tag className={cn("font-heading font-normal tracking-tight text-primary", sizeMap[Tag])}>
        {children}
      </Tag>
      {subtext && (
        <p className="mt-2 text-lg text-text/70">{subtext}</p>
      )}
    </div>
  );
}
