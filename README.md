# runitback-design

Software should be boring. Nothing here is decorative; everything has a job.

The design system for Run It Back.

## Packages

Each one stands alone and depends on `@runitback/styles`. No monorepo machinery — just
`file:` links between folders.

- `@runitback/styles` — the source of truth. Hand-authored CSS: the design tokens as
  custom properties, the Tailwind v4 `@theme` layer, and the web base styles. One
  import. NativeWind reads its `theme.css` directly.
- `@runitback/react` — the React components.

## Using it

The web app brings Tailwind v4 and imports the styles:

    @import "tailwindcss";
    @import "@runitback/styles";

That pulls the token variables, the `@theme` layer (so `bg-bg`, `text-ink`,
`shadow-1`, `bg-scrim` resolve and flip under `[data-theme="dark"]`), the IBM Plex
fonts, and the base layer. For finer control, `@runitback/styles/theme.css` is the
tokens-only slice and `@runitback/styles/fonts.css` is the fonts alone.

## Building it

mise handles node and pnpm — run `mise install` once. `@runitback/styles` is plain CSS,
no build step. TS packages (icons, react) typecheck with tsgo and emit with tsc.
The playground runs on Vite.
