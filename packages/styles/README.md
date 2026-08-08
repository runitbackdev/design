# @runitbk/styles

The source of truth for the Run It Back design system. Hand-authored CSS: design
tokens as custom properties, the Tailwind v4 `@theme` layer, and web base styles.
No build step.

[Docs →](https://runitbackdev.github.io/design/)

## Install

    pnpm add @runitbk/styles

## Use

    @import "tailwindcss";
    @import "@runitbk/styles";

That pulls tokens, the `@theme` layer (so `bg-bg`, `text-ink`, `shadow-1` resolve
and flip under `[data-theme="dark"]`), IBM Plex, and the base layer.

## Entry points

| Import | Contents |
| --- | --- |
| `@runitbk/styles` | everything below, web default |
| `@runitbk/styles/tokens.css` | raw custom properties |
| `@runitbk/styles/theme.css` | tokens + Tailwind `@theme` layer |
| `@runitbk/styles/fonts.css` | IBM Plex Sans/Mono only |
| `@runitbk/styles/native.css` | per-weight fonts, durations, mount keyframes |

Native apps import `theme.css` and `native.css` — see
[`@runitbk/native`](https://www.npmjs.com/package/@runitbk/native).
