import { Button, Collapsible } from "@runitbk/react";

export default function () {
  return (
    <Collapsible.Root className="w-48">
      <Collapsible.Trigger render={<Button variant="ghost" size="sm" />}>off-topic</Collapsible.Trigger>
      <Collapsible.Panel>
        <div className="flex flex-col gap-1 pt-2 text-small text-sub">
          <span># coffee</span>
          <span># runitback-moments</span>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
