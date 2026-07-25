import { Text as RNText, type TextProps } from "react-native";
import { cn } from "./cn";
import { Text } from "./Text";

export type WordmarkProps = Omit<TextProps, "children"> & { cursor?: boolean };

export function Wordmark({ className, cursor = true, ...props }: WordmarkProps) {
  return (
    <Text
      className={cn("font-mono-medium text-title tracking-tight", className)}
      {...props}
    >
      run it back
      {cursor ? <RNText className="text-link">_</RNText> : null}
    </Text>
  );
}
