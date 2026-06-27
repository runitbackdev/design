import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { Check, ChevronDown, X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { comboEmpty, comboInput, comboItem, comboList, comboPopup } from "./comboClasses";
import { menuGroupLabel, menuSeparator } from "./menuClasses";

function Input({ className, ...props }: ComponentProps<typeof BaseCombobox.Input>) {
  return <BaseCombobox.Input className={cn(comboInput, className)} {...props} />;
}

function InputGroup({ className, ...props }: ComponentProps<typeof BaseCombobox.InputGroup>) {
  return <BaseCombobox.InputGroup className={cn("flex items-center gap-1.5", className)} {...props} />;
}

function Icon({ className, children, ...props }: ComponentProps<typeof BaseCombobox.Icon>) {
  return (
    <BaseCombobox.Icon className={cn("text-sub", className)} {...props}>
      {children ?? <ChevronDown className="size-3.5" />}
    </BaseCombobox.Icon>
  );
}

function Clear({ className, children, ...props }: ComponentProps<typeof BaseCombobox.Clear>) {
  return (
    <BaseCombobox.Clear
      className={cn("cursor-pointer text-faint transition-colors duration-fast ease-base hover:text-ink", className)}
      {...props}
    >
      {children ?? <X className="size-3.5" />}
    </BaseCombobox.Clear>
  );
}

function Positioner({
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof BaseCombobox.Positioner>) {
  return (
    <BaseCombobox.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseCombobox.Popup>) {
  return <BaseCombobox.Popup className={cn(comboPopup, className)} {...props} />;
}

function List({ className, ...props }: ComponentProps<typeof BaseCombobox.List>) {
  return <BaseCombobox.List className={cn(comboList, className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseCombobox.Item>) {
  return <BaseCombobox.Item className={cn(comboItem, className)} {...props} />;
}

function ItemIndicator({ className, children, ...props }: ComponentProps<typeof BaseCombobox.ItemIndicator>) {
  return (
    <BaseCombobox.ItemIndicator className={cn("text-accent", className)} {...props}>
      {children ?? <Check className="size-3.5" />}
    </BaseCombobox.ItemIndicator>
  );
}

function Empty({ className, ...props }: ComponentProps<typeof BaseCombobox.Empty>) {
  return <BaseCombobox.Empty className={cn(comboEmpty, className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseCombobox.GroupLabel>) {
  return <BaseCombobox.GroupLabel className={cn(menuGroupLabel, className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseCombobox.Separator>) {
  return <BaseCombobox.Separator className={cn(menuSeparator, className)} {...props} />;
}

function Status({ className, ...props }: ComponentProps<typeof BaseCombobox.Status>) {
  return <BaseCombobox.Status className={cn("px-2 py-1.5 font-mono text-caption text-sub", className)} {...props} />;
}

function Chips({ className, ...props }: ComponentProps<typeof BaseCombobox.Chips>) {
  return <BaseCombobox.Chips className={cn("flex flex-wrap items-center gap-1", className)} {...props} />;
}

function Chip({ className, ...props }: ComponentProps<typeof BaseCombobox.Chip>) {
  return (
    <BaseCombobox.Chip
      className={cn(
        "inline-flex items-center gap-1 rounded-md bg-soft px-1.5 py-0.5 font-mono text-caption text-ink data-highlighted:bg-soft-border",
        className,
      )}
      {...props}
    />
  );
}

function ChipRemove({ className, children, ...props }: ComponentProps<typeof BaseCombobox.ChipRemove>) {
  return (
    <BaseCombobox.ChipRemove
      className={cn("cursor-pointer text-faint transition-colors duration-fast ease-base hover:text-ink", className)}
      {...props}
    >
      {children ?? <X className="size-3" />}
    </BaseCombobox.ChipRemove>
  );
}

export const Combobox = {
  ...BaseCombobox,
  Input,
  InputGroup,
  Icon,
  Clear,
  Positioner,
  Popup,
  List,
  Item,
  ItemIndicator,
  Empty,
  GroupLabel,
  Separator,
  Status,
  Chips,
  Chip,
  ChipRemove,
};
