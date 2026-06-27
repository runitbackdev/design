import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function List({ className, ...props }: ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List className={cn("flex gap-5 border-b border-line", className)} {...props} />
  );
}

function Tab({ className, ...props }: ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cn(
        "-mb-px cursor-pointer border-b-2 border-transparent px-px pt-1.5 pb-2 font-mono text-caption font-normal tracking-wide text-sub transition-[color,border-color] duration-fast ease-base hover:text-ink data-active:border-ink data-active:font-semibold data-active:text-ink",
        className,
      )}
      {...props}
    />
  );
}

function Panel({ className, ...props }: ComponentProps<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel className={cn("pt-4 outline-none", className)} {...props} />;
}

export const Tabs = { ...BaseTabs, List, Tab, Panel };
