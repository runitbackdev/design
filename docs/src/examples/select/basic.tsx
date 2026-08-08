import { Select } from "@runitbk/react";

export default function () {
  return (
    <Select.Root defaultValue="us-east">
      <Select.Trigger>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            {["us-east", "eu-west", "ap-south", "self-hosted"].map((r) => (
              <Select.Item key={r} value={r}>
                <Select.ItemIndicator />
                <Select.ItemText>{r}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
