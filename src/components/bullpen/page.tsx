import type { ReactNode } from "react";
import { MarketCard } from "@/components/bullpen/market-card";
import type { Game } from "@/lib/sports/types";

export function Page({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 pb-16 lg:px-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        {lead ? <p className="mt-1 text-sm text-muted">{lead}</p> : null}
      </header>
      {children}
    </main>
  );
}

export function BoardGrid({ games, empty }: { games: Game[]; empty: string }) {
  if (!games.length) return <p className="py-8 text-sm text-muted">{empty}</p>;
  return (
    <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-line">
      {games.map((g) => (
        <MarketCard key={g.id} game={g} />
      ))}
    </div>
  );
}

export const SPORT_TABS = [
  { id: "all", label: "All" },
  { id: "nfl", label: "NFL" },
  { id: "ncaaf", label: "CFB" },
  { id: "nba", label: "NBA" },
  { id: "nhl", label: "NHL" },
  { id: "mlb", label: "MLB" },
  { id: "soccer", label: "Soccer" },
  { id: "esports", label: "Esports" },
];

export function SportTabs({ value, onChange }: { value: string; onChange: (id: string) => void }) {
  return (
    <div className="mb-4 flex h-12 items-center gap-1 overflow-x-auto">
      {SPORT_TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={
            value === t.id
              ? "inline-flex h-9 shrink-0 items-center rounded-md bg-fg px-2.5 text-sm font-semibold tracking-tight text-bg"
              : "inline-flex h-9 shrink-0 items-center rounded-md px-2.5 text-sm font-medium tracking-tight text-muted hover:text-fg"
          }
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function filterTab(games: Game[], tab: string) {
  if (tab === "all") return games;
  if (tab === "soccer") return games.filter((g) => g.sportId === "soccer");
  if (tab === "esports") return games.filter((g) => g.sportId === "esports");
  return games.filter((g) => g.leagueId === tab);
}

export function boardGames(games: Game[]) {
  return games.filter((g) => g.source !== "official-twitch" && g.competitors.length > 1);
}
