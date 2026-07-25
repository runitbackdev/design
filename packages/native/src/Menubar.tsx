import * as MenubarPrimitive from "@rn-primitives/menubar";
import { cn } from "./cn";
import { menuItemClass, menuPopup, menuSubTriggerClass } from "./menuClasses";
import { MenuCheckIcon, SubTriggerChevron, wrapLabel, type PlainChildren } from "./shared";
import {
  barContainer,
  popupGroupLabel,
  popupOverlay,
  popupSeparator,
  toolbarItem,
  toolbarItemLabel,
} from "./surfaceClasses";

function Root({ className, ...props }: MenubarPrimitive.RootProps) {
  return <MenubarPrimitive.Root className={cn(barContainer, className)} {...props} />;
}

function Trigger({
  className,
  children,
  ...props
}: PlainChildren<MenubarPrimitive.TriggerProps>) {
  const { value } = MenubarPrimitive.useRootContext();
  const { value: menuValue } = MenubarPrimitive.useMenuContext();
  const open = value === menuValue;
  return (
    <MenubarPrimitive.Trigger
      className={cn(toolbarItem, open && "bg-soft", className)}
      {...props}
    >
      {wrapLabel(children, cn(toolbarItemLabel, open && "text-ink"))}
    </MenubarPrimitive.Trigger>
  );
}

function Content({ className, ...props }: MenubarPrimitive.ContentProps) {
  return <MenubarPrimitive.Content className={cn(menuPopup, className)} {...props} />;
}

function Item({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<MenubarPrimitive.ItemProps>) {
  return (
    <MenubarPrimitive.Item
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </MenubarPrimitive.Item>
  );
}

function CheckboxItem({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<MenubarPrimitive.CheckboxItemProps>) {
  return (
    <MenubarPrimitive.CheckboxItem
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </MenubarPrimitive.CheckboxItem>
  );
}

function RadioItem({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<MenubarPrimitive.RadioItemProps>) {
  return (
    <MenubarPrimitive.RadioItem
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </MenubarPrimitive.RadioItem>
  );
}

function ItemIndicator({
  children,
  ...props
}: PlainChildren<MenubarPrimitive.ItemIndicatorProps>) {
  return (
    <MenubarPrimitive.ItemIndicator {...props}>
      {children ?? <MenuCheckIcon />}
    </MenubarPrimitive.ItemIndicator>
  );
}

function Label({ className, ...props }: MenubarPrimitive.LabelProps) {
  return <MenubarPrimitive.Label className={cn(popupGroupLabel, className)} {...props} />;
}

function Separator({ className, ...props }: MenubarPrimitive.SeparatorProps) {
  return <MenubarPrimitive.Separator className={cn(popupSeparator, className)} {...props} />;
}

function SubTrigger({
  className,
  children,
  ...props
}: PlainChildren<MenubarPrimitive.SubTriggerProps>) {
  const { open } = MenubarPrimitive.useSubContext();
  return (
    <MenubarPrimitive.SubTrigger className={menuSubTriggerClass(open, className)} {...props}>
      {wrapLabel(children)}
      <SubTriggerChevron />
    </MenubarPrimitive.SubTrigger>
  );
}

function SubContent({ className, ...props }: MenubarPrimitive.SubContentProps) {
  return <MenubarPrimitive.SubContent className={cn(menuPopup, className)} {...props} />;
}

function Overlay({ className, ...props }: MenubarPrimitive.OverlayProps) {
  return <MenubarPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

export const Menubar = {
  ...MenubarPrimitive,
  Root,
  Trigger,
  Overlay,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  ItemIndicator,
  Label,
  Separator,
  SubTrigger,
  SubContent,
};
