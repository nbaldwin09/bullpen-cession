import type { Game } from "./types";

export type Lean = {
  away: number;
  home: number;
  source: "espn" | "desk" | "final";
  label: string;
};

function sides(game: Game) {
  const away = game.competitors.find((c) => c.homeAway === "away") || game.competitors[0];
  const home = game.competitors.find((c) => c.homeAway === "home") || game.competitors[1] || away;
  return { away, home };
}

/** Honest lean — ESPN probability when published, otherwise score + home + clock. Never marketed as a market. */
export function deskLean(game: Game): Lean {
  const { away, home } = sides(game);

  if (game.predictor) {
    const h = Math.round(game.predictor.home);
    return {
      home: h,
      away: 100 - h,
      source: "espn",
      label: "ESPN win probability",
    };
  }

  if (game.state === "post") {
    if (home?.winner) return { home: 100, away: 0, source: "final", label: "Final" };
    if (away?.winner) return { home: 0, away: 100, source: "final", label: "Final" };
  }

  const as = Number(away?.score);
  const hs = Number(home?.score);
  if (!Number.isFinite(as) || !Number.isFinite(hs)) {
    return { home: 52, away: 48, source: "desk", label: "Pre-game lean" };
  }

  const sportK: Record<string, number> = {
    esports: 1.15,
    soccer: 0.9,
    hockey: 0.55,
    baseball: 0.5,
    basketball: 0.12,
    football: 0.28,
  };
  const k = sportK[game.sportId] ?? 0.35;
  const homeAdv = game.state === "pre" ? 0.2 : 0;
  const p = 1 / (1 + Math.exp(-k * (hs - as + homeAdv)));
  const homePct = Math.min(97, Math.max(3, Math.round(p * 100)));
  return {
    home: homePct,
    away: 100 - homePct,
    source: "desk",
    label: game.state === "in" ? "Live lean" : "Lean",
  };
}

export function awayOf(game: Game) {
  return game.competitors.find((c) => c.homeAway === "away") || game.competitors[0];
}

export function homeOf(game: Game) {
  return game.competitors.find((c) => c.homeAway === "home") || game.competitors[1] || game.competitors[0];
}
