import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function IndentBackground({ className, ...props }: ComponentProps<typeof BaseDrawer.IndentBackground>) {
  return <BaseDrawer.IndentBackground className={cn("fixed inset-0 -z-10 bg-ink", className)} {...props} />;
}

// Scales the app back to reveal the IndentBackground (iOS sheet effect). Base UI
// only toggles `data-active` when a drawer is open; the transform is ours.
function Indent({ className, ...props }: ComponentProps<typeof BaseDrawer.Indent>) {
  return (
    <BaseDrawer.Indent
      className={cn(
        "origin-top transition-transform duration-base ease-base data-active:scale-95 data-active:overflow-hidden data-active:rounded-2xl",
        className,
      )}
      {...props}
    />
  );
}

function Backdrop({ className, ...props }: ComponentProps<typeof BaseDrawer.Backdrop>) {
  return (
    <BaseDrawer.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-scrim transition-opacity duration-base ease-base data-starting-style:opacity-0 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Viewport({ className, ...props }: ComponentProps<typeof BaseDrawer.Viewport>) {
  return (
    <BaseDrawer.Viewport
      className={cn("pointer-events-none fixed inset-0 z-50", className)}
      {...props}
    />
  );
}

// Position, radius and offscreen offset all key off `data-swipe-direction`, so
// one Popup serves every side. Resting transform follows the finger via the
// `--drawer-swipe-movement-*` vars; the transition is dropped mid-swipe.
const popupBySide = [
  "data-[swipe-direction=down]:inset-x-0 data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:max-h-[85vh] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:border-t data-[swipe-direction=down]:data-starting-style:translate-y-full data-[swipe-direction=down]:data-ending-style:translate-y-full",
  "data-[swipe-direction=up]:inset-x-0 data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:max-h-[85vh] data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b data-[swipe-direction=up]:data-starting-style:-translate-y-full data-[swipe-direction=up]:data-ending-style:-translate-y-full",
  "data-[swipe-direction=left]:inset-y-0 data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:h-full data-[swipe-direction=left]:w-72 data-[swipe-direction=left]:max-w-[85vw] data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=left]:data-starting-style:-translate-x-full data-[swipe-direction=left]:data-ending-style:-translate-x-full",
  "data-[swipe-direction=right]:inset-y-0 data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:h-full data-[swipe-direction=right]:w-72 data-[swipe-direction=right]:max-w-[85vw] data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=right]:data-starting-style:translate-x-full data-[swipe-direction=right]:data-ending-style:translate-x-full",
].join(" ");

function Popup({ className, ...props }: ComponentProps<typeof BaseDrawer.Popup>) {
  return (
    <BaseDrawer.Popup
      className={cn(
        "pointer-events-auto absolute flex flex-col border-line bg-surface shadow-2 outline-none",
        "translate-x-(--drawer-swipe-movement-x,0px) translate-y-(--drawer-swipe-movement-y,0px)",
        "transition-transform duration-base ease-base data-swiping:transition-none",
        popupBySide,
        className,
      )}
      {...props}
    />
  );
}

function Handle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-soft-border", className)}
      {...props}
    />
  );
}

function Content({ className, ...props }: ComponentProps<typeof BaseDrawer.Content>) {
  return (
    <BaseDrawer.Content
      className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-5", className)}
      {...props}
    />
  );
}

function Title({ className, ...props }: ComponentProps<typeof BaseDrawer.Title>) {
  return (
    <BaseDrawer.Title
      className={cn("font-mono text-subhead font-semibold text-ink", className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: ComponentProps<typeof BaseDrawer.Description>) {
  return (
    <BaseDrawer.Description
      className={cn("font-sans text-small leading-relaxed text-sub", className)}
      {...props}
    />
  );
}

export const Drawer = {
  ...BaseDrawer,
  IndentBackground,
  Indent,
  Backdrop,
  Viewport,
  Popup,
  Handle,
  Content,
  Title,
  Description,
};
