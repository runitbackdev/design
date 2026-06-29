import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseSwitch.Root>) {
  return (
    <BaseSwitch.Root
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-soft-border bg-soft p-0.5 transition-[background-color,border-color] duration-fast ease-base before:absolute before:inset-x-0 before:-inset-y-1 before:content-[''] data-checked:border-accent data-checked:bg-accent data-disabled:cursor-not-allowed data-disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

function Thumb({ className, ...props }: ComponentProps<typeof BaseSwitch.Thumb>) {
  return (
    <BaseSwitch.Thumb
      className={cn(
        "size-4 rounded-full bg-surface shadow-sm transition-transform duration-base ease-base data-checked:translate-x-4 data-checked:bg-accent-ink",
        className,
      )}
      {...props}
    />
  );
}

export const Switch = { ...BaseSwitch, Root, Thumb };
