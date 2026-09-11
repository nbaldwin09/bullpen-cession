import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/bullpen/page";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Bullpen Cession" }] }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <Page title="Careers" lead="Bullpen Cession is a live-scores desk. We hire when a seat is empty.">
      <p className="max-w-xl text-sm text-muted">
        There are no public openings today. If you already work live sports or official tournament feeds, write{" "}
        <a href="mailto:careers@bullpencession.com" className="text-fg underline decoration-accent underline-offset-4">
          careers@bullpencession.com
        </a>
        .
      </p>
    </Page>
  );
}
