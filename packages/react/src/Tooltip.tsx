import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Positioner({
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof BaseTooltip.Positioner>) {
  return (
    <BaseTooltip.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Popup
      className={cn(
        "origin-(--transform-origin) rounded-md bg-ink px-2 py-1 font-mono text-caption text-bg shadow-2 transition duration-fast ease-base data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Arrow({ className, ...props }: ComponentProps<typeof BaseTooltip.Arrow>) {
  return (
    <BaseTooltip.Arrow
      className={cn(
        "data-[side=bottom]:-top-1.5 data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180",
        className,
      )}
      {...props}
    >
      <svg width="12" height="6" viewBox="0 0 12 6" className="fill-ink">
        <path d="M0 6 L6 0 L12 6" />
      </svg>
    </BaseTooltip.Arrow>
  );
}

export const Tooltip = {
  ...BaseTooltip,
  Positioner,
  Popup,
  Arrow,
};
