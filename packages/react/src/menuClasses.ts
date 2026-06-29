import { popupMotion, popupSurface } from "./surfaceClasses";

export const menuPopup = `${popupSurface} ${popupMotion} min-w-44 p-1`;

export const menuItem =
  "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 font-mono text-small text-ink outline-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-45 data-highlighted:bg-soft data-highlighted:ring-1 data-highlighted:ring-inset data-highlighted:ring-soft-border";
