import { Button, Dialog } from "@runitback/react";

export default function () {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="ghost-danger" />}>Delete project</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Delete project?</Dialog.Title>
          <Dialog.Description>
            This permanently removes runitback-web and all its deploys. This cannot be undone.
          </Dialog.Description>
          <div className="flex justify-end gap-2">
            <Dialog.Close render={<Button variant="ghost" />}>Cancel</Dialog.Close>
            <Dialog.Close render={<Button variant="danger" />}>Delete</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
