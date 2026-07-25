import * as ToastPrimitive from "@rn-primitives/toast";
import { cn } from "./cn";

// Presentation only — the primitive has no viewport/queue; apps own placement
// and timing (web's Base UI toast manager has no native analog yet).
function Root({ className, ...props }: ToastPrimitive.RootProps) {
  return (
    <ToastPrimitive.Root
      className={cn("rounded-lg bg-ink px-3.5 py-2.5 shadow-2", className)}
      {...props}
    />
  );
}

function Title({ className, ...props }: ToastPrimitive.TitleProps) {
  return (
    <ToastPrimitive.Title
      className={cn("font-mono-semibold text-caption text-bg", className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: ToastPrimitive.DescriptionProps) {
  return (
    <ToastPrimitive.Description
      className={cn("font-sans text-small text-bg opacity-75", className)}
      {...props}
    />
  );
}

export const Toast = {
  ...ToastPrimitive,
  Root,
  Title,
  Description,
};
