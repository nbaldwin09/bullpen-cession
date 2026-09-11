import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BoardGrid } from "@/components/bullpen/page";
import { LeanBar } from "@/components/bullpen/lean-bar";
import { StreamPlayer } from "@/components/bullpen/stream-player";
import { awayOf, deskLean, homeOf } from "@/lib/sports/lean";
import { getBoard, getWorldBoard } from "@/lib/sports/api";
import { leagueById } from "@/lib/sports/catalog";
import { isReallyLive } from "@/lib/sports/live";
import { streamUrlFor } from "@/lib/sports/watch";
import { formatClock } from "@/lib/utils";

type Search = { league?: string };

export const Route = createFileRoute("/game/$gameId")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    league: typeof raw.league === "string" ? raw.league : "nfl",
  }),
  component: GamePage,
});

function GamePage() {
  const { gameId } = Route.useParams();
  const { league } = Route.useSearch();
  const id = decodeURIComponent(gameId);
  const board = useQuery({
    queryKey: ["league", league],
    queryFn: () => getBoard({ data: { leagueId: league || "nfl" } }),
    refetchInterval: 15_000,
  });
  const world = useQuery({
    queryKey: ["world"],
    queryFn: () => getWorldBoard({ data: {} }),
    refetchInterval: 30_000,
  });
  const game = board.data?.games.find((g) => g.id === id) || world.data?.games.find((g) => g.id === id);
  const meta = leagueById(league || game?.leagueId || "");
  const related = (board.data?.games || world.data?.games || [])
    .filter((g) => g.id !== id && g.leagueId === (game?.leagueId || league) && g.source !== "official-twitch" && g.competitors.length > 1)
    .slice(0, 8);

  if (!game) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h1 className="text-lg font-semibold tracking-tight">Match not found</h1>
        <p className="mt-2 text-sm text-muted">This game is no longer on the board.</p>
        <Link to="/schedule" className="mt-6 inline-block text-sm underline decoration-accent underline-offset-4">
          Back to schedule
        </Link>
      </main>
    );
  }

  const away = awayOf(game);
  const home = homeOf(game);
  const stream = streamUrlFor(game);
  const embed = Boolean(game.twitch || game.youtube);
  const lean = deskLean(game);
  const live = isReallyLive(game);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <p className="text-xs text-muted">
        {live ? "Live · " : ""}
        {meta?.short || game.leagueId}
        {game.detail ? ` · ${game.detail}` : ""}
        {game.date ? ` · ${formatClock(game.date)}` : ""}
      </p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">{game.name}</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <div className="rounded-md p-5 shadow-[0_0_0_1px_var(--color-line)]">
            <Score team={away} />
            {home && home !== away ? <Score team={home} /> : null}
            <LeanBar game={game} />
            <p className="mt-3 text-xs text-faint">
              {lean.label}
              {lean.source === "desk" ? " — from the score, home side, and clock." : " — published with the live feed."}
            </p>
            {game.maps?.length ? (
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {game.maps.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between py-2.5 text-sm">
                    <span>{m.name}</span>
                    <span className="tabular-nums">
                      {m.away} – {m.home}
                    </span>
                  </li>
                ))}
              </ol>
            ) : null}
            {game.venue ? <p className="mt-6 text-sm text-muted">{game.venue}</p> : null}
            {game.situation ? <p className="mt-2 text-sm text-muted">{game.situation}</p> : null}
            {game.broadcasts.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {game.broadcasts.map((b) => (
                  <a
                    key={b.name}
                    href={b.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center rounded-md px-3 text-sm shadow-[0_0_0_1px_var(--color-line)] hover:bg-surface-2"
                  >
                    {b.name}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {related.length ? (
            <div className="mt-10">
              <h2 className="mb-3 text-sm font-semibold tracking-tight">Other games</h2>
              <BoardGrid games={related} empty="" />
            </div>
          ) : null}
        </div>
        {embed ? (
          <StreamPlayer url={stream} title={game.twitch ? `twitch.tv/${game.twitch}` : "Official stream"} autoPlay={live} />
        ) : (
          <div className="flex min-h-64 flex-col justify-end rounded-md bg-media px-6 py-8 text-on-media">
            <p className="text-sm text-on-media-muted">
              {game.broadcasts[0]?.name
                ? `On ${game.broadcasts[0].name}. Official Twitch and YouTube only.`
                : "No official stream on this match."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

function Score({ team }: { team?: { name: string; abbr: string; score?: string; record?: string; rank?: number; logo?: string } }) {
  if (!team) return null;
  return (
    <div className="flex items-center justify-between border-b border-line py-4">
      <div className="flex min-w-0 items-center gap-3">
        {team.logo ? <img src={team.logo} alt="" className="h-8 w-8 object-contain" crossOrigin="anonymous" /> : null}
        <div>
          <p className="text-lg font-semibold tracking-tight">
            {team.rank ? <span className="mr-2 text-sm text-faint">#{team.rank}</span> : null}
            {team.name}
          </p>
          {team.record ? <p className="text-xs text-muted">{team.record}</p> : null}
        </div>
      </div>
      <p className="text-3xl font-semibold tabular-nums leading-none">{team.score ?? ""}</p>
    </div>
  );
}
