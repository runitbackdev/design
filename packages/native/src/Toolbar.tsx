import * as ToolbarPrimitive from "@rn-primitives/toolbar";
import { createContext, useContext } from "react";
import { cn } from "./cn";
import { wrapLabel, type PlainChildren } from "./shared";
import { barContainer, toolbarItem, toolbarItemLabel } from "./surfaceClasses";

// Primitive keeps its toggle-group state private; carry it for item styling.
const ToolbarToggleContext = createContext<string | string[] | undefined>(undefined);

function Root({ className, ...props }: ToolbarPrimitive.RootProps) {
  return <ToolbarPrimitive.Root className={cn(barContainer, className)} {...props} />;
}

function Button({
  className,
  disabled,
  children,
  ...props
}: PlainChildren<ToolbarPrimitive.ButtonProps>) {
  return (
    <ToolbarPrimitive.Button
      className={cn(toolbarItem, disabled && "opacity-45", className)}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children, toolbarItemLabel)}
    </ToolbarPrimitive.Button>
  );
}

function ToggleGroup({ className, value, ...props }: ToolbarPrimitive.ToggleGroupProps) {
  return (
    <ToolbarToggleContext value={value}>
      <ToolbarPrimitive.ToggleGroup
        className={cn("flex-row items-center gap-1", className)}
        value={value as never}
        {...props}
      />
    </ToolbarToggleContext>
  );
}

function ToggleItem({
  className,
  value,
  disabled,
  children,
  ...props
}: PlainChildren<ToolbarPrimitive.ToggleItemProps>) {
  const groupValue = useContext(ToolbarToggleContext);
  const pressed = Array.isArray(groupValue) ? groupValue.includes(value) : groupValue === value;
  return (
    <ToolbarPrimitive.ToggleItem
      className={cn(toolbarItem, pressed && "bg-soft", disabled && "opacity-45", className)}
      value={value}
      disabled={disabled}
      {...props}
    >
      {wrapLabel(children, cn(toolbarItemLabel, pressed && "font-mono-semibold text-ink"))}
    </ToolbarPrimitive.ToggleItem>
  );
}

function Separator({ className, ...props }: ToolbarPrimitive.SeparatorProps) {
  return <ToolbarPrimitive.Separator className={cn("mx-1 h-5 w-px bg-line", className)} {...props} />;
}

export const Toolbar = {
  ...ToolbarPrimitive,
  Root,
  Button,
  ToggleGroup,
  ToggleItem,
  Separator,
};
