import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { SurfaceArrowSvg, surfaceArrowNudge } from "./Arrow";
import { popupMotion, popupSurface } from "./surfaceClasses";

function Positioner({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof BasePreviewCard.Positioner>) {
  return (
    <BasePreviewCard.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BasePreviewCard.Popup>) {
  return (
    <BasePreviewCard.Popup
      className={cn(
        popupSurface,
        popupMotion,
        "w-64 p-3 text-ink",
        className,
      )}
      {...props}
    />
  );
}

function Arrow({ className, ...props }: ComponentProps<typeof BasePreviewCard.Arrow>) {
  return (
    <BasePreviewCard.Arrow className={cn(surfaceArrowNudge, className)} {...props}>
      <SurfaceArrowSvg />
    </BasePreviewCard.Arrow>
  );
}

export const PreviewCard = { ...BasePreviewCard, Positioner, Popup, Arrow };
