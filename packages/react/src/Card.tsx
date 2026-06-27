import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "./cn";

const card = cva("border border-line", {
  variants: {
    variant: {
      default: "rounded-lg bg-surface shadow-1",
      lg: "rounded-xl bg-surface shadow-1",
      sunken: "rounded-lg bg-sunken",
    },
  },
  defaultVariants: { variant: "default" },
});

export type CardProps = ComponentProps<"div"> & VariantProps<typeof card>;

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(card({ variant }), className)} {...props} />;
}
