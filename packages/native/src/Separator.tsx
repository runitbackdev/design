import * as SeparatorPrimitive from "@rn-primitives/separator";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

const separator = cva("shrink-0 bg-line", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px self-stretch",
    },
  },
  defaultVariants: { orientation: "horizontal" },
});

export function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.RootProps) {
  return (
    <SeparatorPrimitive.Root
      className={cn(separator({ orientation }), className)}
      orientation={orientation}
      {...props}
    />
  );
}
