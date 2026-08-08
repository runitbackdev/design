# @runitbk/react

React components for the Run It Back design system. Built on
[Base UI](https://base-ui.com); styled with Tailwind v4 tokens from
`@runitbk/styles`.

[Docs and live examples →](https://runitbackdev.github.io/design/)

## Install

    pnpm add @runitbk/react @runitbk/styles

Peers: `react` ^19, `react-dom` ^19.

## Use

Tailwind v4 and the styles import are required — without them components
render unstyled:

    @import "tailwindcss";
    @import "@runitbk/styles";

Then:

    import { Button } from "@runitbk/react";

    <Button variant="primary">Save</Button>
