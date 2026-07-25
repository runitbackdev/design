import * as HoverCardPrimitive from "@rn-primitives/hover-card";
import { cn } from "./cn";
import { popupOverlay, popupSurface } from "./surfaceClasses";

// hover-card primitive; opens on press on native. Web name kept.
function Overlay({ className, ...props }: HoverCardPrimitive.OverlayProps) {
  return <HoverCardPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

function Content({ className, sideOffset = 8, ...props }: HoverCardPrimitive.ContentProps) {
  return (
    <HoverCardPrimitive.Content
      className={cn(popupSurface, "w-64 p-3", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

export const PreviewCard = {
  ...HoverCardPrimitive,
  Overlay,
  Content,
};
