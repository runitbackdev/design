import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseScrollArea.Root>) {
  return <BaseScrollArea.Root className={cn("relative overflow-hidden", className)} {...props} />;
}

function Viewport({ className, ...props }: ComponentProps<typeof BaseScrollArea.Viewport>) {
  return (
    <BaseScrollArea.Viewport
      className={cn("size-full overscroll-contain rounded-[inherit] outline-none", className)}
      {...props}
    />
  );
}

function Scrollbar({ className, ...props }: ComponentProps<typeof BaseScrollArea.Scrollbar>) {
  return (
    <BaseScrollArea.Scrollbar
      className={cn(
        "flex touch-none p-0.5 opacity-0 transition-opacity delay-300 select-none data-hovering:opacity-100 data-hovering:delay-0 data-scrolling:opacity-100 data-scrolling:delay-0 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2",
        className,
      )}
      {...props}
    />
  );
}

function Thumb({ className, ...props }: ComponentProps<typeof BaseScrollArea.Thumb>) {
  return <BaseScrollArea.Thumb className={cn("flex-1 rounded-full bg-soft-border", className)} {...props} />;
}

function Corner({ className, ...props }: ComponentProps<typeof BaseScrollArea.Corner>) {
  return <BaseScrollArea.Corner className={cn("bg-transparent", className)} {...props} />;
}

export const ScrollArea = { ...BaseScrollArea, Root, Viewport, Scrollbar, Thumb, Corner };
