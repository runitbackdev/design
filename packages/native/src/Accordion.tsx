import * as AccordionPrimitive from "@rn-primitives/accordion";
import { ChevronDown } from "lucide-react-native";
import { View } from "react-native";
import { cn } from "./cn";
import { useThemeColor, type PlainChildren } from "./shared";
import { Text } from "./Text";

type TriggerProps = PlainChildren<AccordionPrimitive.TriggerProps>;

function Item({ className, ...props }: AccordionPrimitive.ItemProps) {
  return <AccordionPrimitive.Item className={cn("border-b border-line", className)} {...props} />;
}

function Trigger({ className, children, ...props }: TriggerProps) {
  const { isExpanded } = AccordionPrimitive.useItemContext();
  const faint = useThemeColor("faint");
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn("w-full flex-row items-center justify-between gap-2 py-3", className)}
        {...props}
      >
        {typeof children === "string" ? (
          <Text className="font-mono text-small">{children}</Text>
        ) : (
          children
        )}
        <View
          className={cn("transition-transform duration-fast ease-base", isExpanded && "rotate-180")}
        >
          <ChevronDown size={16} color={faint} />
        </View>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function Content({ className, ...props }: AccordionPrimitive.ContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn("pb-3 font-sans text-small text-sub", className)}
      {...props}
    />
  );
}

export const Accordion = {
  ...AccordionPrimitive,
  Item,
  Trigger,
  Content,
};
