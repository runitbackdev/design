import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ComponentProps } from "react";
import { cn } from "./cn";

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
        "max-w-xs origin-(--transform-origin) rounded-lg border border-line bg-surface p-3 text-ink shadow-2 transition duration-fast ease-base data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
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
    <BasePopover.Arrow
      className={cn(
        "data-[side=bottom]:-top-1.75 data-[side=top]:-bottom-1.75 data-[side=top]:rotate-180",
        className,
      )}
      {...props}
    >
      <svg width="14" height="7" viewBox="0 0 14 7" className="fill-surface">
        <path d="M0 7 L7 0 L14 7" className="stroke-line" strokeWidth="1" fill="none" />
        <path d="M0 7 L7 0 L14 7" />
      </svg>
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
