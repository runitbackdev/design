import { Example } from "./Example";
import { Page } from "./Page";
import { examplesFor } from "../examples-loader";
import { itemBySlug } from "../meta";

function humanize(name: string) {
  const s = name.replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function ComponentPage({ slug }: { slug: string }) {
  const meta = itemBySlug.get(slug);
  const examples = examplesFor(slug);
  if (!meta) return null;

  return (
    <Page title={meta.title} intro={meta.intro}>
      {examples.map((ex) => (
        <section key={ex.name} className="space-y-3">
          {examples.length > 1 && <h2 className="text-subhead text-ink">{humanize(ex.name)}</h2>}
          <Example of={ex.Comp} source={ex.source} html={ex.html} />
        </section>
      ))}
    </Page>
  );
}
