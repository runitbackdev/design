import * as LabelPrimitive from "@rn-primitives/label";
import { View, type TextProps, type ViewProps } from "react-native";
import { cn } from "./cn";
import { Text } from "./Text";

function Root({ className, ...props }: ViewProps) {
  return <View className={cn("gap-1.5", className)} {...props} />;
}

function Label({ className, children, ...props }: LabelPrimitive.TextProps) {
  return (
    <LabelPrimitive.Root>
      <LabelPrimitive.Text
        className={cn("font-mono-medium text-caption tracking-wider text-sub", className)}
        {...props}
      >
        {children}
      </LabelPrimitive.Text>
    </LabelPrimitive.Root>
  );
}

function Description({ className, ...props }: TextProps) {
  return <Text className={cn("text-small text-sub", className)} {...props} />;
}

function FieldError({ className, ...props }: TextProps) {
  return <Text className={cn("text-small text-danger", className)} {...props} />;
}

export const Field = { Root, Label, Description, Error: FieldError };
