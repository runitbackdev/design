import * as SelectPrimitive from "@rn-primitives/select";
import { ChevronDown } from "lucide-react-native";
import { cn } from "./cn";
import { menuItemClass, menuItemLabel, menuPopup } from "./menuClasses";
import { MenuCheckIcon, useThemeColor, type PlainChildren } from "./shared";
import { popupGroupLabel, popupOverlay, popupSeparator } from "./surfaceClasses";

function Trigger({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<SelectPrimitive.TriggerProps>) {
  const sub = useThemeColor("sub");
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "w-full flex-row items-center justify-between gap-2 rounded-lg border border-soft-border bg-surface px-3 py-2",
        disabled && "opacity-45",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      <ChevronDown size={14} color={sub} />
    </SelectPrimitive.Trigger>
  );
}

function Value({ className, ...props }: SelectPrimitive.ValueProps) {
  return <SelectPrimitive.Value className={cn(menuItemLabel, className)} {...props} />;
}

function Overlay({ className, ...props }: SelectPrimitive.OverlayProps) {
  return <SelectPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

function Content({ className, ...props }: SelectPrimitive.ContentProps) {
  return <SelectPrimitive.Content className={cn(menuPopup, className)} {...props} />;
}

function Item({ className, disabled, children, ...props }: PlainChildren<SelectPrimitive.ItemProps>) {
  return (
    <SelectPrimitive.Item
      className={menuItemClass(disabled, cn("justify-between", className))}
      disabled={disabled}
      {...props}
    >
      {children ?? (
        <>
          <ItemText />
          <ItemIndicator />
        </>
      )}
    </SelectPrimitive.Item>
  );
}

function ItemText({ className, ...props }: SelectPrimitive.ItemTextProps) {
  return <SelectPrimitive.ItemText className={cn(menuItemLabel, className)} {...props} />;
}

function ItemIndicator({
  children,
  ...props
}: PlainChildren<SelectPrimitive.ItemIndicatorProps>) {
  return (
    <SelectPrimitive.ItemIndicator {...props}>
      {children ?? <MenuCheckIcon />}
    </SelectPrimitive.ItemIndicator>
  );
}

function Label({ className, ...props }: SelectPrimitive.LabelProps) {
  return <SelectPrimitive.Label className={cn(popupGroupLabel, className)} {...props} />;
}

function Separator({ className, ...props }: SelectPrimitive.SeparatorProps) {
  return <SelectPrimitive.Separator className={cn(popupSeparator, className)} {...props} />;
}

export const Select = {
  ...SelectPrimitive,
  Trigger,
  Value,
  Overlay,
  Content,
  Item,
  ItemText,
  ItemIndicator,
  Label,
  Separator,
};
