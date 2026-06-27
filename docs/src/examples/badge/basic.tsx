import { Badge } from "@runitback/react";

export default function () {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>neutral</Badge>
      <Badge tone="ink">ink</Badge>
      <Badge tone="live">live</Badge>
      <Badge tone="warn">warn</Badge>
      <Badge tone="danger">danger</Badge>
    </div>
  );
}
