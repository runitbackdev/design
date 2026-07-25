import { cva, type VariantProps } from "class-variance-authority";
import { View, type ViewProps } from "react-native";
import { cn } from "./cn";

const card = cva("border border-line", {
  variants: {
    variant: {
      default: "rounded-lg bg-surface shadow-1",
      lg: "rounded-xl bg-surface shadow-1",
      sunken: "rounded-lg bg-sunken",
    },
  },
  defaultVariants: { variant: "default" },
});

export type CardProps = ViewProps & VariantProps<typeof card>;

export function Card({ className, variant, ...props }: CardProps) {
  return <View className={cn(card({ variant }), className)} {...props} />;
}
