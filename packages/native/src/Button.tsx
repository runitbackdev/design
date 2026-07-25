import { cva, type VariantProps } from "class-variance-authority";
import { Pressable, type PressableProps } from "react-native";
import { cn } from "./cn";
import { Text } from "./Text";

const button = cva(
  "flex-row items-center justify-center gap-2 self-start rounded-lg transition-colors duration-fast ease-base disabled:opacity-45",
  {
    variants: {
      variant: {
        primary: "bg-accent active:bg-accent-hover",
        secondary: "border border-line bg-surface shadow-1 active:bg-sunken",
        ghost: "active:bg-soft",
        "ghost-danger": "active:bg-danger-soft",
        danger: "bg-danger active:bg-danger-hover",
      },
      size: {
        md: "px-4 py-2",
        sm: "px-3 py-1.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

const buttonLabel = cva("font-mono-medium", {
  variants: {
    variant: {
      primary: "text-accent-ink",
      secondary: "text-ink",
      ghost: "text-sub",
      "ghost-danger": "text-danger",
      danger: "text-danger-ink",
    },
    size: {
      md: "text-control",
      sm: "text-control-sm",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export type ButtonProps = PressableProps & VariantProps<typeof button>;

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <Pressable className={cn(button({ variant, size }), className)} {...props}>
      {typeof children === "string" ? (
        <Text className={buttonLabel({ variant, size })}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
