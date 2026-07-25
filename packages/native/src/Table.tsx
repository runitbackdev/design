import * as TablePrimitive from "@rn-primitives/table";
import { cn } from "./cn";
import type { PlainChildren } from "./shared";
import { Text } from "./Text";

// No web counterpart — styled from tokens to match the component idiom.

function Root({ className, ...props }: TablePrimitive.RootProps) {
  return (
    <TablePrimitive.Root
      className={cn("w-full rounded-lg border border-line bg-surface", className)}
      {...props}
    />
  );
}

function Header({ className, ...props }: TablePrimitive.HeaderProps) {
  return <TablePrimitive.Header className={cn("border-b border-line", className)} {...props} />;
}

function Row({ className, ...props }: TablePrimitive.RowProps) {
  return (
    <TablePrimitive.Row
      className={cn("flex-row border-b border-line active:bg-sunken", className)}
      {...props}
    />
  );
}

function Head({ className, children, ...props }: PlainChildren<TablePrimitive.HeadProps>) {
  return (
    <TablePrimitive.Head className={cn("flex-1 px-3 py-2", className)} {...props}>
      {typeof children === "string" ? (
        <Text className="font-mono-medium text-caption tracking-wider text-sub">{children}</Text>
      ) : (
        children
      )}
    </TablePrimitive.Head>
  );
}

function Cell({ className, children, ...props }: PlainChildren<TablePrimitive.CellProps>) {
  return (
    <TablePrimitive.Cell className={cn("flex-1 px-3 py-2", className)} {...props}>
      {typeof children === "string" ? <Text className="text-small">{children}</Text> : children}
    </TablePrimitive.Cell>
  );
}

function Footer({ className, ...props }: TablePrimitive.FooterProps) {
  return <TablePrimitive.Footer className={cn("bg-sunken", className)} {...props} />;
}

export const Table = { Root, Header, Body: TablePrimitive.Body, Row, Head, Cell, Footer };
