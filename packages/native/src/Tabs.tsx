import * as TabsPrimitive from "@rn-primitives/tabs";
import { cva } from "class-variance-authority";
import { cn } from "./cn";
import { Text } from "./Text";

const trigger = cva("-mb-px border-b-2 px-px pt-1.5 pb-2 transition-colors duration-fast ease-base", {
  variants: {
    active: {
      true: "border-ink",
      false: "border-transparent",
    },
  },
});

const triggerLabel = cva("text-caption tracking-wide transition-colors duration-fast ease-base", {
  variants: {
    active: {
      true: "font-mono-semibold text-ink",
      false: "font-mono text-sub",
    },
  },
});

function List({ className, ...props }: TabsPrimitive.ListProps) {
  return (
    <TabsPrimitive.List
      className={cn("flex-row gap-5 border-b border-line", className)}
      {...props}
    />
  );
}

function Trigger({ className, value, children, ...props }: TabsPrimitive.TriggerProps) {
  const { value: rootValue } = TabsPrimitive.useRootContext();
  const active = rootValue === value;
  return (
    <TabsPrimitive.Trigger
      className={cn(trigger({ active }), className)}
      value={value}
      {...props}
    >
      {typeof children === "string" ? (
        <Text className={triggerLabel({ active })}>{children}</Text>
      ) : (
        children
      )}
    </TabsPrimitive.Trigger>
  );
}

function Content({ className, ...props }: TabsPrimitive.ContentProps) {
  return <TabsPrimitive.Content className={cn("pt-4", className)} {...props} />;
}

export const Tabs = { Root: TabsPrimitive.Root, List, Trigger, Content };
