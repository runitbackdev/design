import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export type MenubarProps = ComponentProps<typeof BaseMenubar>;

export function Menubar({ className, ...props }: MenubarProps) {
  return (
    <BaseMenubar
      className={cn("flex items-center gap-1 rounded-lg border border-line bg-surface p-1", className)}
      {...props}
    />
  );
}
