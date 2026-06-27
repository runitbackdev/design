import { Page } from "../components/Page";

export function OverviewPage() {
  return (
    <Page
      title="run it back"
      intro="Software should be boring. Nothing here is decorative; everything has a job. The design system for Run It Back."
    >
      <p className="max-w-prose text-body text-sub">
        These docs are built from the components they document. Every example on a
        page renders the real component beside the exact source that produced it.
      </p>
      <p className="max-w-prose text-body text-sub">
        Pick a component from the sidebar to see it in use.
      </p>
    </Page>
  );
}
