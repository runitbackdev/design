import { ScrollArea } from "@runitbk/react";

export default function () {
  return (
    <ScrollArea.Root className="h-32 w-56 rounded-lg border border-line">
      <ScrollArea.Viewport className="p-3">
        <div className="flex flex-col gap-1 text-small text-sub">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>line {i + 1} — scrollable channel log</span>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
