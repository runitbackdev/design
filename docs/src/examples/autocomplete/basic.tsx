import { Autocomplete } from "@runitbk/react";

export default function () {
  return (
    <Autocomplete.Root items={[":tada:", ":rocket:", ":eyes:", ":fire:", ":+1:"]}>
      <Autocomplete.Input placeholder="emoji shortcode" className="w-48" />
      <Autocomplete.Portal>
        <Autocomplete.Positioner>
          <Autocomplete.Popup>
            <Autocomplete.Empty>Nothing matches.</Autocomplete.Empty>
            <Autocomplete.List>
              {(item: string) => (
                <Autocomplete.Item key={item} value={item}>
                  {item}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  );
}
