import * as MenuPrimitive from "@rn-primitives/dropdown-menu";
import { cn } from "./cn";
import { menuItemClass, menuPopup, menuSubTriggerClass } from "./menuClasses";
import { MenuCheckIcon, SubTriggerChevron, wrapLabel, type PlainChildren } from "./shared";
import { popupGroupLabel, popupOverlay, popupSeparator } from "./surfaceClasses";

function Overlay({ className, ...props }: MenuPrimitive.OverlayProps) {
  return <MenuPrimitive.Overlay className={cn(popupOverlay, className)} {...props} />;
}

function Content({ className, sideOffset = 4, ...props }: MenuPrimitive.ContentProps) {
  return (
    <MenuPrimitive.Content
      className={cn(menuPopup, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function Item({ className, disabled, children, ...props }: PlainChildren<MenuPrimitive.ItemProps>) {
  return (
    <MenuPrimitive.Item className={menuItemClass(disabled, className)} disabled={disabled} {...props}>
      {wrapLabel(children)}
    </MenuPrimitive.Item>
  );
}

function CheckboxItem({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<MenuPrimitive.CheckboxItemProps>) {
  return (
    <MenuPrimitive.CheckboxItem
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </MenuPrimitive.CheckboxItem>
  );
}

function RadioItem({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<MenuPrimitive.RadioItemProps>) {
  return (
    <MenuPrimitive.RadioItem
      className={menuItemClass(disabled, className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children)}
    </MenuPrimitive.RadioItem>
  );
}

function ItemIndicator({ children, ...props }: PlainChildren<MenuPrimitive.ItemIndicatorProps>) {
  return (
    <MenuPrimitive.ItemIndicator {...props}>
      {children ?? <MenuCheckIcon />}
    </MenuPrimitive.ItemIndicator>
  );
}

function Label({ className, ...props }: MenuPrimitive.LabelProps) {
  return <MenuPrimitive.Label className={cn(popupGroupLabel, className)} {...props} />;
}

function Separator({ className, ...props }: MenuPrimitive.SeparatorProps) {
  return <MenuPrimitive.Separator className={cn(popupSeparator, className)} {...props} />;
}

function SubTrigger({
  className,
  children,
  ...props
}: PlainChildren<MenuPrimitive.SubTriggerProps>) {
  const { open } = MenuPrimitive.useSubContext();
  return (
    <MenuPrimitive.SubTrigger className={menuSubTriggerClass(open, className)} {...props}>
      {wrapLabel(children)}
      <SubTriggerChevron />
    </MenuPrimitive.SubTrigger>
  );
}

function SubContent({ className, ...props }: MenuPrimitive.SubContentProps) {
  return <MenuPrimitive.SubContent className={cn(menuPopup, className)} {...props} />;
}

export const Menu = {
  ...MenuPrimitive,
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
