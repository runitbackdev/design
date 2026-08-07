import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const tokensPath = join(here, "../../styles/tokens.css");
const outPath = join(here, "../src/themes.ts");

const css = readFileSync(tokensPath, "utf8");

function parseBlock(selector) {
  const start = css.indexOf(selector);
  if (start === -1) throw new Error(`${selector} not found in tokens.css`);
  const open = css.indexOf("{", start);
  const close = css.indexOf("}", open);
  const vars = {};
  for (const [, name, value] of css.slice(open, close).matchAll(/--([\w-]+):\s*([^;]+);/g)) {
    vars[name] = value.trim();
  }
  return vars;
}

const root = parseBlock(":root");
const dark = parseBlock('[data-theme="dark"]');

function resolve(value, scope) {
  return value.replace(/var\(--([\w-]+)\)/g, (_, name) => {
    const ref = scope[name];
    if (ref === undefined) throw new Error(`unresolvable var(--${name})`);
    return resolve(ref, scope);
  });
}

const scope = { ...root, ...dark };
const entries = Object.entries(dark)
  // RN shadows are untested through VariableContextProvider; native styles its own.
  .filter(([name]) => !name.startsWith("shadow-"))
  .map(([name, value]) => [name, resolve(value, scope)]);

const key = (name) => (/^[A-Za-z_$][\w$]*$/.test(name) ? name : `"${name}"`);
const body = entries.map(([name, value]) => `  ${key(name)}: "${value}",`).join("\n");

writeFileSync(
  outPath,
  `// Generated from @runitbk/styles/tokens.css — do not edit.
// Regenerate: pnpm --filter @runitbk/native generate:themes
export const darkVars = {
${body}
};
`,
);

console.log(`themes.ts generated (${entries.length} vars)`);
