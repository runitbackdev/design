import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Item({ className, ...props }: ComponentProps<typeof BaseAccordion.Item>) {
  return <BaseAccordion.Item className={cn("border-b border-line", className)} {...props} />;
}

function Trigger({ className, children, ...props }: ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Trigger
      className={cn(
        "group flex w-full cursor-pointer items-center justify-between gap-2 py-3 font-mono text-small text-ink outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-4 text-faint transition-transform duration-fast ease-base group-data-panel-open:rotate-180" />
    </BaseAccordion.Trigger>
  );
}

function Panel({ className, ...props }: ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      className={cn(
        "h-(--accordion-panel-height) overflow-hidden font-sans text-small text-sub transition-[height] duration-fast ease-base data-starting-style:h-0 data-ending-style:h-0",
        className,
      )}
      {...props}
    />
  );
}

export const Accordion = { ...BaseAccordion, Item, Trigger, Panel };
