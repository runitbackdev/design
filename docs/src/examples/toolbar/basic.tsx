import { Toolbar } from "@runitback/react";

export default function () {
  return (
    <Toolbar.Root>
      <Toolbar.Button>bold</Toolbar.Button>
      <Toolbar.Button>italic</Toolbar.Button>
      <Toolbar.Separator />
      <Toolbar.Button>link</Toolbar.Button>
    </Toolbar.Root>
  );
}
