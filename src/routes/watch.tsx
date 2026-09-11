import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { StreamPlayer } from "@/components/bullpen/stream-player";
import { getWorldBoard } from "@/lib/sports/api";
import { uniqueLiveTwitch } from "@/lib/sports/live";
import { streamUrlFor } from "@/lib/sports/watch";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/watch")({
  head: () => ({ meta: [{ title: "Watch — Bullpen Cession" }] }),
  component: WatchPage,
});

function WatchPage() {
  const board = useQuery({
    queryKey: ["world"],
    queryFn: () => getWorldBoard({ data: {} }),
    refetchInterval: 20_000,
  });
  const desks = uniqueLiveTwitch(board.data?.games || []);
  const [activeId, setActiveId] = useState<string>();
  const current = desks.find((g) => g.id === activeId) || desks[0];

  return (
    <main>
      <div className="bg-media text-on-media">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-6">
          <h1 className="text-lg font-semibold tracking-tight">Watch</h1>
          <p className="mt-1 text-sm text-on-media-muted">Official Twitch only.</p>
        </div>
        {current ? (
          <StreamPlayer url={streamUrlFor(current)} title={current.name} autoPlay className="mx-auto max-w-7xl" />
        ) : (
          <div className="mx-auto max-w-7xl px-4 pb-16 text-sm text-on-media-muted lg:px-6">
            No official streams live right now.
          </div>
        )}
      </div>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <h2 className="mb-3 text-sm font-semibold tracking-tight">On now</h2>
        {desks.length === 0 ? (
          <p className="text-sm text-muted">BLAST, ESL, PGL, and Riot appear here when they go live.</p>
        ) : (
          <ul className="divide-y divide-line border-y border-line">
            {desks.map((g) => (
              <li key={g.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(g.id)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 py-4 text-left",
                    current?.id === g.id && "font-medium",
                  )}
                >
                  <span>
                    <span className="block text-sm">{g.name}</span>
                    <span className="text-xs text-muted">twitch.tv/{g.twitch}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs text-live">
                    <span className="live-dot" />
                    Live
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
