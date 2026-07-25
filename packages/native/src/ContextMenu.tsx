import * as ContextMenuPrimitive from "@rn-primitives/context-menu";
import { cn } from "./cn";
import { menuItemClass, menuPopup, menuSubTriggerClass } from "./menuClasses";
import { MenuCheckIcon, SubTriggerChevron, wrapLabel, type PlainChildren } from "./shared";
import { popupGroupLabel, popupOverlay, popupSeparator } from "./surfaceClasses";

function Overlay({ className, ...props }: ContextMenuPrimitive.OverlayProps) {
  return <ContextMenuPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

function Content({ className, ...props }: ContextMenuPrimitive.ContentProps) {
  return <ContextMenuPrimitive.Content className={cn(menuPopup, className)} {...props} />;
}

function Item({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<ContextMenuPrimitive.ItemProps>) {
  return (
    <ContextMenuPrimitive.Item
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </ContextMenuPrimitive.Item>
  );
}

function CheckboxItem({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<ContextMenuPrimitive.CheckboxItemProps>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function RadioItem({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<ContextMenuPrimitive.RadioItemProps>) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ItemIndicator({
  children,
  ...props
}: PlainChildren<ContextMenuPrimitive.ItemIndicatorProps>) {
  return (
    <ContextMenuPrimitive.ItemIndicator {...props}>
      {children ?? <MenuCheckIcon />}
    </ContextMenuPrimitive.ItemIndicator>
  );
}

function Label({ className, ...props }: ContextMenuPrimitive.LabelProps) {
  return <ContextMenuPrimitive.Label className={cn(popupGroupLabel, className)} {...props} />;
}

function Separator({ className, ...props }: ContextMenuPrimitive.SeparatorProps) {
  return <ContextMenuPrimitive.Separator className={cn(popupSeparator, className)} {...props} />;
}

function SubTrigger({
  className,
  children,
  ...props
}: PlainChildren<ContextMenuPrimitive.SubTriggerProps>) {
  const { open } = ContextMenuPrimitive.useSubContext();
  return (
    <ContextMenuPrimitive.SubTrigger className={menuSubTriggerClass(open, className)} {...props}>
      {wrapLabel(children)}
      <SubTriggerChevron />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function SubContent({ className, ...props }: ContextMenuPrimitive.SubContentProps) {
  return <ContextMenuPrimitive.SubContent className={cn(menuPopup, className)} {...props} />;
}

export const ContextMenu = {
  ...ContextMenuPrimitive,
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
