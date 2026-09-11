import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/bullpen/page";
import { LEAGUES, SPORTS, leaguesForSport } from "@/lib/sports/catalog";

export const Route = createFileRoute("/sports/")({
  head: () => ({ meta: [{ title: "Sports — Bullpen Cession" }] }),
  component: SportsPage,
});

function SportsPage() {
  return (
    <Page title="Sports" lead={`${LEAGUES.length} leagues. Live scores where the league publishes them.`}>
      <div className="space-y-10">
        {SPORTS.map((s) => (
          <section key={s.id}>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 className="text-sm font-semibold tracking-tight">{s.name}</h2>
              <Link to="/sports/$sportId" params={{ sportId: s.id }} className="text-sm text-muted hover:text-fg">
                View
              </Link>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {leaguesForSport(s.id).map((l) => (
                <Link
                  key={l.id}
                  to="/league/$leagueId"
                  params={{ leagueId: l.id }}
                  className="flex items-center justify-between rounded-md px-4 py-3 shadow-[0_0_0_1px_var(--color-line)] hover:bg-surface-2"
                >
                  <span>
                    <span className="block text-sm font-medium">{l.name}</span>
                    <span className="text-xs text-faint">{l.region}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Page>
  );
}
