import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseOTPField.Root>) {
  return <BaseOTPField.Root className={cn("flex items-center gap-2", className)} {...props} />;
}

function Input({ className, ...props }: ComponentProps<typeof BaseOTPField.Input>) {
  return (
    <BaseOTPField.Input
      className={cn(
        "size-10 rounded-lg border border-soft-border bg-surface text-center font-mono text-subhead text-ink caret-link outline-none transition-[border-color,box-shadow] duration-fast ease-base focus:border-link focus:ring-2 focus:ring-focus-ring data-invalid:border-danger data-invalid:focus:ring-danger data-disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

function Separator({ className, ...props }: ComponentProps<typeof BaseOTPField.Separator>) {
  return (
    <BaseOTPField.Separator
      className={cn("font-mono text-small text-faint select-none", className)}
      {...props}
    />
  );
}

export const OTPField = { ...BaseOTPField, Root, Input, Separator };
