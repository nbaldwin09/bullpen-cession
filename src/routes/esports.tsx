import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BoardGrid, Page, boardGames } from "@/components/bullpen/page";
import { getWorldBoard } from "@/lib/sports/api";

export const Route = createFileRoute("/esports")({
  head: () => ({ meta: [{ title: "Esports — Bullpen Cession" }] }),
  component: EsportsPage,
});

function EsportsPage() {
  const board = useQuery({
    queryKey: ["world"],
    queryFn: () => getWorldBoard({ data: {} }),
    refetchInterval: 20_000,
  });
  const games = boardGames(board.data?.games || []).filter((g) => g.sportId === "esports");

  return (
    <Page title="Esports" lead="Official tournament matches. Streams open on the game page.">
      {board.isLoading ? (
        <p className="text-sm text-muted">Loading scores…</p>
      ) : (
        <BoardGrid games={games} empty="No matches on the board yet." />
      )}
    </Page>
  );
}
