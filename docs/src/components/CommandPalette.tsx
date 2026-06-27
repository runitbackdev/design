import { useEffect, useState } from "react";
import { Command, Search } from "lucide-react";
import { useHotkey } from "@tanstack/react-hotkeys";
import { Autocomplete, Dialog, Kbd } from "@runitback/react";
import { type PaletteItem, paletteItems } from "../meta";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  useHotkey("Mod+K", () => setOpen((o) => !o));

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        render={
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-small text-sub transition-colors duration-fast ease-base hover:border-soft-border"
          />
        }
      >
        <Search className="size-4" />
        <span>Search…</span>
        <span className="ml-auto flex items-center gap-1">
          <Kbd>
            <Command className="inline-block size-3 align-middle" />
          </Kbd>
          <Kbd>K</Kbd>
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup className="top-24 max-w-xl translate-y-0 overflow-hidden p-0">
          <Autocomplete.Root items={paletteItems} itemToStringValue={(i: PaletteItem) => i.title}>
            <Autocomplete.Input
              autoFocus
              placeholder="Search components…"
              className="rounded-none border-0 border-b border-line px-4 py-3 text-body focus:ring-0"
            />
            <Autocomplete.Empty>No components match.</Autocomplete.Empty>
            <Autocomplete.List className="p-2">
              {(item: PaletteItem) => (
                <Autocomplete.Item key={item.slug} value={item} render={<a href={`#/${item.slug}`} />}>
                  <span>{item.title}</span>
                  <span className="text-caption text-faint">{item.group}</span>
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Root>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
