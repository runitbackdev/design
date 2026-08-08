import { Checkbox, CheckboxGroup } from "@runitbk/react";

export default function () {
  return (
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
  );
}
