import { cva, type VariantProps } from "class-variance-authority";
import { TextInput, type TextInputProps } from "react-native";
import { cn } from "./cn";

const input = cva(
  "w-full rounded-lg border bg-surface px-3 py-2 font-mono text-small text-ink transition-colors duration-fast ease-base placeholder:text-faint",
  {
    variants: {
      invalid: {
        false: "border-soft-border focus:border-focus-ring",
        true: "border-danger",
      },
    },
    defaultVariants: { invalid: false },
  },
);

export type InputProps = TextInputProps & VariantProps<typeof input>;

export function Input({ className, invalid, ...props }: InputProps) {
  return <TextInput className={cn(input({ invalid }), className)} {...props} />;
}
