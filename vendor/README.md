# vendor/

Prebuilt `react-native-css` tarball: master commit `f70c4024`, packed **with `dist/`**.
The playground depends on it via `file:`.

Why not `github:` — the repo gitignores `dist/`, and `nativewind/metro` is loaded by
plain Node (when Metro reads `metro.config.js`), which resolves the `require`
condition to `dist/commonjs/metro/index.js`. No dist, no Metro. pnpm can't build it
at install time either: the `prepare` script needs devDeps upstream only gets through
yarn-workspace hoisting.

Why this commit — it has the two fixes missing from the 3.0.7 npm release: the rem
write-back (#336) and the TextInput `textAlign` crash fix (#323). **When a release
containing both ships, switch playground to the registry version and delete this
directory.**

## Rebuilding (bump the pin)

1. `curl -L https://codeload.github.com/nativewind/react-native-css/tar.gz/<SHA> | tar xz`
   into a scratch directory.
2. In the extracted dir, strip `packageManager` and `workspaces` from `package.json`
   (it's a yarn workspace; pnpm refuses otherwise), then
   `pnpm install --ignore-workspace --config.ignore-scripts=true`.
3. Add the devDeps yarn normally hoists (versions from its `yarn.lock`; mismatched
   `lightningcss`/`@babel/types` cause spurious declaration errors):

       pnpm add -D @types/node expo-status-bar @babel/types@7.28.4 @babel/traverse@7.28.4 \
         @types/babel__traverse lightningcss@1.30.1 metro-config@0.83.2 \
         metro-resolver@0.83.1 metro-transform-worker@0.83.2

4. Add `"example/metro.config.js"` to the `exclude` in its `tsconfig.json`
   (TS2742 under pnpm paths).
5. `npx bob build` — verify `dist/commonjs/metro/index.js` and
   `dist/typescript/module/src/index.d.ts` exist.
6. Restore the pristine `package.json` from the downloaded tarball, `npm pack`, copy
   the result here as `react-native-css-<version>-master-<shortsha>.tgz`.
7. Update the `file:` path in `playground/package.json`, `pnpm install`, then verify:
   react-native singleton (`readlink -f playground/node_modules/react-native
   packages/native/node_modules/react-native` — one path), both typechecks, and
   `npx expo export --platform android --no-bytecode` from `playground/`.
