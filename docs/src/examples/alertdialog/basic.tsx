import { AlertDialog, Button } from "@runitbk/react";

export default function () {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger render={<Button variant="ghost-danger" size="sm" />}>
        Leave server
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Title>Leave Run It Back?</AlertDialog.Title>
          <AlertDialog.Description>
            You&apos;ll need a fresh invite to rejoin. Your messages stay.
          </AlertDialog.Description>
          <div className="flex justify-end gap-2">
            <AlertDialog.Close render={<Button variant="ghost" />}>Cancel</AlertDialog.Close>
            <AlertDialog.Close render={<Button variant="danger" />}>Leave</AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
