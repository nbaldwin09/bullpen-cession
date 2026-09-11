import { Link } from "@tanstack/react-router";
import { awayOf, homeOf } from "@/lib/sports/lean";
import { isReallyLive } from "@/lib/sports/live";
import { leagueById } from "@/lib/sports/catalog";
import type { Game } from "@/lib/sports/types";
import { formatKick } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function MarketCard({ game }: { game: Game }) {
  const away = awayOf(game);
  const home = homeOf(game);
  const live = isReallyLive(game);
  const league = leagueById(game.leagueId);
  const status = live ? game.clock || "Live" : game.state === "post" ? "Final" : formatKick(game.date) || "Scheduled";
  return (
    <Link
      to="/game/$gameId"
      params={{ gameId: encodeURIComponent(game.id) }}
      search={{ league: game.leagueId }}
      className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line px-4 py-3 last:border-b-0 hover:bg-surface-2"
    >
      <span className="min-w-0">
        <TeamLine team={away} pre={game.state === "pre"} />
        <TeamLine team={home} pre={game.state === "pre"} />
      </span>
      <span className="text-right">
        <span className={cn("block text-xs tabular-nums", live ? "font-medium text-live" : "text-muted")}>
          {live ? "Live" : status}
        </span>
        <span className="mt-1 block text-xs text-faint">{league?.short || game.leagueId}</span>
      </span>
    </Link>
  );
}

function TeamLine({
  team,
  pre,
}: {
  pre: boolean;
  team?: { name: string; score?: string; logo?: string; rank?: number };
}) {
  if (!team) return null;
  const score = pre || team.score == null || team.score === "" ? "" : team.score;
  return (
    <span className="flex items-center justify-between gap-3 py-0.5">
      <span className="flex min-w-0 items-center gap-2">
        {team.logo ? (
          <img src={team.logo} alt="" className="h-5 w-5 object-contain" crossOrigin="anonymous" />
        ) : (
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-xs bg-surface-2 text-[10px] font-semibold text-muted">
            {team.name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className="truncate text-sm font-medium tracking-tight">
          {team.rank ? <span className="mr-1 text-faint">#{team.rank}</span> : null}
          {team.name}
        </span>
      </span>
      <span className="min-w-6 text-right text-sm font-semibold tabular-nums">{score}</span>
    </span>
  );
}
