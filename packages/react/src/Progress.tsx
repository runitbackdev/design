import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseProgress.Root>) {
  return <BaseProgress.Root className={cn("flex w-full flex-col gap-1.5", className)} {...props} />;
}

function Track({ className, ...props }: ComponentProps<typeof BaseProgress.Track>) {
  return (
    <BaseProgress.Track
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-soft", className)}
      {...props}
    />
  );
}

function Indicator({ className, ...props }: ComponentProps<typeof BaseProgress.Indicator>) {
  return (
    <BaseProgress.Indicator
      className={cn("h-full rounded-full bg-accent transition-all duration-base ease-base", className)}
      {...props}
    />
  );
}

function Label({ className, ...props }: ComponentProps<typeof BaseProgress.Label>) {
  return <BaseProgress.Label className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

function Value({ className, ...props }: ComponentProps<typeof BaseProgress.Value>) {
  return <BaseProgress.Value className={cn("font-mono text-caption text-sub", className)} {...props} />;
}

export const Progress = { ...BaseProgress, Root, Track, Indicator, Label, Value };
