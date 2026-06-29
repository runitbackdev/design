import { Input as BaseInput } from "@base-ui/react/input";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export type InputProps = ComponentProps<typeof BaseInput>;

export function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      className={cn(
        "w-full rounded-lg border border-soft-border bg-surface px-3 py-2 font-mono text-small text-ink transition-[border-color,box-shadow] duration-fast ease-base focus:border-link focus:outline-none focus:ring-2 focus:ring-focus-ring data-invalid:border-danger data-invalid:focus:ring-danger",
        className,
      )}
      {...props}
    />
  );
}
