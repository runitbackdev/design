# @runitbk/native

The React Native components. Same tokens, same design language as `@runitbk/react`;
NativeWind v5 does the styling, [rn-primitives](https://rn-primitives.vercel.app)
supplies behavior where RN core has none.

Ships raw TypeScript — no build. Your app's Metro compiles it, which is also what
lets NativeWind scan its class strings.

## Wiring an app

The app owns the styling runtime. This package never depends on `nativewind` or
`react-native-css` — a second copy of that runtime crashes at startup (stack
overflow), so don't add them here, and don't add them to the workspace root.

1. Install `nativewind` + `react-native-css` (exact pins — they ship as a coupled
   pair) plus this package. See the repo README's Native section for the
   `react-native-worklets` and `lightningcss` pins and the vendored `react-native-css`
   tarball; all load-bearing. Note: `react-native-css` must ship `dist/` —
   `nativewind/metro` is loaded by Node and resolves it directly.
2. `metro.config.js`: wrap with `withNativewind(config, { input: "./global.css" })`.
3. `postcss.config.mjs`: the `@tailwindcss/postcss` plugin, nothing else.
4. `global.css`:

       @import "tailwindcss/theme.css" layer(theme);
       @import "tailwindcss/preflight.css" layer(base);
       @import "tailwindcss/utilities.css";
       @import "nativewind/theme";
       @import "@runitbk/styles/theme.css";
       @import "@runitbk/styles/native.css";

       @source "../node_modules/@runitbk/native/src"; /* adjust to where it resolves */

       :root { font-size: 16px; } /* rem base; the compiler defaults to 14 */

   `native.css` carries everything the components need beyond the tokens: the
   per-weight font families, the `duration-*` utilities, and the `fade-in`/`pop-in`
   mount keyframes. Without it, text renders in system fonts and overlays appear
   without animation.
5. Load the faces with `useFonts` from `expo-font` (`@expo-google-fonts/ibm-plex-sans`
   400/500/600, `.../ibm-plex-mono` 400/500/600) and gate rendering on them —
   `native.css` references those exact registered names.
6. Wrap the app in `<ThemeProvider>` — `theme="system" | "light" | "dark"`. Light is
   the `:root` baseline; dark swaps the semantic variables, like web's `data-theme`.
7. Render `<PortalHost />` once, last inside the providers — menus, dialogs, popovers,
   and toasts mount into it.
8. Only if you use `Drawer`: install `@gorhom/bottom-sheet` and
   `react-native-gesture-handler` in the app (this package deliberately doesn't depend
   on them) and nest `<Drawer.Provider>` inside `<ThemeProvider>`:

       <ThemeProvider theme={theme}>
         <Drawer.Provider>
           {/* app */}
           <PortalHost />
         </Drawer.Provider>
       </ThemeProvider>

## How components differ from web

- No text inheritance: `<Text>` carries the reading defaults; the type scale and
  tones are classNames (`text-title`, `text-sub`), exactly like web markup.
- Weight rides the font family (`font-mono-medium`), not `font-weight` — loaded
  faces are one family per weight.
- `hover:` is `active:`; focus rings are a border-color swap (`focus:border-focus-ring`).
- State styling is prop-driven (`checked`, `disabled`, `invalid`) — there are no
  data attributes on native.

## Known parity gaps

- Checkbox has no indeterminate state (rn-primitives limitation).
- Field has no validation context — wire `invalid` and `Field.Error` yourself.
- Dark-mode shadows keep their light values (variable provider is colors-only so far).
- react-native-web is untested and unthemed; web apps use `@runitbk/react`.

## Contributing

- `src/themes.ts` is generated — after changing the dark block in
  `@runitbk/styles/tokens.css`, run `pnpm --filter @runitbk/native generate:themes`.
- Shared internals live in `src/shared.tsx` (`PlainChildren`, `clamp`, `useThemeColor`,
  `wrapLabel`, menu icons); shared class strings in `menuClasses.ts` and
  `surfaceClasses.ts`. Add to those rather than redeclaring per component.
- Verify with both type programs: `pnpm --filter @runitbk/native typecheck` and
  `npx tsc --noEmit` from `playground/` — they resolve types differently and both
  must pass.
