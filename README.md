# runitback-design

Software should be boring. Nothing here is decorative; everything has a job.

The design system for Run It Back.

## Packages

A pnpm workspace. Each package stands alone and depends on `@runitback/styles`.
Versions that must stay identical across packages (`typescript`, `react-native`,
`react-native-svg`, `@types/react`) live in the `catalog:` block of
`pnpm-workspace.yaml` — packages reference `catalog:` instead of repeating the
number, so they can't drift.

- `@runitback/styles` — the source of truth. Hand-authored CSS: the design tokens as
  custom properties, the Tailwind v4 `@theme` layer, and the web base styles. One
  import. NativeWind reads its `theme.css` directly; native apps also import its
  `native.css` (per-weight fonts, durations, mount keyframes).
- `@runitback/react` — the React components.
- `@runitback/native` — the React Native components (see its README for app wiring).

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
The docs site runs on Vite; the playground is the Expo app below.

## Native

`playground/` is an Expo app (SDK 57) styled with NativeWind v5, which reads the same
`theme.css` as the web. v5 is a preview, so the versions are load-bearing:

- `nativewind` and `react-native-css` are pinned **exactly** (no carets). They ship as
  a coupled pair; bumping one without the other breaks the compiler. Upgrades are
  deliberate PRs.
- `react-native-worklets` is pinned to `0.10.0` in the workspace `overrides` — it must
  match the native build frozen into the Expo Go client. `expo install` floats it to
  0.10.2, whose serialization layout differs, and every CSS transition then SIGSEGVs
  on startup (hard exit, no error screen). If a new Expo Go ships, re-pin to whatever
  its client actually bundles.
- `lightningcss` is pinned to `1.30.1` (NativeWind v5 requirement).
- `react-native-css` is a **vendored prebuilt tarball**: `vendor/react-native-css-3.0.7-master-f70c4024.tgz`,
  master commit `f70c4024` packed with `dist/` included. We need that commit because it
  contains two fixes absent from the 3.0.7 npm release — the rem write-back (#336: without
  it every utility inlines rem at 14 instead of 16 and the whole scale renders at 87.5%)
  and the TextInput `textAlign` crash fix (#323). A plain `github:` pin doesn't work:
  the repo gitignores `dist/`, and `nativewind/metro` is loaded by Node (not Metro), which
  resolves `dist/commonjs/metro/index.js` — no dist, no Metro config. `vendor/README.md`
  has the rebuild recipe. When a release ≥ those commits ships, switch to it and delete
  `vendor/`. The rem base itself is declared in `playground/global.css`
  (`:root { font-size: 16px }`).
- `packages/native/src/themes.ts` (the dark-theme variables) is **generated** from
  `tokens.css`: `pnpm --filter @runitback/native generate:themes`. Rerun after any
  dark-block token change; never edit it by hand.

Run it with `npx expo start` from `playground/` and open in Expo Go. After any CSS
change, restart with `-c` — Metro caches the compiled stylesheet.
