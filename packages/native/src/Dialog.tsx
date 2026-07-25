import * as DialogPrimitive from "@rn-primitives/dialog";
import { cn } from "./cn";
import { dialogContent, dialogDescription, dialogOverlay, dialogTitle } from "./surfaceClasses";

function Overlay({ className, ...props }: DialogPrimitive.OverlayProps) {
  return <DialogPrimitive.Overlay className={cn(dialogOverlay, className)} {...props} />;
}

function Content({ className, ...props }: DialogPrimitive.ContentProps) {
  return <DialogPrimitive.Content className={cn(dialogContent, className)} {...props} />;
}

function Title({ className, ...props }: DialogPrimitive.TitleProps) {
  return <DialogPrimitive.Title className={cn(dialogTitle, className)} {...props} />;
}

function Description({ className, ...props }: DialogPrimitive.DescriptionProps) {
  return <DialogPrimitive.Description className={cn(dialogDescription, className)} {...props} />;
}

export const Dialog = {
  ...DialogPrimitive,
  Overlay,
  Content,
  Title,
  Description,
};
