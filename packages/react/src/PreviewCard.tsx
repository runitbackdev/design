import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Positioner({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof BasePreviewCard.Positioner>) {
  return (
    <BasePreviewCard.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BasePreviewCard.Popup>) {
  return (
    <BasePreviewCard.Popup
      className={cn(
        "w-64 origin-(--transform-origin) rounded-lg border border-line bg-surface p-3 text-ink shadow-2 transition duration-fast ease-base data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Arrow({ className, ...props }: ComponentProps<typeof BasePreviewCard.Arrow>) {
  return (
    <BasePreviewCard.Arrow
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
    </BasePreviewCard.Arrow>
  );
}

export const PreviewCard = { ...BasePreviewCard, Positioner, Popup, Arrow };
