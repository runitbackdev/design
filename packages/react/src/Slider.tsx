import { Slider as BaseSlider } from "@base-ui/react/slider";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseSlider.Root>) {
  return <BaseSlider.Root className={cn("flex w-full flex-col gap-2", className)} {...props} />;
}

function Label({ className, ...props }: ComponentProps<typeof BaseSlider.Label>) {
  return (
    <BaseSlider.Label
      className={cn("font-mono text-caption font-medium tracking-wider text-sub", className)}
      {...props}
    />
  );
}

function Value({ className, ...props }: ComponentProps<typeof BaseSlider.Value>) {
  return <BaseSlider.Value className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

function Control({ className, ...props }: ComponentProps<typeof BaseSlider.Control>) {
  return (
    <BaseSlider.Control
      className={cn("flex w-full touch-none items-center py-1.5 select-none", className)}
      {...props}
    />
  );
}

function Track({ className, ...props }: ComponentProps<typeof BaseSlider.Track>) {
  return <BaseSlider.Track className={cn("h-1.5 w-full rounded-full bg-soft", className)} {...props} />;
}

function Indicator({ className, ...props }: ComponentProps<typeof BaseSlider.Indicator>) {
  return <BaseSlider.Indicator className={cn("rounded-full bg-accent", className)} {...props} />;
}

function Thumb({ className, ...props }: ComponentProps<typeof BaseSlider.Thumb>) {
  return (
    <BaseSlider.Thumb
      className={cn(
        "size-4 rounded-full border border-soft-border bg-surface shadow-sm outline-none transition-[border-color,box-shadow] duration-fast ease-base before:absolute before:-inset-2 before:content-[''] data-dragging:border-accent data-focused:ring-2 data-focused:ring-focus-ring data-disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

export const Slider = { ...BaseSlider, Root, Label, Value, Control, Track, Indicator, Thumb };
