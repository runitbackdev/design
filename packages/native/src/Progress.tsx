import * as ProgressPrimitive from "@rn-primitives/progress";
import { createContext, useContext } from "react";
import { View, type TextProps, type ViewProps } from "react-native";
import { cn } from "./cn";
import { clamp } from "./shared";
import { Text } from "./Text";

// The primitive supplies a11y only; width is ours.
const ProgressContext = createContext(0);

function Root({ className, value, max = 100, ...props }: ProgressPrimitive.RootProps) {
  const pct = typeof value === "number" ? clamp((value / max) * 100, 0, 100) : 0;
  return (
    <ProgressContext value={pct}>
      <ProgressPrimitive.Root
        className={cn("w-full gap-1.5", className)}
        value={value}
        max={max}
        {...props}
      />
    </ProgressContext>
  );
}

function Track({ className, ...props }: ViewProps) {
  return (
    <View className={cn("h-1.5 w-full overflow-hidden rounded-full bg-soft", className)} {...props} />
  );
}

function Indicator({ className, style, ...props }: ProgressPrimitive.IndicatorProps) {
  const pct = useContext(ProgressContext);
  return (
    <ProgressPrimitive.Indicator
      className={cn("h-full rounded-full bg-accent", className)}
      style={[{ width: `${pct}%` }, style]}
      {...props}
    />
  );
}

function Label({ className, ...props }: TextProps) {
  return <Text className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

function Value({ className, ...props }: TextProps) {
  return <Text className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

export const Progress = { Root, Track, Indicator, Label, Value };
