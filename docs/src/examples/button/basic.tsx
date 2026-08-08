import { Button } from "@runitbk/react";

export default function () {
  return (
    <div className="flex gap-3">
      <Button>Deploy</Button>
      <Button variant="secondary">Preview</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  );
}
