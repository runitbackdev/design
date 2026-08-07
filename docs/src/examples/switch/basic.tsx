import { Field, Switch } from "@runitbk/react";

export default function () {
  return (
    <Field.Root className="flex-row items-center gap-2">
      <Switch.Root defaultChecked>
        <Switch.Thumb />
      </Switch.Root>
      <Field.Label className="cursor-pointer">Dark deploys</Field.Label>
    </Field.Root>
  );
}
