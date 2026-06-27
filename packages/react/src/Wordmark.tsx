import type { ComponentProps } from "react";
import { cn } from "./cn";

export type WordmarkProps = Omit<ComponentProps<"span">, "children"> & { cursor?: boolean };

export function Wordmark({ className, cursor = true, ...props }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-mono text-title font-medium tracking-tight whitespace-nowrap text-ink",
        className,
      )}
      {...props}
    >
      run it back{cursor && <span className="text-link">_</span>}
    </span>
  );
}
