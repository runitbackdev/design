import type { ComponentType } from "react";

type Mod = { default: ComponentType };

const mods = import.meta.glob<Mod>("./examples/*/*.tsx", { eager: true });
const raws = import.meta.glob<string>("./examples/*/*.tsx", {
  eager: true,
  query: "?raw",
  import: "default",
});
const highlighted = import.meta.glob<string>("./examples/*/*.tsx", {
  eager: true,
  query: "?highlight",
  import: "default",
});

export type ExampleEntry = { name: string; Comp: ComponentType; source: string; html: string };

const bySlug = new Map<string, ExampleEntry[]>();

for (const path in mods) {
  const match = path.match(/\.\/examples\/([^/]+)\/([^/]+)\.tsx$/);
  const mod = mods[path];
  const source = raws[path];
  const html = highlighted[path];
  if (!match || !mod || source === undefined || html === undefined) continue;
  const [, slug, name] = match as unknown as [string, string, string];
  const list = bySlug.get(slug) ?? [];
  list.push({ name, Comp: mod.default, source, html });
  bySlug.set(slug, list);
}

for (const list of bySlug.values()) list.sort((a, b) => a.name.localeCompare(b.name));

export function examplesFor(slug: string): ExampleEntry[] {
  return bySlug.get(slug) ?? [];
}
