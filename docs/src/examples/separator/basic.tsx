import { Separator } from "@runitbk/react";

export default function () {
  return (
    <div className="flex items-center gap-3 text-caption text-sub">
      <span>run it back</span>
      <Separator orientation="vertical" className="h-4" />
      <span>chat</span>
    </div>
  );
}
