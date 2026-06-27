import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseFieldset.Root>) {
  return <BaseFieldset.Root className={cn("flex flex-col gap-3", className)} {...props} />;
}

function Legend({ className, ...props }: ComponentProps<typeof BaseFieldset.Legend>) {
  return (
    <BaseFieldset.Legend
      className={cn("font-mono text-overline uppercase text-sub", className)}
      {...props}
    />
  );
}

export const Fieldset = { ...BaseFieldset, Root, Legend };
