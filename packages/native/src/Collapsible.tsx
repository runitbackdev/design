import * as CollapsiblePrimitive from "@rn-primitives/collapsible";

// Web only styles the panel's height animation, which has no native analog yet.
// Explicit wrappers rather than a namespace spread — the inferred spread type
// isn't portable (TS2883).
function Root(props: CollapsiblePrimitive.RootProps) {
  return <CollapsiblePrimitive.Root {...props} />;
}

function Trigger(props: CollapsiblePrimitive.TriggerProps) {
  return <CollapsiblePrimitive.Trigger {...props} />;
}

function Content(props: CollapsiblePrimitive.ContentProps) {
  return <CollapsiblePrimitive.Content {...props} />;
}

export const Collapsible = { Root, Trigger, Content };
