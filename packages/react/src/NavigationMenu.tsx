import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Root({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.Root>) {
  return <BaseNavigationMenu.Root className={cn("relative", className)} {...props} />;
}

function List({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.List>) {
  return <BaseNavigationMenu.List className={cn("flex items-center gap-1", className)} {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.Trigger>) {
  return (
    <BaseNavigationMenu.Trigger
      className={cn(
        "group inline-flex cursor-pointer items-center gap-1 rounded-md px-3 py-1.5 font-mono text-small text-sub transition-colors duration-fast ease-base hover:bg-soft hover:text-ink data-popup-open:bg-soft data-popup-open:text-ink",
        className,
      )}
      {...props}
    />
  );
}

function Icon({ className, children, ...props }: ComponentProps<typeof BaseNavigationMenu.Icon>) {
  return (
    <BaseNavigationMenu.Icon
      className={cn(
        "transition-transform duration-fast ease-base group-data-popup-open:rotate-180",
        className,
      )}
      {...props}
    >
      {children ?? <ChevronDown className="size-3.5 text-faint" />}
    </BaseNavigationMenu.Icon>
  );
}

function Positioner({
  className,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof BaseNavigationMenu.Positioner>) {
  return (
    <BaseNavigationMenu.Positioner
      className={cn("z-50", className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.Popup>) {
  return (
    <BaseNavigationMenu.Popup
      className={cn(
        "h-(--popup-height) w-(--popup-width) origin-(--transform-origin) overflow-hidden rounded-lg border border-line bg-surface shadow-2 transition-[transform,opacity,width,height] duration-base ease-base data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Viewport({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.Viewport>) {
  return <BaseNavigationMenu.Viewport className={cn("relative size-full", className)} {...props} />;
}

function Content({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.Content>) {
  return <BaseNavigationMenu.Content className={cn("w-max p-2", className)} {...props} />;
}

function Link({ className, ...props }: ComponentProps<typeof BaseNavigationMenu.Link>) {
  return (
    <BaseNavigationMenu.Link
      className={cn(
        "block rounded-md px-3 py-2 font-mono text-small text-ink transition-colors duration-fast ease-base hover:bg-soft",
        className,
      )}
      {...props}
    />
  );
}

export const NavigationMenu = {
  ...BaseNavigationMenu,
  Root,
  List,
  Trigger,
  Icon,
  Positioner,
  Popup,
  Viewport,
  Content,
  Link,
};
