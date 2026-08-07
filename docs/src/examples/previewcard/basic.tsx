import { Avatar, PreviewCard, TextLink } from "@runitbk/react";

export default function () {
  return (
    <PreviewCard.Root>
      <PreviewCard.Trigger render={<TextLink href="#" />}>@sam</PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner>
          <PreviewCard.Popup>
            <PreviewCard.Arrow />
            <div className="flex items-center gap-3">
              <Avatar initials="sm" />
              <div className="flex flex-col">
                <span className="text-small font-semibold text-ink">sam</span>
                <span className="text-caption text-link">● online</span>
              </div>
            </div>
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
}
