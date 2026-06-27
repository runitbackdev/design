import { type ComponentType, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button, Card } from "@runitback/react";

type Props = { of: ComponentType; source: string; html: string };

export function Example({ of: Demo, source, html }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(source.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex min-h-40 items-center justify-center p-8">
        <Demo />
      </div>
      <div className="relative border-t border-line bg-sunken">
        <Button
          variant="ghost"
          size="sm"
          aria-label="Copy code"
          className="absolute top-2 right-2 z-10"
          onClick={copy}
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </Button>
        <div
          className="overflow-x-auto p-4 font-mono text-caption"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Card>
  );
}
