import { Accordion } from "@runitbk/react";

export default function () {
  return (
    <Accordion.Root className="w-72">
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>Notifications</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <p className="pb-3">Mentions and DMs only. Everything else waits.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>Privacy</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <p className="pb-3">No read receipts. No typing surveillance.</p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}
