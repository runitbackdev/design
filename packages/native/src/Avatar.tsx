import * as AvatarPrimitive from "@rn-primitives/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "./cn";
import { Text } from "./Text";

const avatar = cva(
  "shrink-0 items-center justify-center self-start overflow-hidden rounded-full border border-soft-border bg-soft",
  {
    variants: {
      size: {
        md: "size-7",
        lg: "size-10",
      },
    },
    defaultVariants: { size: "md" },
  },
);

const avatarLabel = cva("font-mono-semibold lowercase text-ink", {
  variants: {
    size: {
      md: "text-caption",
      lg: "text-subhead",
    },
  },
  defaultVariants: { size: "md" },
});

type Size = VariantProps<typeof avatar>["size"];

const AvatarSizeContext = createContext<Size>("md");

type RootProps = AvatarPrimitive.RootProps & VariantProps<typeof avatar>;

function Root({ className, size, ...props }: RootProps) {
  return (
    <AvatarSizeContext value={size}>
      <AvatarPrimitive.Root className={cn(avatar({ size }), className)} {...props} />
    </AvatarSizeContext>
  );
}

function Image({ className, ...props }: AvatarPrimitive.ImageProps) {
  return <AvatarPrimitive.Image className={cn("size-full", className)} {...props} />;
}

function Fallback({ className, children, ...props }: AvatarPrimitive.FallbackProps) {
  const size = useContext(AvatarSizeContext);
  return (
    <AvatarPrimitive.Fallback {...props}>
      {typeof children === "string" ? (
        <Text className={cn(avatarLabel({ size }), className)}>{children}</Text>
      ) : (
        children
      )}
    </AvatarPrimitive.Fallback>
  );
}

export type AvatarProps = Omit<AvatarPrimitive.RootProps, "children" | "alt"> &
  VariantProps<typeof avatar> & { initials: string };

function AvatarFn({ initials, size, ...props }: AvatarProps) {
  return (
    <Root alt={initials} size={size} {...props}>
      <Fallback>{initials}</Fallback>
    </Root>
  );
}

export const Avatar = Object.assign(AvatarFn, { Root, Image, Fallback });
