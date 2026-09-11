import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { GameCard } from "@/components/bullpen/game-card";
import { leagueById } from "@/lib/sports/catalog";
import type { Game } from "@/lib/sports/types";

export function groupByLeague(games: Game[]) {
  const map = new Map<string, Game[]>();
  for (const g of games) {
    const list = map.get(g.leagueId) || [];
    list.push(g);
    map.set(g.leagueId, list);
  }
  return [...map.entries()].map(([id, rows]) => ({
    id,
    league: leagueById(id),
    games: rows.slice(0, 8),
  }));
}

export function LeagueStack({
  games,
  empty,
}: {
  games: Game[];
  empty: string;
}) {
  const groups = groupByLeague(games);
  if (!groups.length) {
    return (
      <div className="rounded-md bg-surface px-5 py-10 text-sm text-muted shadow-[0_0_0_1px_var(--color-line)]">
        {empty}
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <section key={group.id} className="overflow-hidden rounded-md bg-surface shadow-[0_0_0_1px_var(--color-line)]">
          <header className="flex items-center justify-between bg-fg px-4 py-2.5 text-bg">
            <Link
              to="/league/$leagueId"
              params={{ leagueId: group.id }}
              className="truncate font-cond text-lg uppercase tracking-wide hover:text-accent"
            >
              {group.league?.name || group.id}
            </Link>
            <span className="text-xs tabular-nums text-bg/70">{group.games.length}</span>
          </header>
          <div className="divide-y divide-line">
            {group.games.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function SideCard({ title, children, href, hrefLabel }: { title: string; children: ReactNode; href?: string; hrefLabel?: string }) {
  return (
    <section className="overflow-hidden rounded-md bg-surface shadow-[0_0_0_1px_var(--color-line)]">
      <header className="border-b border-line px-4 py-2.5">
        <h2 className="font-cond text-lg uppercase tracking-wide">{title}</h2>
      </header>
      <div className="px-4 py-2">{children}</div>
      {href ? (
        <p className="border-t border-line px-4 py-2 text-xs text-muted">
          <Link to={href as "/"} className="hover:text-fg">
            {hrefLabel}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
