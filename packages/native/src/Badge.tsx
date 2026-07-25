import { cva, type VariantProps } from "class-variance-authority";
import { View, type ViewProps } from "react-native";
import { cn } from "./cn";
import { Text } from "./Text";

const badge = cva("flex-row items-center gap-1.5 self-start rounded-full border px-2.5 py-0.5", {
  variants: {
    tone: {
      neutral: "border-line",
      ink: "border-soft-border bg-soft",
      live: "border-link-soft-border bg-link-soft",
      warn: "border-transparent bg-warn-soft",
      danger: "border-transparent bg-danger-soft",
    },
  },
  defaultVariants: { tone: "neutral" },
});

const badgeLabel = cva("font-mono-medium text-caption tracking-wider", {
  variants: {
    tone: {
      neutral: "text-sub",
      ink: "text-ink",
      live: "text-link",
      warn: "text-warn",
      danger: "text-danger",
    },
  },
  defaultVariants: { tone: "neutral" },
});

export type BadgeProps = ViewProps & VariantProps<typeof badge>;

export function Badge({ className, tone, children, ...props }: BadgeProps) {
  return (
    <View className={cn(badge({ tone }), className)} {...props}>
      {typeof children === "string" ? (
        <Text className={badgeLabel({ tone })}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}
