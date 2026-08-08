import { useRef } from "react";
import { Button, Toast } from "@runitbk/react";

function Trigger() {
  const manager = Toast.useToastManager();
  const n = useRef(0);
  return (
    <Button
      variant="secondary"
      onClick={() => {
        n.current += 1;
        manager.add({ title: `Deployed #${n.current}`, description: "runitback-web is live in us-east." });
      }}
    >
      Show toast
    </Button>
  );
}

function List() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast}>
      <Toast.Content>
        <div className="flex flex-col gap-0.5">
          <Toast.Title />
          <Toast.Description />
        </div>
        <Toast.Close className="ml-auto cursor-pointer text-bg/60 hover:text-bg">✕</Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

export default function () {
  return (
    <Toast.Provider>
      <Trigger />
      <Toast.Portal>
        <Toast.Viewport>
          <List />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}
