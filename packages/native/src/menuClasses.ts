import { cn } from "./cn";
import { popupSurface } from "./surfaceClasses";

export const menuPopup = `${popupSurface} min-w-44 p-1`;

export const menuItem = "flex-row items-center gap-2 rounded-md px-2 py-1.5 active:bg-soft";

export const menuItemLabel = "font-mono text-small text-ink";

export const menuItemClass = (disabled?: boolean | null, className?: string) =>
  cn(menuItem, disabled && "opacity-45", className);

export const menuSubTriggerClass = (open: boolean, className?: string) =>
  cn(menuItem, "justify-between", open && "bg-soft", className);
