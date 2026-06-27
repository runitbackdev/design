import { NumberField } from "@runitback/react";

export default function () {
  return (
    <NumberField.Root defaultValue={3} min={0}>
      <NumberField.Group>
        <NumberField.Decrement />
        <NumberField.Input />
        <NumberField.Increment />
      </NumberField.Group>
    </NumberField.Root>
  );
}
