import * as TogglePrimitive from "@rn-primitives/toggle";
import { cva } from "class-variance-authority";
import { cn } from "./cn";
import { Text } from "./Text";

export const toggle = cva("rounded-md px-2.5 py-1 transition-colors duration-fast ease-base", {
  variants: {
    pressed: {
      true: "bg-surface shadow-1",
      false: "",
    },
    disabled: {
      true: "opacity-45",
      false: "",
    },
  },
});

export const toggleLabel = cva("text-caption transition-colors duration-fast ease-base", {
  variants: {
    pressed: {
      true: "font-mono-semibold text-ink",
      false: "font-mono text-sub",
    },
  },
});

export type ToggleProps = TogglePrimitive.RootProps;

export function Toggle({ className, pressed, disabled, children, ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      className={cn(toggle({ pressed, disabled: !!disabled }), className)}
      pressed={pressed}
      disabled={disabled}
      {...props}
    >
      {typeof children === "string" ? (
        <Text className={toggleLabel({ pressed })}>{children}</Text>
      ) : (
        children
      )}
    </TogglePrimitive.Root>
  );
}
