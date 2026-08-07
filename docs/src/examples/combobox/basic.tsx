import { Combobox } from "@runitbk/react";

export default function () {
  return (
    <Combobox.Root items={["general", "deploys", "design", "support", "coffee"]}>
      <Combobox.Input placeholder="#channel" className="w-48" />
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup>
            <Combobox.Empty>No channels.</Combobox.Empty>
            <Combobox.List>
              {(item: string) => (
                <Combobox.Item key={item} value={item}>
                  <span># {item}</span>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}
