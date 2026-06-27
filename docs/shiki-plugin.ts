import { readFile } from "node:fs/promises";
import { createHighlighter, type Highlighter } from "shiki";
import type { Plugin } from "vite";

const SUFFIX = "?highlight";

export function shikiHighlight(): Plugin {
  let highlighter: Highlighter;
  const ready = createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["tsx"],
  }).then((h) => {
    highlighter = h;
  });

  return {
    name: "runitback:shiki",
    async load(id) {
      if (!id.endsWith(SUFFIX)) return null;
      await ready;
      const file = id.slice(0, -SUFFIX.length);
      const code = await readFile(file, "utf8");
      const html = highlighter.codeToHtml(code.trim(), {
        lang: "tsx",
        themes: { light: "github-light", dark: "github-dark" },
        defaultColor: false,
      });
      return `export default ${JSON.stringify(html)};`;
    },
  };
}
