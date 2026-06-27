import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Trigger({ className, ...props }: ComponentProps<typeof BaseSelect.Trigger>) {
  return (
    <BaseSelect.Trigger
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-small text-ink transition-[border-color,box-shadow] duration-fast ease-base focus-visible:border-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring data-disabled:cursor-default data-disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

function Icon({ className, children, ...props }: ComponentProps<typeof BaseSelect.Icon>) {
  return (
    <BaseSelect.Icon className={cn("text-sub", className)} {...props}>
      {children ?? <ChevronDown className="size-3.5" />}
    </BaseSelect.Icon>
  );
}

function Positioner({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof BaseSelect.Positioner>) {
  return (
    <BaseSelect.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Popup
      className={cn(
        "min-w-[var(--anchor-width)] rounded-lg border border-line bg-surface p-1 shadow-2 transition duration-fast ease-base data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Item({ className, ...props }: ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md py-1.5 pr-2 pl-2 font-mono text-small text-ink outline-none select-none data-disabled:cursor-default data-disabled:opacity-45 data-highlighted:bg-soft",
        className,
      )}
      {...props}
    />
  );
}

function ItemIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseSelect.ItemIndicator>) {
  return (
    <BaseSelect.ItemIndicator className={cn("text-accent", className)} {...props}>
      {children ?? <Check className="size-3.5" />}
    </BaseSelect.ItemIndicator>
  );
}

export const Select = {
  ...BaseSelect,
  Trigger,
  Icon,
  Positioner,
  Popup,
  Item,
  ItemIndicator,
};
