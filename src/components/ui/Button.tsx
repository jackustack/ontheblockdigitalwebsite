import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-text-on-primary hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-text-on-primary",
  ghost:
    "text-primary hover:bg-bg-subtle",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", className, children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
