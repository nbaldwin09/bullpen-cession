import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BoardGrid, Page, boardGames } from "@/components/bullpen/page";
import { getBoard } from "@/lib/sports/api";
import { leagueById } from "@/lib/sports/catalog";
import { todayStamp } from "@/lib/utils";

export const Route = createFileRoute("/league/$leagueId")({
  component: LeaguePage,
});

function LeaguePage() {
  const { leagueId } = Route.useParams();
  const league = leagueById(leagueId);
  const [date, setDate] = useState(todayStamp());
  const board = useQuery({
    queryKey: ["league", leagueId, date],
    queryFn: () => getBoard({ data: { leagueId, date } }),
    refetchInterval: 30_000,
  });

  if (!league) {
    return (
      <Page title="League not found">
        <p className="text-sm text-muted">That league is not on the desk.</p>
      </Page>
    );
  }

  const games = boardGames(board.data?.games || []);

  return (
    <Page title={league.name} lead={`${league.region} · ${league.sportId}`}>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-10 rounded-md bg-surface-2 px-3 text-sm outline-none"
        />
        <a href={league.official} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-fg">
          Official site
        </a>
      </div>
      {board.isLoading ? <p className="text-sm text-muted">Loading scores…</p> : <BoardGrid games={games} empty="No games on this date." />}
    </Page>
  );
}
