import { Command } from "lucide-react";
import { Kbd } from "@runitbk/react";

export default function () {
  return (
    <p className="text-body text-sub">
      Press{" "}
      <Kbd>
        <Command className="inline-block size-3 align-middle" />
      </Kbd>{" "}
      <Kbd>K</Kbd> to search.
    </p>
  );
}
