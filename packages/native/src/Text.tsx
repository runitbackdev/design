import { Text as RNText, type TextProps } from "react-native";
import { cn } from "./cn";

// RN has no text-style inheritance; this carries the reading defaults.
export function Text({ className, ...props }: TextProps) {
  return <RNText className={cn("font-sans text-body text-ink", className)} {...props} />;
}

export type { TextProps };
