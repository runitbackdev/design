import { Progress } from "@runitbk/react";

export default function () {
  return (
    <Progress.Root value={66} className="w-64">
      <div className="flex items-center justify-between">
        <Progress.Label>uploading deploy-notes.md</Progress.Label>
        <Progress.Value />
      </div>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  );
}
