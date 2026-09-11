import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/bullpen/page";
import { leaguesForSport, sportById } from "@/lib/sports/catalog";

export const Route = createFileRoute("/sports/$sportId")({ component: SportPage });

function SportPage() {
  const { sportId } = Route.useParams();
  const sport = sportById(sportId);
  const leagues = leaguesForSport(sportId);
  if (!sport) {
    return (
      <Page title="Unknown sport">
        <p className="text-sm text-muted">That sport is not on the desk.</p>
      </Page>
    );
  }
  return (
    <Page title={sport.name} lead={sport.blurb}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {leagues.map((l) => (
          <Link
            key={l.id}
            to="/league/$leagueId"
            params={{ leagueId: l.id }}
            className="rounded-md p-4 shadow-[0_0_0_1px_var(--color-line)] hover:bg-surface-2"
          >
            <p className="text-sm font-semibold tracking-tight">{l.name}</p>
            <p className="mt-1 text-xs text-muted">{l.region}</p>
          </Link>
        ))}
      </div>
    </Page>
  );
}
