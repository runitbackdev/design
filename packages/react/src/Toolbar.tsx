import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { barContainer } from "./surfaceClasses";

const toolbarItem =
  "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-small text-sub transition-colors duration-fast ease-base hover:bg-soft hover:text-ink data-pressed:bg-soft data-pressed:text-ink data-disabled:cursor-not-allowed data-disabled:opacity-45";

function Root({ className, ...props }: ComponentProps<typeof BaseToolbar.Root>) {
  return (
    <BaseToolbar.Root
      className={cn(barContainer, className)}
      {...props}
    />
  );
}

function Group({ className, ...props }: ComponentProps<typeof BaseToolbar.Group>) {
  return <BaseToolbar.Group className={cn("flex items-center gap-1", className)} {...props} />;
}

function Button({ className, ...props }: ComponentProps<typeof BaseToolbar.Button>) {
  return <BaseToolbar.Button className={cn(toolbarItem, className)} {...props} />;
}

function Link({ className, ...props }: ComponentProps<typeof BaseToolbar.Link>) {
  return <BaseToolbar.Link className={cn(toolbarItem, className)} {...props} />;
}

function Input({ className, ...props }: ComponentProps<typeof BaseToolbar.Input>) {
  return (
    <BaseToolbar.Input
      className={cn(
        "rounded-md border border-soft-border bg-surface px-2 py-1 font-mono text-small text-ink outline-none focus:border-link focus:ring-2 focus:ring-focus-ring",
        className,
      )}
      {...props}
    />
  );
}

function Separator({ className, ...props }: ComponentProps<typeof BaseToolbar.Separator>) {
  return <BaseToolbar.Separator className={cn("mx-1 h-5 w-px bg-line", className)} {...props} />;
}

export const Toolbar = { ...BaseToolbar, Root, Group, Button, Link, Input, Separator };
