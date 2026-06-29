import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { ChevronDown, X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";
import { comboEmpty, comboInput, comboItem, comboList, comboPopup } from "./comboClasses";
import { popupGroupLabel, popupSeparator } from "./surfaceClasses";

function Input({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Input>) {
  return <BaseAutocomplete.Input className={cn(comboInput, className)} {...props} />;
}

function InputGroup({ className, ...props }: ComponentProps<typeof BaseAutocomplete.InputGroup>) {
  return <BaseAutocomplete.InputGroup className={cn("flex items-center gap-1.5", className)} {...props} />;
}

function Icon({ className, children, ...props }: ComponentProps<typeof BaseAutocomplete.Icon>) {
  return (
    <BaseAutocomplete.Icon className={cn("text-sub", className)} {...props}>
      {children ?? <ChevronDown className="size-3.5" />}
    </BaseAutocomplete.Icon>
  );
}

function Clear({ className, children, ...props }: ComponentProps<typeof BaseAutocomplete.Clear>) {
  return (
    <BaseAutocomplete.Clear
      aria-label="Clear"
      className={cn("-m-1.5 cursor-pointer rounded-md p-1.5 text-faint transition-colors duration-fast ease-base hover:text-ink", className)}
      {...props}
    >
      {children ?? <X className="size-3.5" />}
    </BaseAutocomplete.Clear>
  );
}

function Positioner({
  className,
  sideOffset = 6,
  ...props
}: ComponentProps<typeof BaseAutocomplete.Positioner>) {
  return (
    <BaseAutocomplete.Positioner className={cn("z-50", className)} sideOffset={sideOffset} {...props} />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Popup>) {
  return <BaseAutocomplete.Popup className={cn(comboPopup, className)} {...props} />;
}

function List({ className, ...props }: ComponentProps<typeof BaseAutocomplete.List>) {
  return <BaseAutocomplete.List className={cn(comboList, className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Item>) {
  return <BaseAutocomplete.Item className={cn(comboItem, className)} {...props} />;
}

function Empty({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Empty>) {
  return <BaseAutocomplete.Empty className={cn(comboEmpty, className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseAutocomplete.GroupLabel>) {
  return <BaseAutocomplete.GroupLabel className={cn(popupGroupLabel, className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Separator>) {
  return <BaseAutocomplete.Separator className={cn(popupSeparator, className)} {...props} />;
}

function Status({ className, ...props }: ComponentProps<typeof BaseAutocomplete.Status>) {
  return <BaseAutocomplete.Status className={cn("px-2 py-1.5 font-mono text-caption text-sub", className)} {...props} />;
}

export const Autocomplete = {
  ...BaseAutocomplete,
  Input,
  InputGroup,
  Icon,
  Clear,
  Positioner,
  Popup,
  List,
  Item,
  Empty,
  GroupLabel,
  Separator,
  Status,
};
