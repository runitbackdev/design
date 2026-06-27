import type { ReactNode } from "react";

type Props = { title: string; intro: string; children: ReactNode };

export function Page({ title, intro, children }: Props) {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-display text-ink">{title}</h1>
        <p className="max-w-prose text-body text-sub">{intro}</p>
      </header>
      {children}
    </article>
  );
}
