import { isReallyLive } from "./live";
import type { Game } from "./types";

export type DeskSession = {
  id: string;
  email: string;
  key: string;
  org: string;
  created_at: string;
};

const STORE = "bc-desk-v1";
const CONSUMER = new Set(["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com", "proton.me"]);

export function orgFromEmail(email: string) {
  const [user, domain] = email.split("@");
  if (!domain) return user || "desk";
  if (CONSUMER.has(domain)) return user;
  return domain.replace(/\.(com|io|net|org|co|ai)$/i, "");
}

export function readDesk(): DeskSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORE);
    if (!raw) return null;
    const d = JSON.parse(raw) as DeskSession;
    if (!d?.id || !d?.key || !d?.email) return null;
    return d;
  } catch {
    return null;
  }
}

export function writeDesk(desk: DeskSession) {
  window.localStorage.setItem(STORE, JSON.stringify(desk));
}

export function clearDesk() {
  window.localStorage.removeItem(STORE);
}

export function mintDesk(email: string): DeskSession {
  const id = `desk-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const key = `bc_${crypto.randomUUID().replaceAll("-", "")}`;
  return { id, email, key, org: orgFromEmail(email), created_at: new Date().toISOString() };
}

export async function provisionDesk(email: string): Promise<DeskSession> {
  try {
    const r = await fetch("/api/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (r.ok) {
      const d = (await r.json()) as Partial<DeskSession>;
      if (d.id && d.key && d.email) {
        const desk: DeskSession = {
          id: String(d.id),
          email: String(d.email),
          key: String(d.key),
          org: String(d.org || orgFromEmail(String(d.email))),
          created_at: String(d.created_at || new Date().toISOString()),
        };
        writeDesk(desk);
        return desk;
      }
    }
  } catch {
    /* local mint below */
  }
  const local = mintDesk(email);
  writeDesk(local);
  return local;
}

export function deskKpis(games: Game[], asOf?: string) {
  const board = games.filter((g) => g.source !== "official-twitch" && g.competitors.length > 1);
  const live = board.filter((g) => isReallyLive(g));
  const leagues = new Set(board.map((g) => g.leagueId));
  const withLine = board.filter((g) => Boolean(g.line || g.predictor));
  const withStream = board.filter((g) => Boolean(g.twitch || g.youtube));
  const liveNoScore = live.filter((g) => g.competitors.some((c) => c.score == null || c.score === ""));
  const ageSec = asOf && !Number.isNaN(Date.parse(asOf)) ? Math.max(0, Math.round((Date.now() - Date.parse(asOf)) / 1000)) : 0;
  return {
    total: board.length,
    live: live.length,
    leagues: leagues.size,
    withLine: withLine.length,
    withStream: withStream.length,
    liveNoScore: liveNoScore.length,
    ageSec,
    liveGames: live,
    board,
  };
}
