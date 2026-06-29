import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { barContainer } from "./surfaceClasses";

export type MenubarProps = ComponentProps<typeof BaseMenubar>;

export function Menubar({ className, ...props }: MenubarProps) {
  return (
    <BaseMenubar
      className={cn(barContainer, className)}
      {...props}
    />
  );
}
