import type { ComponentProps } from "react";
import { cn } from "./cn";

export type KbdProps = ComponentProps<"kbd">;

export function Kbd({ className, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "rounded-md border border-b-2 border-line bg-surface px-1.5 py-px font-mono text-caption text-sub",
        className,
      )}
      {...props}
    />
  );
}
