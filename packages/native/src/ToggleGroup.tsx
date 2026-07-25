import * as ToggleGroupPrimitive from "@rn-primitives/toggle-group";
import { cn } from "./cn";
import { Text } from "./Text";
import { toggle, toggleLabel } from "./Toggle";

function Root({ className, ...props }: ToggleGroupPrimitive.RootProps) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn("flex-row gap-0.5 self-start rounded-lg border border-soft-border bg-soft p-0.5", className)}
      {...props}
    />
  );
}

function Item({ className, value, disabled, children, ...props }: ToggleGroupPrimitive.ItemProps) {
  const root = ToggleGroupPrimitive.useRootContext();
  const pressed = root.type === "multiple" ? root.value.includes(value) : root.value === value;
  return (
    <ToggleGroupPrimitive.Item
      className={cn(toggle({ pressed, disabled: !!disabled }), className)}
      value={value}
      disabled={disabled}
      {...props}
    >
      {typeof children === "string" ? (
        <Text className={toggleLabel({ pressed })}>{children}</Text>
      ) : (
        children
      )}
    </ToggleGroupPrimitive.Item>
  );
}

export const ToggleGroup = { Root, Item };
