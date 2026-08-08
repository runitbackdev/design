import { Button, Menu } from "@runitbk/react";

export default function () {
  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="secondary" size="sm" />}>Menu</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup>
            <Menu.Group>
              <Menu.GroupLabel>channel</Menu.GroupLabel>
              <Menu.Item>Mark as read</Menu.Item>
              <Menu.Item>Mute channel</Menu.Item>
            </Menu.Group>
            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>Notifications</Menu.SubmenuTrigger>
              <Menu.Portal>
                <Menu.Positioner>
                  <Menu.Popup>
                    <Menu.Item>All messages</Menu.Item>
                    <Menu.Item>Mentions only</Menu.Item>
                    <Menu.Item>Nothing</Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.SubmenuRoot>
            <Menu.Separator />
            <Menu.Item className="text-danger data-highlighted:bg-danger-soft">
              Leave channel
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
