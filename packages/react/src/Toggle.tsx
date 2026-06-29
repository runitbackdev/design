import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export type ToggleProps = ComponentProps<typeof BaseToggle>;

export function Toggle({ className, ...props }: ToggleProps) {
  return (
    <BaseToggle
      className={cn(
        "cursor-pointer rounded-md px-2.5 py-1 font-mono text-caption font-normal text-sub transition-[background-color,color] duration-fast ease-base hover:text-ink data-disabled:cursor-not-allowed data-disabled:opacity-45 data-pressed:bg-surface data-pressed:font-semibold data-pressed:text-ink data-pressed:shadow-1",
        className,
      )}
      {...props}
    />
  );
}
