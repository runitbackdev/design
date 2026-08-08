import { Meter } from "@runitbk/react";

export default function () {
  return (
    <Meter.Root value={72} className="w-64">
      <div className="flex items-center justify-between">
        <Meter.Label>storage used</Meter.Label>
        <Meter.Value />
      </div>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter.Root>
  );
}
