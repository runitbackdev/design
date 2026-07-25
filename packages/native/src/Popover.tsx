import * as PopoverPrimitive from "@rn-primitives/popover";
import type { TextProps } from "react-native";
import { cn } from "./cn";
import { popupOverlay, popupSurface } from "./surfaceClasses";
import { Text } from "./Text";

function Overlay({ className, ...props }: PopoverPrimitive.OverlayProps) {
  return <PopoverPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

function Content({ className, sideOffset = 8, ...props }: PopoverPrimitive.ContentProps) {
  return (
    <PopoverPrimitive.Content
      className={cn(popupSurface, "max-w-xs p-3", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function Title({ className, ...props }: TextProps) {
  return <Text className={cn("mb-1 font-mono-semibold text-subhead", className)} {...props} />;
}

function Description({ className, ...props }: TextProps) {
  return (
    <Text className={cn("font-sans text-small leading-relaxed text-sub", className)} {...props} />
  );
}

export const Popover = {
  ...PopoverPrimitive,
  Overlay,
  Content,
  Title,
  Description,
};
