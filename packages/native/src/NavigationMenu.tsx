import * as NavigationMenuPrimitive from "@rn-primitives/navigation-menu";
import { cn } from "./cn";
import { menuItem, menuPopup } from "./menuClasses";
import { wrapLabel, type PlainChildren } from "./shared";
import { toolbarItem, toolbarItemLabel } from "./surfaceClasses";

function List({ className, ...props }: NavigationMenuPrimitive.ListProps) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function Trigger({
  className,
  children,
  ...props
}: PlainChildren<NavigationMenuPrimitive.TriggerProps>) {
  const { value } = NavigationMenuPrimitive.useRootContext();
  const { value: itemValue } = NavigationMenuPrimitive.useItemContext();
  const open = value === itemValue;
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(toolbarItem, open && "bg-soft", className)}
      {...props}
    >
      {wrapLabel(children, cn(toolbarItemLabel, open && "text-ink"))}
    </NavigationMenuPrimitive.Trigger>
  );
}

function Content({ className, ...props }: NavigationMenuPrimitive.ContentProps) {
  return <NavigationMenuPrimitive.Content className={cn(menuPopup, "p-3", className)} {...props} />;
}

function Link({
  className,
  children,
  ...props
}: PlainChildren<NavigationMenuPrimitive.LinkProps>) {
  return (
    <NavigationMenuPrimitive.Link className={cn(menuItem, className)} {...props}>
      {wrapLabel(children)}
    </NavigationMenuPrimitive.Link>
  );
}

export const NavigationMenu = {
  ...NavigationMenuPrimitive,
  List,
  Trigger,
  Content,
  Link,
};
