import { Checkbox, Field } from "@runitback/react";

export default function () {
  return (
    <Field.Root className="flex-row items-center gap-2">
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Field.Label className="cursor-pointer">Enable previews</Field.Label>
    </Field.Root>
  );
}
