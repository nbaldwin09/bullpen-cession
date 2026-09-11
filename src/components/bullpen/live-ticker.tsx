import { Link } from "@tanstack/react-router";
import { awayOf, homeOf } from "@/lib/sports/lean";
import { isReallyLive } from "@/lib/sports/live";
import type { Game } from "@/lib/sports/types";
import { cn } from "@/lib/utils";

export function LiveTicker({ games }: { games: Game[] }) {
  const live = games.filter((g) => isReallyLive(g) && g.competitors.length > 1).slice(0, 16);
  if (!live.length) return null;
  return (
    <div className="bg-media text-on-media">
      <div className="flex items-stretch">
        <p className="flex shrink-0 items-center gap-2 border-r border-white/10 px-3 text-[11px] uppercase tracking-[0.16em] text-live">
          <span className="live-dot" />
          {live.length} live
        </p>
        <div className="flex min-w-0 flex-1 overflow-x-auto">
          {live.map((g) => {
            const away = awayOf(g);
            const home = homeOf(g);
            return (
              <Link
                key={g.id}
                to="/game/$gameId"
                params={{ gameId: encodeURIComponent(g.id) }}
                search={{ league: g.leagueId }}
                className="flex shrink-0 items-center gap-3 border-r border-white/10 px-4 py-2.5 hover:bg-white/5"
              >
                <span className="text-[10px] uppercase tracking-[0.14em] text-on-media-muted">
                  {g.event || g.leagueId}
                </span>
                <span className="font-cond text-sm uppercase tracking-wide">
                  {away?.abbr || away?.name}
                  <span className={cn("ml-1.5 tabular-nums", Number(away?.score) > Number(home?.score) && "text-accent")}>
                    {away?.score ?? "–"}
                  </span>
                </span>
                <span className="font-cond text-sm uppercase tracking-wide">
                  {home?.abbr || home?.name}
                  <span className={cn("ml-1.5 tabular-nums", Number(home?.score) > Number(away?.score) && "text-accent")}>
                    {home?.score ?? "–"}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
