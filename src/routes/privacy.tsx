import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/bullpen/page";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Bullpen Cession" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Page title="Privacy" lead="Last updated September 11, 2026">
      <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
        <p>You do not need an account to read the public desk. We do not sell personal information. We do not run a wallet.</p>
        <p>
          If you open a desk, we store the email, a generated organization label, an API key, and the time it was issued.
          That record is how the dashboard knows who you are on this browser, and how we contact operators.
        </p>
        <p>
          Search queries that hit the API are the string you typed. Vercel hosts the site and may see path, referrer,
          country, and device. Affiliate ads on the front page are third-party; their terms apply if you click through.
        </p>
        <p>Embedded Twitch and YouTube players are third-party. Their cookies apply once you press play.</p>
        <p>
          Questions:{" "}
          <a href="mailto:desk@bullpencession.com" className="text-fg underline decoration-accent underline-offset-4">
            desk@bullpencession.com
          </a>
          .
        </p>
      </div>
    </Page>
  );
}
