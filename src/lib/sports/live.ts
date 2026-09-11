import type { Game } from "./types";

const DONE = /\bft\b|\bfinal\b|\bended\b|\baot\b|\bfull time\b|\bmatch finished\b|\bpost\b/;

export function isReallyLive(game: Game): boolean {
  if (game.state !== "in") return false;
  const d = `${game.detail} ${game.clock || ""}`.toLowerCase();
  return !DONE.test(d);
}

export function uniqueLiveTwitch(games: Game[]): Game[] {
  const seen = new Set<string>();
  const official = games.filter((g) => g.source === "official-twitch" && isReallyLive(g) && g.twitch);
  const rest = games.filter((g) => g.source !== "official-twitch" && isReallyLive(g) && g.twitch);
  const out: Game[] = [];
  for (const g of [...official, ...rest]) {
    const key = g.twitch!.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(g);
  }
  return out;
}
