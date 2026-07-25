import * as TooltipPrimitive from "@rn-primitives/tooltip";
import { cn } from "./cn";
import type { PlainChildren } from "./shared";
import { popupOverlay } from "./surfaceClasses";
import { Text } from "./Text";

type ContentProps = PlainChildren<TooltipPrimitive.ContentProps>;

function Overlay({ className, ...props }: TooltipPrimitive.OverlayProps) {
  return <TooltipPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

function Content({ className, sideOffset = 6, children, ...props }: ContentProps) {
  return (
    <TooltipPrimitive.Content
      className={cn("pop-in rounded-md bg-ink px-2 py-1 shadow-2", className)}
      sideOffset={sideOffset}
      {...props}
    >
      {typeof children === "string" ? (
        <Text className="font-mono text-caption text-bg">{children}</Text>
      ) : (
        children
      )}
    </TooltipPrimitive.Content>
  );
}

export const Tooltip = {
  ...TooltipPrimitive,
  Overlay,
  Content,
};
