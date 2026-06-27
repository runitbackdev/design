import { Meter as BaseMeter } from "@base-ui/react/meter";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseMeter.Root>) {
  return <BaseMeter.Root className={cn("flex w-full flex-col gap-1.5", className)} {...props} />;
}

function Track({ className, ...props }: ComponentProps<typeof BaseMeter.Track>) {
  return (
    <BaseMeter.Track
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-soft", className)}
      {...props}
    />
  );
}

function Indicator({ className, ...props }: ComponentProps<typeof BaseMeter.Indicator>) {
  return <BaseMeter.Indicator className={cn("h-full rounded-full bg-accent", className)} {...props} />;
}

function Label({ className, ...props }: ComponentProps<typeof BaseMeter.Label>) {
  return <BaseMeter.Label className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

function Value({ className, ...props }: ComponentProps<typeof BaseMeter.Value>) {
  return <BaseMeter.Value className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

export const Meter = { ...BaseMeter, Root, Track, Indicator, Label, Value };
