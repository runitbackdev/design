import { Button, Popover } from "@runitbk/react";

export default function () {
  return (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="secondary" size="sm" />}>Popover</Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup>
            <Popover.Arrow />
            <Popover.Title>Invite people</Popover.Title>
            <Popover.Description>Share a link. It expires when you say so.</Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
