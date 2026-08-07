import { Checkbox, CheckboxGroup, Fieldset } from "@runitbk/react";

export default function () {
  return (
    <Fieldset.Root className="w-64">
      <Fieldset.Legend>email digests</Fieldset.Legend>
      <CheckboxGroup defaultValue={["mentions"]}>
        {["mentions", "threads", "announcements"].map((v) => (
          <label key={v} className="flex cursor-pointer items-center gap-2 text-small text-ink">
            <Checkbox.Root name={v}>
              <Checkbox.Indicator />
            </Checkbox.Root>
            {v}
          </label>
        ))}
      </CheckboxGroup>
    </Fieldset.Root>
  );
}
