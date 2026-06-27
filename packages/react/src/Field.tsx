import { Field as BaseField } from "@base-ui/react/field";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseField.Root>) {
  return <BaseField.Root className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function Label({ className, ...props }: ComponentProps<typeof BaseField.Label>) {
  return (
    <BaseField.Label
      className={cn("font-mono text-caption font-medium tracking-wider text-sub", className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: ComponentProps<typeof BaseField.Description>) {
  return (
    <BaseField.Description className={cn("font-sans text-small text-sub", className)} {...props} />
  );
}

function FieldError({ className, ...props }: ComponentProps<typeof BaseField.Error>) {
  return <BaseField.Error className={cn("font-sans text-small text-danger", className)} {...props} />;
}

export const Field = { ...BaseField, Root, Label, Description, Error: FieldError };
