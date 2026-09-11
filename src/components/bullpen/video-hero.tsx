import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { StreamPlayer } from "@/components/bullpen/stream-player";
import type { Game } from "@/lib/sports/types";
import { streamUrlFor } from "@/lib/sports/watch";
import { cn } from "@/lib/utils";

export function VideoHero({ streams }: { streams: Game[] }) {
  const [active, setActive] = useState(0);
  const current = streams[active] || streams[0];

  if (!current) {
    return (
      <section className="bg-media text-on-media">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Official Twitch</p>
          <h1 className="mt-3 font-cond text-5xl uppercase leading-[0.92] tracking-wide sm:text-7xl">
            No official streams live
          </h1>
          <p className="mt-4 max-w-xl text-sm text-on-media-muted sm:text-base">
            BLAST, ESL, PGL, and Riot appear here when they go on. We do not play generated video.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/esports"
              className="inline-flex h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              Esports
            </Link>
            <Link
              to="/schedule"
              className="inline-flex h-11 items-center px-4 text-sm text-on-media shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-on-media)_28%,transparent)]"
            >
              Schedule
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-media text-on-media">
      <div className="mx-auto max-w-6xl">
        <h1 className="sr-only">{current.name}</h1>
        <StreamPlayer url={streamUrlFor(current)} autoPlay title="" className="w-full" />
      </div>
      <div className="border-t border-line/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-3">
          <p className="mr-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-live">
            <span className="live-dot" />
            Official Twitch
          </p>
          {streams.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "inline-flex h-9 items-center px-3 text-xs uppercase tracking-[0.14em]",
                i === active ? "bg-accent text-accent-fg" : "text-on-media-muted hover:text-on-media",
              )}
            >
              {g.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
