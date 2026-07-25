import { useRef, useState } from "react";
import { Pressable, TextInput, View, type TextInputProps } from "react-native";
import { cn } from "./cn";
import { Text } from "./Text";

// Web renders N real inputs and the lib routes focus; the native idiom is one
// hidden input (SMS autofill works) with rendered boxes.
export type OTPFieldProps = Omit<TextInputProps, "value" | "onChangeText" | "children"> & {
  length?: number;
  value: string;
  onValueChange: (value: string) => void;
  invalid?: boolean;
};

export function OTPField({
  length = 6,
  value,
  onValueChange,
  invalid = false,
  className,
  ...props
}: OTPFieldProps) {
  const input = useRef<TextInput>(null);
  const [focused, setFocused] = useState(false);
  const activeIndex = Math.min(value.length, length - 1);
  return (
    <Pressable
      className={cn("flex-row items-center gap-2", className)}
      onPress={() => input.current?.focus()}
    >
      {Array.from({ length }, (_, i) => (
        <View
          key={i}
          className={cn(
            "size-10 items-center justify-center rounded-lg border bg-surface",
            invalid ? "border-danger" : "border-soft-border",
            !invalid && focused && i === activeIndex && "border-focus-ring",
          )}
        >
          <Text className="font-mono text-subhead">{value[i] ?? ""}</Text>
        </View>
      ))}
      <TextInput
        ref={input}
        value={value}
        onChangeText={(text) => onValueChange(text.replace(/\D/g, "").slice(0, length))}
        keyboardType="number-pad"
        maxLength={length}
        autoComplete="one-time-code"
        textContentType="oneTimeCode"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="absolute h-px w-px opacity-0"
        {...props}
      />
    </Pressable>
  );
}
