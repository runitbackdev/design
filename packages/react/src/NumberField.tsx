import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { Minus, Plus } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";

const stepButton =
  "flex size-8 shrink-0 cursor-pointer items-center justify-center text-sub transition-colors duration-fast ease-base hover:bg-soft hover:text-ink disabled:cursor-default disabled:opacity-45 data-disabled:cursor-default data-disabled:opacity-45";

function Root({ className, ...props }: ComponentProps<typeof BaseNumberField.Root>) {
  return <BaseNumberField.Root className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function Group({ className, ...props }: ComponentProps<typeof BaseNumberField.Group>) {
  return (
    <BaseNumberField.Group
      className={cn(
        "inline-flex items-center overflow-hidden rounded-lg border border-line bg-surface focus-within:border-link focus-within:ring-2 focus-within:ring-focus-ring",
        className,
      )}
      {...props}
    />
  );
}

function Decrement({ className, children, ...props }: ComponentProps<typeof BaseNumberField.Decrement>) {
  return (
    <BaseNumberField.Decrement className={cn(stepButton, className)} {...props}>
      {children ?? <Minus className="size-3.5" />}
    </BaseNumberField.Decrement>
  );
}

function Increment({ className, children, ...props }: ComponentProps<typeof BaseNumberField.Increment>) {
  return (
    <BaseNumberField.Increment className={cn(stepButton, className)} {...props}>
      {children ?? <Plus className="size-3.5" />}
    </BaseNumberField.Increment>
  );
}

function Input({ className, ...props }: ComponentProps<typeof BaseNumberField.Input>) {
  return (
    <BaseNumberField.Input
      className={cn(
        "w-14 border-x border-line bg-surface py-1.5 text-center font-mono text-small text-ink outline-none",
        className,
      )}
      {...props}
    />
  );
}

export const NumberField = { ...BaseNumberField, Root, Group, Decrement, Increment, Input };
