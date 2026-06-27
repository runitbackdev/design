import { Toast as BaseToast } from "@base-ui/react/toast";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Portal(props: ComponentProps<typeof BaseToast.Portal>) {
  return <BaseToast.Portal {...props} />;
}

function Viewport({ className, ...props }: ComponentProps<typeof BaseToast.Viewport>) {
  return (
    <BaseToast.Viewport
      className={cn("fixed right-0 bottom-0 z-50 m-4 w-80 h-(--toast-frontmost-height)", className)}
      {...props}
    />
  );
}

function Root({ className, ...props }: ComponentProps<typeof BaseToast.Root>) {
  return (
    <BaseToast.Root
      className={cn(
        "absolute inset-x-0 bottom-0 origin-bottom rounded-lg bg-ink px-3.5 py-2.5 text-bg shadow-2",
        "z-[calc(1000-var(--toast-index))] scale-[calc(1-0.1*var(--toast-index))] translate-x-(--toast-swipe-movement-x) translate-y-[calc(var(--toast-index)*-20%)]",
        "transition duration-base ease-base data-swiping:transition-none",
        "data-expanded:scale-100 data-expanded:translate-y-[calc(var(--toast-offset-y)*-1-var(--toast-index)*0.75rem)]",
        "data-limited:opacity-0 data-starting-style:translate-y-[110%] data-starting-style:opacity-0 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Content({ className, ...props }: ComponentProps<typeof BaseToast.Content>) {
  return (
    <BaseToast.Content
      className={cn(
        "flex items-center gap-2.5 transition-opacity duration-base ease-base [&[data-behind]:not([data-expanded])]:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: ComponentProps<typeof BaseToast.Title>) {
  return (
    <BaseToast.Title className={cn("font-mono text-caption font-semibold", className)} {...props} />
  );
}

function Description({ className, ...props }: ComponentProps<typeof BaseToast.Description>) {
  return (
    <BaseToast.Description className={cn("font-sans text-small opacity-75", className)} {...props} />
  );
}

export const Toast = { ...BaseToast, Portal, Viewport, Root, Content, Title, Description };
