import { Menu, Menubar } from "@runitback/react";

export default function () {
  return (
    <Menubar>
      {["File", "Edit"].map((m) => (
        <Menu.Root key={m}>
          <Menu.Trigger className="cursor-pointer rounded-md px-3 py-1.5 text-small text-sub hover:bg-soft hover:text-ink data-popup-open:bg-soft data-popup-open:text-ink">
            {m}
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner>
              <Menu.Popup>
                <Menu.Item>New</Menu.Item>
                <Menu.Item>Open</Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      ))}
    </Menubar>
  );
}
