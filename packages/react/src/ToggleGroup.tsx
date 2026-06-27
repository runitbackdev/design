import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export type ToggleGroupProps = ComponentProps<typeof BaseToggleGroup>;

export function ToggleGroup({ className, ...props }: ToggleGroupProps) {
  return (
    <BaseToggleGroup
      className={cn(
        "inline-flex gap-0.5 rounded-lg border border-soft-border bg-soft p-0.5",
        className,
      )}
      {...props}
    />
  );
}
