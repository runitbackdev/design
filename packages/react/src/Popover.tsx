import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { SurfaceArrowSvg, surfaceArrowNudge } from "./Arrow";
import { popupMotion, popupSurface } from "./surfaceClasses";

function Positioner({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof BasePopover.Positioner>) {
  return (
    <BasePopover.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Popup
      className={cn(
        popupSurface,
        popupMotion,
        "max-w-xs p-3 text-ink",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: ComponentProps<typeof BasePopover.Title>) {
  return (
    <BasePopover.Title
      className={cn("mb-1 font-mono text-subhead font-semibold text-ink", className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: ComponentProps<typeof BasePopover.Description>) {
  return (
    <BasePopover.Description
      className={cn("font-sans text-small leading-relaxed text-sub", className)}
      {...props}
    />
  );
}

function Arrow({ className, ...props }: ComponentProps<typeof BasePopover.Arrow>) {
  return (
    <BasePopover.Arrow className={cn(surfaceArrowNudge, className)} {...props}>
      <SurfaceArrowSvg />
    </BasePopover.Arrow>
  );
}

export const Popover = {
  ...BasePopover,
  Positioner,
  Popup,
  Title,
  Description,
  Arrow,
};
