import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { Check, ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { menuItem, menuPopup } from "./menuClasses";
import { popupGroupLabel, popupSeparator } from "./surfaceClasses";

function Positioner({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.Positioner>) {
  return <BaseContextMenu.Positioner className={cn("z-50", className)} {...props} />;
}

function Popup({ className, ...props }: ComponentProps<typeof BaseContextMenu.Popup>) {
  return <BaseContextMenu.Popup className={cn(menuPopup, className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseContextMenu.Item>) {
  return <BaseContextMenu.Item className={cn(menuItem, className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseContextMenu.Separator>) {
  return <BaseContextMenu.Separator className={cn(popupSeparator, className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseContextMenu.GroupLabel>) {
  return <BaseContextMenu.GroupLabel className={cn(popupGroupLabel, className)} {...props} />;
}

function CheckboxItem({
  className,
  ...props
}: ComponentProps<typeof BaseContextMenu.CheckboxItem>) {
  return <BaseContextMenu.CheckboxItem className={cn(menuItem, className)} {...props} />;
}

function CheckboxItemIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseContextMenu.CheckboxItemIndicator>) {
  return (
    <BaseContextMenu.CheckboxItemIndicator className={cn("text-accent", className)} {...props}>
      {children ?? <Check className="size-3.5" />}
    </BaseContextMenu.CheckboxItemIndicator>
  );
}

function RadioItem({ className, ...props }: ComponentProps<typeof BaseContextMenu.RadioItem>) {
  return <BaseContextMenu.RadioItem className={cn(menuItem, className)} {...props} />;
}

function RadioItemIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseContextMenu.RadioItemIndicator>) {
  return (
    <BaseContextMenu.RadioItemIndicator className={cn("text-accent", className)} {...props}>
      {children ?? <Check className="size-3.5" />}
    </BaseContextMenu.RadioItemIndicator>
  );
}

function SubmenuTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof BaseContextMenu.SubmenuTrigger>) {
  return (
    <BaseContextMenu.SubmenuTrigger
      className={cn(menuItem, "justify-between data-popup-open:bg-soft", className)}
      {...props}
    >
      {children}
      <ChevronRight className="size-3.5 text-faint" />
    </BaseContextMenu.SubmenuTrigger>
  );
}

export const ContextMenu = {
  ...BaseContextMenu,
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
