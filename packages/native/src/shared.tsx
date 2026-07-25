import { Check, ChevronRight } from "lucide-react-native";
import type { ReactNode } from "react";
import { useNativeVariable } from "react-native-css/native";
import { menuItemLabel } from "./menuClasses";
import { Text } from "./Text";

export type PlainChildren<T> = Omit<T, "children"> & { children?: ReactNode };

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

// Native SVGs can't inherit currentColor; resolve theme tokens to concrete colors.
export const useThemeColor = (token: string) => String(useNativeVariable(token));

export function wrapLabel(children: ReactNode, className: string = menuItemLabel) {
  return typeof children === "string" ? <Text className={className}>{children}</Text> : children;
}

export function MenuCheckIcon() {
  const accent = useThemeColor("accent");
  return <Check size={14} color={accent} />;
}

export function SubTriggerChevron() {
  const faint = useThemeColor("faint");
  return <ChevronRight size={14} color={faint} />;
}
