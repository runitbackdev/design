import { Form as BaseForm } from "@base-ui/react/form";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export type FormProps = ComponentProps<typeof BaseForm>;

export function Form({ className, ...props }: FormProps) {
  return <BaseForm className={cn("flex flex-col gap-4", className)} {...props} />;
}
