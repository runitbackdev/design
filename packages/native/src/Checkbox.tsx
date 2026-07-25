import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react-native";
import { cn } from "./cn";
import { useThemeColor } from "./shared";

const root = cva(
  "size-4 shrink-0 items-center justify-center rounded-md border transition-colors duration-fast ease-base",
  {
    variants: {
      checked: {
        true: "border-accent bg-accent",
        false: "border-soft-border bg-surface",
      },
      disabled: {
        true: "opacity-45",
        false: "",
      },
    },
  },
);

function Root({ className, checked, disabled, ...props }: CheckboxPrimitive.RootProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(root({ checked, disabled: !!disabled }), className)}
      checked={checked}
      disabled={disabled}
      hitSlop={4}
      {...props}
    />
  );
}

function Indicator({ className, children, ...props }: CheckboxPrimitive.IndicatorProps) {
  const accentInk = useThemeColor("accent-ink");
  return (
    <CheckboxPrimitive.Indicator
      className={cn("items-center justify-center", className)}
      {...props}
    >
      {children ?? <Check size={12} strokeWidth={3} color={accentInk} />}
    </CheckboxPrimitive.Indicator>
  );
}

export const Checkbox = { Root, Indicator };
