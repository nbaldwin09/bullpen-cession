import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/bullpen/page";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Bullpen Cession" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Page title="Terms of use" lead="Last updated September 11, 2026">
      <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
        <p>
          Bullpen Cession is a sports analytics and research company operated with Aorila. We provide a public desk
          (search and live boards), operator dashboards, and — by written agreement — financial and infrastructure security
          for licensed sportsbooks, virtual and brick-and-mortar. We are not a sportsbook. Nothing here is an offer to bet,
          trade, or wager.
        </p>
        <p>
          A desk opened with an email is a research credential, not a license to resell our data. API keys are for that
          desk. Do not scrape, wrap, or white-label the product without a contract.
        </p>
        <p>
          Scores come from public league feeds. Official streams are embedded from the rights holder. We do not host pirate
          feeds. Live data can be late or wrong. Check the league if a call matters.
        </p>
        <p>
          Sportsbook advertisements on the front page are paid or affiliate placements. They are not our book. 21+ where
          required. Gambling problem: 1-800-GAMBLER.
        </p>
        <p>
          Operator security work is scoped in a separate statement of work. Until that is signed, the public site and the
          desk are provided as-is.
        </p>
        <p>
          These terms are governed by the laws of the State of South Carolina. Desk:{" "}
          <a href="mailto:desk@bullpencession.com" className="text-fg underline decoration-accent underline-offset-4">
            desk@bullpencession.com
          </a>
          .
        </p>
      </div>
    </Page>
  );
}
