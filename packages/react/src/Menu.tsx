import { Menu as BaseMenu } from "@base-ui/react/menu";
import { Check, ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { menuGroupLabel, menuItem, menuPopup, menuSeparator } from "./menuClasses";

function Positioner({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseMenu.Popup>) {
  return <BaseMenu.Popup className={cn(menuPopup, className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseMenu.Item>) {
  return <BaseMenu.Item className={cn(menuItem, className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator className={cn(menuSeparator, className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseMenu.GroupLabel>) {
  return <BaseMenu.GroupLabel className={cn(menuGroupLabel, className)} {...props} />;
}

function CheckboxItem({ className, ...props }: ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return <BaseMenu.CheckboxItem className={cn(menuItem, className)} {...props} />;
}

function CheckboxItemIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.CheckboxItemIndicator>) {
  return (
    <BaseMenu.CheckboxItemIndicator className={cn("text-accent", className)} {...props}>
      {children ?? <Check className="size-3.5" />}
    </BaseMenu.CheckboxItemIndicator>
  );
}

function RadioItem({ className, ...props }: ComponentProps<typeof BaseMenu.RadioItem>) {
  return <BaseMenu.RadioItem className={cn(menuItem, className)} {...props} />;
}

function RadioItemIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.RadioItemIndicator>) {
  return (
    <BaseMenu.RadioItemIndicator className={cn("text-accent", className)} {...props}>
      {children ?? <Check className="size-3.5" />}
    </BaseMenu.RadioItemIndicator>
  );
}

function SubmenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(menuItem, "justify-between data-popup-open:bg-soft", className)}
      {...props}
    >
      {children}
      <ChevronRight className="size-3.5 text-faint" />
    </BaseMenu.SubmenuTrigger>
  );
}

export const Menu = {
  ...BaseMenu,
  Positioner,
  Popup,
  Item,
  Separator,
  GroupLabel,
  CheckboxItem,
  CheckboxItemIndicator,
  RadioItem,
  RadioItemIndicator,
  SubmenuTrigger,
};
