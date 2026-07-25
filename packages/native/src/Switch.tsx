import * as SwitchPrimitive from "@rn-primitives/switch";
import { cva } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "./cn";

// The primitive's Thumb has no root context; carry checked ourselves so
// consumers keep the Root/Thumb anatomy without passing state twice.
const SwitchContext = createContext(false);

const root = cva(
  "h-5 w-9 shrink-0 flex-row items-center rounded-full border p-0.5 transition-colors duration-fast ease-base",
  {
    variants: {
      checked: {
        true: "border-accent bg-accent",
        false: "border-soft-border bg-soft",
      },
      disabled: {
        true: "opacity-45",
        false: "",
      },
    },
  },
);

const thumb = cva("size-4 rounded-full transition-transform duration-base ease-base", {
  variants: {
    checked: {
      true: "translate-x-4 bg-accent-ink",
      false: "translate-x-0 bg-surface",
    },
  },
});

function Root({ className, checked, disabled, children, ...props }: SwitchPrimitive.RootProps) {
  return (
    <SwitchContext value={checked}>
      <SwitchPrimitive.Root
        className={cn(root({ checked, disabled: !!disabled }), className)}
        checked={checked}
        disabled={disabled}
        hitSlop={4}
        {...props}
      >
        {children}
      </SwitchPrimitive.Root>
    </SwitchContext>
  );
}

function Thumb({ className, ...props }: SwitchPrimitive.ThumbProps) {
  const checked = useContext(SwitchContext);
  return <SwitchPrimitive.Thumb className={cn(thumb({ checked }), className)} {...props} />;
}

export const Switch = { Root, Thumb };
