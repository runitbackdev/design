import { View, type ViewProps } from "react-native";
import type { ReactNode } from "react";
import { cn } from "./cn";
import { Text } from "./Text";

export type KbdProps = Omit<ViewProps, "children"> & { children?: ReactNode };

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <View
      className={cn(
        "self-start rounded-md border border-b-2 border-line bg-surface px-1.5 py-px",
        className,
      )}
      {...props}
    >
      {typeof children === "string" ? (
        <Text className="font-mono text-caption text-sub">{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}
