import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { isValidElement, type ComponentProps } from "react";
import { cn } from "./cn";

const button = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-mono uppercase select-none transition-[background-color,border-color,color] duration-fast ease-base disabled:cursor-default disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-ink hover:bg-accent-hover",
        secondary: "border border-line bg-surface text-ink shadow-1 hover:bg-sunken",
        ghost: "text-sub hover:bg-soft hover:text-ink",
        "ghost-danger": "text-danger hover:bg-danger-soft",
        danger: "bg-danger text-danger-ink hover:bg-danger-hover",
      },
      size: {
        md: "px-4 py-2 text-control",
        sm: "px-3 py-1.5 text-control-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "className"> &
  VariantProps<typeof button> & { className?: string };

export function Button({ className, variant, size, render, nativeButton, ...props }: ButtonProps) {
  // When rendered polymorphically as a non-button (e.g. an <a>), tell Base UI so
  // it restores the right role/keyboard semantics instead of warning.
  const isNative = nativeButton ?? (isValidElement(render) ? render.type === "button" : true);
  return (
    <BaseButton
      render={render}
      nativeButton={isNative}
      className={cn(button({ variant, size }), className)}
      {...props}
    />
  );
}
