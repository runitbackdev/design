import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export function RadioGroup({ className, ...props }: ComponentProps<typeof BaseRadioGroup>) {
  return <BaseRadioGroup className={cn("flex flex-col gap-2", className)} {...props} />;
}

function Root({ className, ...props }: ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      className={cn(
        "inline-grid size-4 shrink-0 cursor-pointer place-content-center rounded-full border border-soft-border bg-surface transition-[background-color,border-color] duration-fast ease-base data-checked:border-accent data-disabled:cursor-default data-disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

function Indicator({ className, ...props }: ComponentProps<typeof BaseRadio.Indicator>) {
  return (
    <BaseRadio.Indicator
      className={cn("size-2 rounded-full bg-accent", className)}
      {...props}
    />
  );
}

export const Radio = { ...BaseRadio, Root, Indicator };
