import { Field, Input } from "@runitback/react";

export default function () {
  return (
    <Field.Root className="w-64">
      <Field.Label>Project name</Field.Label>
      <Input placeholder="acme-web" defaultValue="runitback" />
      <Field.Description>Lowercase, no spaces.</Field.Description>
    </Field.Root>
  );
}
