import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "./cn";

const avatar = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full border border-soft-border bg-soft font-mono font-semibold lowercase text-ink",
  {
    variants: {
      size: {
        md: "size-7 text-caption",
        lg: "size-10 text-subhead",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export type AvatarProps = Omit<ComponentProps<"span">, "children"> &
  VariantProps<typeof avatar> & {
    initials: string;
    src?: string | null;
    alt?: string;
  };

export function Avatar({ className, size, initials, src, alt, ...props }: AvatarProps) {
  return (
    <span className={cn(avatar({ size }), "overflow-hidden", className)} {...props}>
      {src ? <img src={src} alt={alt ?? initials} className="size-full object-cover" /> : initials}
    </span>
  );
}
