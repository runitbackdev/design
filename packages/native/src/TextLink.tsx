import type { TextProps } from "react-native";
import { cn } from "./cn";
import { Text } from "./Text";

export type TextLinkProps = TextProps;

export function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <Text
      suppressHighlighting
      className={cn("text-link underline", className)}
      {...props}
    />
  );
}
