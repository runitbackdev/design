import { Input } from "@runitback/react";

export default function () {
  return (
    <div className="flex w-64 flex-col gap-2">
      <Input placeholder="acme-web" />
      <Input defaultValue="run it back" />
      <Input placeholder="disabled" disabled />
    </div>
  );
}
