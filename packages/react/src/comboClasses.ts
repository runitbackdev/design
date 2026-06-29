import { popupMotion, popupSurface } from "./surfaceClasses";

export const comboInput =
  "w-full rounded-lg border border-soft-border bg-surface px-3 py-2 font-mono text-small text-ink outline-none transition-[border-color,box-shadow] duration-fast ease-base placeholder:text-faint focus:border-link focus:ring-2 focus:ring-focus-ring data-invalid:border-danger data-invalid:focus:ring-danger data-disabled:opacity-45";

export const comboPopup = `${popupSurface} ${popupMotion} w-(--anchor-width) p-1`;

export const comboList = "max-h-80 overflow-y-auto";

export const comboEmpty = "px-4 not-empty:py-8 text-center text-small text-sub";

export const comboItem =
  "flex cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 font-mono text-small text-ink outline-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-45 data-highlighted:bg-soft data-highlighted:ring-1 data-highlighted:ring-inset data-highlighted:ring-soft-border";
