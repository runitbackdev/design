import { Button, Drawer } from "@runitbk/react";

export default function () {
  return (
    <Drawer.Provider>
      <Drawer.Root>
        <Drawer.Trigger render={<Button variant="secondary" size="sm" />}>Bottom sheet</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Viewport>
            <Drawer.Popup>
              <Drawer.Handle />
              <Drawer.Content>
                <Drawer.Title>Quick switcher</Drawer.Title>
                <Drawer.Description>Swipe down to dismiss.</Drawer.Description>
                <div className="flex flex-col gap-1 pt-1 text-small text-sub">
                  <span># general</span>
                  <span># deploys</span>
                  <span># design</span>
                </div>
              </Drawer.Content>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </Drawer.Provider>
  );
}
