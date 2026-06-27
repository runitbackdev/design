import { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export interface TextLinkProps extends ComponentProps<"a"> {
  render?: useRender.RenderProp;
}

export function TextLink({ className, render, ...props }: TextLinkProps) {
  return useRender({
    render,
    defaultTagName: "a",
    props: {
      className: cn(
        "cursor-pointer text-link underline decoration-1 underline-offset-2 transition-colors duration-fast ease-base hover:text-link-hover hover:decoration-2",
        className,
      ),
      ...props,
    },
  });
}
