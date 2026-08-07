import { Button } from "@runitbk/react";

export default function () {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-danger">Ghost danger</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}
