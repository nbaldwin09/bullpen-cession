import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BoardGrid, Page, SportTabs, boardGames, filterTab } from "@/components/bullpen/page";
import { getWorldBoard } from "@/lib/sports/api";
import { todayStamp } from "@/lib/utils";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [{ title: "Schedule — Bullpen Cession" }] }),
  component: SchedulePage,
});

function SchedulePage() {
  const [date, setDate] = useState(todayStamp());
  const [tab, setTab] = useState("all");
  const board = useQuery({
    queryKey: ["world", date],
    queryFn: () => getWorldBoard({ data: { date } }),
    refetchInterval: 45_000,
  });
  const games = filterTab(boardGames(board.data?.games || []), tab);

  return (
    <Page title="Schedule" lead="Pick a day, then a sport.">
      <div className="mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-10 rounded-md bg-surface-2 px-3 text-sm text-fg outline-none"
        />
      </div>
      <SportTabs value={tab} onChange={setTab} />
      {board.isLoading ? <p className="text-sm text-muted">Loading scores…</p> : <BoardGrid games={games} empty="No games on this day." />}
    </Page>
  );
}
