import * as AlertDialogPrimitive from "@rn-primitives/alert-dialog";
import { cn } from "./cn";
import { dialogContent, dialogDescription, dialogOverlay, dialogTitle } from "./surfaceClasses";

function Overlay({ className, ...props }: AlertDialogPrimitive.OverlayProps) {
  return <AlertDialogPrimitive.Overlay className={cn(dialogOverlay, className)} {...props} />;
}

function Content({ className, ...props }: AlertDialogPrimitive.ContentProps) {
  return <AlertDialogPrimitive.Content className={cn(dialogContent, className)} {...props} />;
}

function Title({ className, ...props }: AlertDialogPrimitive.TitleProps) {
  return <AlertDialogPrimitive.Title className={cn(dialogTitle, className)} {...props} />;
}

function Description({ className, ...props }: AlertDialogPrimitive.DescriptionProps) {
  return <AlertDialogPrimitive.Description className={cn(dialogDescription, className)} {...props} />;
}

export const AlertDialog = {
  ...AlertDialogPrimitive,
  Overlay,
  Content,
  Title,
  Description,
};
