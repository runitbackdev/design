import { Radio, RadioGroup } from "@runitbk/react";

export default function () {
  return (
    <RadioGroup defaultValue="failures">
      {["all deploys", "failures", "never"].map((v) => (
        <label key={v} className="flex cursor-pointer items-center gap-2 text-small text-ink">
          <Radio.Root value={v}>
            <Radio.Indicator />
          </Radio.Root>
          {v}
        </label>
      ))}
    </RadioGroup>
  );
}
