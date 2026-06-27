import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button, cn, ScrollArea, Separator, Wordmark } from "@runitback/react";
import { groups, itemBySlug } from "./meta";
import { CommandPalette } from "./components/CommandPalette";
import { ComponentPage } from "./components/ComponentPage";
import { OverviewPage } from "./pages/overview";

function useHashSlug() {
  const read = () => window.location.hash.replace(/^#\/?/, "");
  const [slug, setSlug] = useState(read);
  useEffect(() => {
    const on = () => setSlug(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return slug;
}

function NavLink({ slug, title, active }: { slug: string; title: string; active: boolean }) {
  return (
    <a
      href={`#/${slug}`}
      className={cn(
        "rounded-lg px-3 py-1.5 text-body transition-colors duration-fast ease-base",
        active ? "bg-soft text-ink" : "text-sub hover:bg-soft hover:text-ink",
      )}
    >
      {title}
    </a>
  );
}

export function App() {
  const [dark, setDark] = useState(false);
  const slug = useHashSlug();
  const known = slug && itemBySlug.has(slug);

  return (
    <div data-theme={dark ? "dark" : undefined} className="flex min-h-dvh bg-bg text-ink">
      <aside className="sticky top-0 flex h-dvh w-60 shrink-0 flex-col border-r border-line">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#/">
            <Wordmark />
          </a>
          <Button
            variant="ghost"
            size="sm"
            aria-label={dark ? "Switch to light" : "Switch to dark"}
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </div>
        <Separator />
        <div className="p-3">
          <CommandPalette />
        </div>
        <ScrollArea.Root className="min-h-0 flex-1">
          <ScrollArea.Viewport>
            <nav className="flex flex-col gap-5 p-3">
              <NavLink slug="" title="Overview" active={!known} />
              {groups.map((group) => (
                <div key={group.label} className="flex flex-col gap-0.5">
                  <span className="px-3 pb-1 text-overline text-accent">{group.label}</span>
                  {group.items.map((item) => (
                    <NavLink key={item.slug} slug={item.slug} title={item.title} active={slug === item.slug} />
                  ))}
                </div>
              ))}
            </nav>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar>
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </aside>

      <main className="flex-1 overflow-x-hidden">
        <div className="mx-auto max-w-2xl px-10 py-12">
          {known ? <ComponentPage slug={slug} /> : <OverviewPage />}
        </div>
      </main>
    </div>
  );
}
