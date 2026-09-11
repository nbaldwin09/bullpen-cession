import { Link } from "@tanstack/react-router";
import { LeanBar } from "@/components/bullpen/lean-bar";
import { awayOf, homeOf } from "@/lib/sports/lean";
import { isReallyLive } from "@/lib/sports/live";
import type { Game } from "@/lib/sports/types";
import { formatKick } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function GameCard({ game }: { game: Game }) {
  const away = awayOf(game);
  const home = homeOf(game);
  const live = isReallyLive(game);
  const status = live ? game.clock || "LIVE" : game.state === "post" ? "Final" : formatKick(game.date) || game.detail;
  return (
    <Link
      to="/game/$gameId"
      params={{ gameId: encodeURIComponent(game.id) }}
      search={{ league: game.leagueId }}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 transition-colors duration-150 hover:bg-surface-2",
        live && "bg-surface-2",
      )}
    >
      <span
        className={cn(
          "w-16 shrink-0 text-xs font-medium tabular-nums",
          live ? "text-live" : "text-muted",
        )}
      >
        {live ? (
          <span className="inline-flex items-center gap-1">
            <span className="live-dot" />
            {status}
          </span>
        ) : (
          status
        )}
      </span>
      <span className="min-w-0">
        <TeamRow team={away} live={live} pre={game.state === "pre"} />
        {home && home !== away ? <TeamRow team={home} live={live} pre={game.state === "pre"} /> : null}
        {game.state === "in" ? <LeanBar game={game} compact /> : null}
      </span>
    </Link>
  );
}

function TeamRow({
  team,
  live,
  pre,
}: {
  live?: boolean;
  pre?: boolean;
  team?: { name: string; abbr: string; score?: string; winner?: boolean; logo?: string; rank?: number };
}) {
  if (!team) return null;
  const score = pre || team.score == null || team.score === "" ? "" : team.score;
  return (
    <div className="flex items-center justify-between gap-3 py-0.5">
      <span className="flex min-w-0 items-center gap-2">
        {team.logo ? (
          <img src={team.logo} alt="" className="h-5 w-5 object-contain" crossOrigin="anonymous" />
        ) : (
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-xs bg-surface-2 font-cond text-[10px] uppercase text-muted">
            {(team.abbr || team.name).slice(0, 2)}
          </span>
        )}
        <span className={cn("truncate text-sm", team.winner && "font-medium")}>
          {team.rank ? <span className="mr-1 text-faint">#{team.rank}</span> : null}
          {team.name}
        </span>
      </span>
      <span className={cn("w-6 text-right font-cond text-lg tabular-nums leading-none", live && "text-fg")}>
        {score}
      </span>
    </div>
  );
}
