import type { Board, Competitor, Game, GameState, Headline } from "./types";

export type OfficialDesk = {
  id: string;
  leagueId: string;
  titleId: string;
  name: string;
  twitch: string;
  keywords: string[];
};

/** Tournament organizers only — never talent / viewer streams. */
export const OFFICIAL_DESKS: OfficialDesk[] = [
  { id: "blast", leagueId: "blast", titleId: "cs", name: "BLAST Premier", twitch: "blastpremier", keywords: ["blast"] },
  { id: "esl", leagueId: "esl", titleId: "cs", name: "ESL Counter-Strike", twitch: "eslcs", keywords: ["esl", "iem", "intel extreme"] },
  { id: "pgl", leagueId: "pgl", titleId: "cs", name: "PGL", twitch: "pgl_cs2", keywords: ["pgl", "major"] },
  { id: "faceit", leagueId: "cs", titleId: "cs", name: "FACEIT", twitch: "faceittv", keywords: ["faceit"] },
  { id: "lol", leagueId: "lol", titleId: "lol", name: "League of Legends", twitch: "riotgames", keywords: ["worlds", "msi", "lolesports"] },
  { id: "lck", leagueId: "lck", titleId: "lol", name: "LCK", twitch: "lck", keywords: ["lck"] },
  { id: "lec", leagueId: "lec", titleId: "lol", name: "LEC", twitch: "lec", keywords: ["lec"] },
  { id: "lcs", leagueId: "lol", titleId: "lol", name: "LCS", twitch: "lcs", keywords: ["lcs"] },
  { id: "valorant", leagueId: "valorant", titleId: "valorant", name: "VCT", twitch: "valorant", keywords: ["vct", "valorant"] },
  { id: "dota", leagueId: "dota", titleId: "dota", name: "Dota 2", twitch: "dota2ti", keywords: ["dota", "international", "dreamleague"] },
  { id: "rl", leagueId: "rl", titleId: "rl", name: "Rocket League", twitch: "rocketleague", keywords: ["rlcs", "rocket league"] },
  { id: "r6", leagueId: "r6", titleId: "r6", name: "Rainbow Six", twitch: "rainbow6", keywords: ["siege", "rainbow"] },
];

const PREVIEW_LIVE_BYTES = 8000;
const LIVE_TTL_MS = 60_000;
const liveCache = new Map<string, { live: boolean; at: number }>();

export function deskForEvent(event: string, leagueId?: string): OfficialDesk {
  const n = `${event} ${leagueId || ""}`.toLowerCase();
  const hit = OFFICIAL_DESKS.find((d) => d.keywords.some((k) => n.includes(k)));
  if (hit) return hit;
  if (leagueId) {
    const byLeague = OFFICIAL_DESKS.find((d) => d.leagueId === leagueId);
    if (byLeague) return byLeague;
  }
  return OFFICIAL_DESKS[1];
}

export async function isTwitchLive(channel: string): Promise<boolean> {
  const key = channel.toLowerCase();
  const cached = liveCache.get(key);
  if (cached && Date.now() - cached.at < LIVE_TTL_MS) return cached.live;
  const url = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${key}-440x248.jpg`;
  try {
    const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(2500) });
    if (!res.ok) {
      liveCache.set(key, { live: false, at: Date.now() });
      return false;
    }
    const buf = await res.arrayBuffer();
    const live = buf.byteLength > PREVIEW_LIVE_BYTES;
    liveCache.set(key, { live, at: Date.now() });
    return live;
  } catch {
    liveCache.set(key, { live: cached?.live ?? false, at: Date.now() });
    return cached?.live ?? false;
  }
}

export async function liveOfficialDesks(): Promise<OfficialDesk[]> {
  const live: OfficialDesk[] = [];
  for (let i = 0; i < OFFICIAL_DESKS.length; i += 3) {
    const chunk = OFFICIAL_DESKS.slice(i, i + 3);
    const flags = await Promise.all(chunk.map((d) => isTwitchLive(d.twitch)));
    chunk.forEach((d, j) => {
      if (flags[j]) live.push(d);
    });
  }
  return live;
}

function team(name: string, side: "home" | "away", score?: string, winner?: boolean, rank?: number): Competitor {
  return {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    name,
    abbr: name.replace(/[^A-Za-z0-9]/g, "").slice(0, 4).toUpperCase() || name.slice(0, 3).toUpperCase(),
    homeAway: side,
    score,
    winner,
    rank,
  };
}

function twitchBroadcast(channel: string): { name: string; href: string } {
  return { name: "Official Twitch", href: `https://www.twitch.tv/${channel}` };
}

export function deskAsGame(desk: OfficialDesk, live: boolean): Game {
  return {
    id: `desk-${desk.id}`,
    leagueId: desk.leagueId,
    sportId: "esports",
    name: desk.name,
    shortName: desk.name,
    date: new Date().toISOString(),
    state: live ? "in" : "pre",
    detail: live ? "Live" : "Offline",
    venue: "Twitch",
    competitors: [team("Official stream", "home")],
    broadcasts: [twitchBroadcast(desk.twitch)],
    watchHref: `https://www.twitch.tv/${desk.twitch}`,
    twitch: desk.twitch,
    event: desk.name,
    source: "official-twitch",
  };
}

type CsMatch = {
  id: number;
  date?: string;
  event?: string;
  best_of?: number;
  winner?: { id?: number; name?: string };
  team1?: { name?: string; score?: number; rank?: number };
  team2?: { name?: string; score?: number; rank?: number };
  maps?: Array<{ name?: string; team1_score?: number; team2_score?: number }>;
};

function csState(m: CsMatch, today: string): GameState {
  const day = String(m.date || "").slice(0, 10);
  if (day > today) return "pre";
  if (day === today && !m.winner) return "in";
  if (day === today && m.winner) return "post";
  return "post";
}

export async function loadCsMatches(): Promise<Game[]> {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const res = await fetch("https://api.csapi.de/matches/latest", {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const rows = (await res.json()) as CsMatch[];
    return (Array.isArray(rows) ? rows : []).slice(0, 24).map((m) => {
      const event = String(m.event || "Counter-Strike");
      const desk = deskForEvent(event, "cs");
      const t1 = String(m.team1?.name || "Team");
      const t2 = String(m.team2?.name || "Team");
      const s1 = m.team1?.score != null ? String(m.team1.score) : undefined;
      const s2 = m.team2?.score != null ? String(m.team2.score) : undefined;
      const state = csState(m, today);
      const winnerName = m.winner?.name;
      const maps = (m.maps || [])
        .filter((row) => row.name)
        .map((row) => ({
          name: String(row.name),
          away: row.team1_score != null ? String(row.team1_score) : "–",
          home: row.team2_score != null ? String(row.team2_score) : "–",
        }));
      return {
        id: `cs-${m.id}`,
        leagueId: desk.leagueId,
        sportId: "esports",
        name: `${t1} vs ${t2}`,
        shortName: `${t1} vs ${t2}`,
        date: m.date ? `${m.date}T16:00:00Z` : new Date().toISOString(),
        state,
        detail: state === "in" ? `BO${m.best_of || 3} · live` : `BO${m.best_of || 3} · ${event}`,
        venue: event,
        event,
        bestOf: m.best_of,
        maps,
        competitors: [
          team(t1, "away", s1, winnerName === t1, m.team1?.rank),
          team(t2, "home", s2, winnerName === t2, m.team2?.rank),
        ],
        broadcasts: [twitchBroadcast(desk.twitch)],
        watchHref: `https://www.twitch.tv/${desk.twitch}`,
        twitch: desk.twitch,
        source: "csapi",
      } satisfies Game;
    });
  } catch {
    return [];
  }
}

export async function loadCsRankings(): Promise<Headline[]> {
  try {
    const res = await fetch("https://api.csapi.de/rankings", { headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const payload = (await res.json()) as {
      date?: string;
      rankings?: Array<{ name?: string; rank?: number; points?: number }>;
    };
    return (payload.rankings || []).slice(0, 10).map((r) => ({
      id: `rank-${r.rank}-${r.name}`,
      headline: `#${r.rank} ${r.name} · ${r.points} pts`,
      href: "https://www.hltv.org/ranking/teams",
      published: payload.date || "",
    }));
  } catch {
    return [];
  }
}

export async function loadEsportsBoard(leagueId = "cs"): Promise<Board> {
  const [live, matches, rankings] = await Promise.all([
    liveOfficialDesks(),
    loadCsMatches(),
    leagueId === "cs" || leagueId === "blast" || leagueId === "esl" || leagueId === "pgl" || leagueId === "esports"
      ? loadCsRankings()
      : Promise.resolve([] as Headline[]),
  ]);

  const liveFor = live.filter((d) => {
    if (leagueId === "esports" || leagueId === "cs") return d.titleId === "cs" || leagueId === "esports";
    return d.leagueId === leagueId || d.titleId === leagueId;
  });

  const matchFor = matches.filter((g) => {
    if (leagueId === "esports") return true;
    if (leagueId === "cs") return g.sportId === "esports" && ["cs", "blast", "esl", "pgl"].includes(g.leagueId);
    return g.leagueId === leagueId;
  });

  const deskGames = liveFor.map((d) => deskAsGame(d, true));
  const seen = new Set<string>();
  const games: Game[] = [];
  for (const g of [...deskGames, ...matchFor]) {
    if (seen.has(g.id)) continue;
    seen.add(g.id);
    games.push(g);
  }

  if (!games.length) {
    const fallback = OFFICIAL_DESKS.filter((d) =>
      leagueId === "esports" || leagueId === "cs" ? d.titleId === "cs" || leagueId === "esports" : d.leagueId === leagueId,
    ).slice(0, 3);
    for (const d of fallback) games.push(deskAsGame(d, false));
  }

  games.sort((a, b) => {
    const rank = (s: GameState) => (s === "in" ? 0 : s === "pre" ? 1 : 2);
    return rank(a.state) - rank(b.state);
  });

  return { leagueId, asOf: new Date().toISOString(), games, headlines: rankings };
}

export function featuredDesk(live: OfficialDesk[]): OfficialDesk | undefined {
  const order = ["blast", "esl", "pgl", "lol", "valorant", "lck", "lec", "lcs", "dota", "faceit", "rl", "r6"];
  return [...live].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))[0];
}
