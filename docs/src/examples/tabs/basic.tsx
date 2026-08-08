import { Tabs } from "@runitbk/react";

export default function () {
  return (
    <Tabs.Root defaultValue="overview" className="w-72">
      <Tabs.List>
        <Tabs.Tab value="overview">overview</Tabs.Tab>
        <Tabs.Tab value="activity">activity</Tabs.Tab>
        <Tabs.Tab value="settings">settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview" className="text-small text-sub">
        Three replicas healthy, last deploy 4m ago.
      </Tabs.Panel>
      <Tabs.Panel value="activity" className="text-small text-sub">
        12 events in the last hour.
      </Tabs.Panel>
      <Tabs.Panel value="settings" className="text-small text-sub">
        Region, scaling, and secrets.
      </Tabs.Panel>
    </Tabs.Root>
  );
}
