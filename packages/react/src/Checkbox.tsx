import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      className={cn(
        "inline-grid size-4 shrink-0 cursor-pointer place-content-center rounded-md border border-soft-border bg-surface transition-[background-color,border-color] duration-fast ease-base data-checked:border-accent data-checked:bg-accent data-disabled:cursor-default data-disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

function Indicator({ className, children, ...props }: ComponentProps<typeof BaseCheckbox.Indicator>) {
  return (
    <BaseCheckbox.Indicator
      className={cn("grid place-content-center text-accent-ink", className)}
      {...props}
    >
      {children ?? <Check className="size-3" strokeWidth={3} />}
    </BaseCheckbox.Indicator>
  );
}

export const Checkbox = { ...BaseCheckbox, Root, Indicator };
