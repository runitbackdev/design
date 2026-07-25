import * as RadioGroupPrimitive from "@rn-primitives/radio-group";
import { cva } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "./cn";

// Primitive keeps its root context private; carry value for Item styling.
const RadioGroupValueContext = createContext<string | undefined>(undefined);

const item = cva(
  "size-4 shrink-0 items-center justify-center rounded-full border bg-surface transition-colors duration-fast ease-base",
  {
    variants: {
      selected: {
        true: "border-accent",
        false: "border-soft-border",
      },
      disabled: {
        true: "opacity-45",
        false: "",
      },
    },
  },
);

function Root({ className, value, ...props }: RadioGroupPrimitive.RootProps) {
  return (
    <RadioGroupValueContext value={value}>
      <RadioGroupPrimitive.Root className={cn("gap-2", className)} value={value} {...props} />
    </RadioGroupValueContext>
  );
}

function Item({ className, value, disabled, ...props }: RadioGroupPrimitive.ItemProps) {
  const selected = useContext(RadioGroupValueContext) === value;
  return (
    <RadioGroupPrimitive.Item
      className={cn(item({ selected, disabled: !!disabled }), className)}
      value={value}
      disabled={disabled}
      hitSlop={4}
      {...props}
    />
  );
}

function Indicator({ className, ...props }: RadioGroupPrimitive.IndicatorProps) {
  return (
    <RadioGroupPrimitive.Indicator
      className={cn("size-2 rounded-full bg-accent", className)}
      {...props}
    />
  );
}

export const RadioGroup = { Root, Item, Indicator };
