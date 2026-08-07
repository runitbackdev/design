import { ContextMenu } from "@runitbk/react";

export default function () {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="flex h-9 items-center rounded-lg border border-dashed border-soft-border px-3 text-caption text-sub">
        right-click a message
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>Add reaction</ContextMenu.Item>
            <ContextMenu.Item>Reply in thread</ContextMenu.Item>
            <ContextMenu.Item>Copy text</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item className="text-danger data-highlighted:bg-danger-soft">
              Delete message
            </ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
