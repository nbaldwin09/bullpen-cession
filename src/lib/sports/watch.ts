export type WatchTarget = {
  name: string;
  href: string;
};

const NETWORKS: Record<string, WatchTarget> = {
  NBC: { name: "Peacock / NBC", href: "https://www.peacocktv.com" },
  ESPN: { name: "ESPN Watch", href: "https://www.espn.com/watch/" },
  "ESPN+": { name: "ESPN+", href: "https://www.espn.com/watch/" },
  ABC: { name: "ABC", href: "https://abc.com/watch-live" },
  CBS: { name: "Paramount+", href: "https://www.paramountplus.com" },
  FOX: { name: "Fox Sports", href: "https://www.foxsports.com/live" },
  FS1: { name: "Fox Sports", href: "https://www.foxsports.com/live" },
  FS2: { name: "Fox Sports", href: "https://www.foxsports.com/live" },
  Amazon: { name: "Prime Video", href: "https://www.amazon.com/gp/video/sports" },
  "Prime Video": { name: "Prime Video", href: "https://www.amazon.com/gp/video/sports" },
  "Apple TV+": { name: "Apple TV", href: "https://tv.apple.com" },
  Apple: { name: "Apple TV", href: "https://tv.apple.com" },
  Peacock: { name: "Peacock", href: "https://www.peacocktv.com" },
  NFLN: { name: "NFL+", href: "https://www.nfl.com/plus" },
  "NFL Network": { name: "NFL+", href: "https://www.nfl.com/plus" },
  NFL: { name: "NFL+", href: "https://www.nfl.com/plus" },
  MLBN: { name: "MLB.TV", href: "https://www.mlb.com/live-stream-games" },
  "MLB.TV": { name: "MLB.TV", href: "https://www.mlb.com/live-stream-games" },
  MLB: { name: "MLB.TV", href: "https://www.mlb.com/live-stream-games" },
  NHLN: { name: "NHL / ESPN+", href: "https://www.nhl.com/info/plus" },
  TNT: { name: "Max", href: "https://www.max.com" },
  TBS: { name: "Max", href: "https://www.max.com" },
  TruTV: { name: "Max", href: "https://www.max.com" },
  NBA: { name: "NBA League Pass", href: "https://www.nba.com/league-pass" },
  "NBA TV": { name: "NBA League Pass", href: "https://www.nba.com/league-pass" },
  DAZN: { name: "DAZN", href: "https://www.dazn.com" },
  beIN: { name: "beIN SPORTS", href: "https://www.beinsports.com" },
  "beIN SPORTS": { name: "beIN SPORTS", href: "https://www.beinsports.com" },
  "YouTube TV": { name: "YouTube TV", href: "https://tv.youtube.com" },
  YouTube: { name: "YouTube Sports", href: "https://www.youtube.com/sports" },
  Fubo: { name: "Fubo", href: "https://www.fubo.tv" },
  DirecTV: { name: "DirecTV", href: "https://www.directv.com" },
  Sky: { name: "Sky Sports", href: "https://www.skysports.com" },
  "Sky Sports": { name: "Sky Sports", href: "https://www.skysports.com" },
  TNTSports: { name: "TNT Sports", href: "https://www.tntsports.co.uk" },
  "TNT Sports": { name: "TNT Sports", href: "https://www.tntsports.co.uk" },
  Paramount: { name: "Paramount+", href: "https://www.paramountplus.com" },
  "Paramount+": { name: "Paramount+", href: "https://www.paramountplus.com" },
  Max: { name: "Max", href: "https://www.max.com" },
  Disney: { name: "Disney+", href: "https://www.disneyplus.com" },
  "Disney+": { name: "Disney+", href: "https://www.disneyplus.com" },
  Hulu: { name: "Hulu", href: "https://www.hulu.com" },
  Sling: { name: "Sling", href: "https://www.sling.com" },
  Universo: { name: "Universo", href: "https://www.nbcuniversosports.com" },
  UniMás: { name: "TelevisaUnivision", href: "https://www.univision.com" },
  Univision: { name: "TelevisaUnivision", href: "https://www.univision.com" },
  TUDN: { name: "TUDN", href: "https://www.tudn.com" },
  CBC: { name: "CBC Gem", href: "https://gem.cbc.ca" },
  TSN: { name: "TSN", href: "https://www.tsn.ca" },
  Sportsnet: { name: "Sportsnet", href: "https://www.sportsnet.ca" },
  Stan: { name: "Stan Sport", href: "https://www.stan.com.au" },
  Kayo: { name: "Kayo Sports", href: "https://kayosports.com.au" },
  Optus: { name: "Optus Sport", href: "https://sport.optus.com.au" },
  SuperSport: { name: "SuperSport", href: "https://www.supersport.com" },
  Star: { name: "JioHotstar", href: "https://www.hotstar.com" },
  Hotstar: { name: "JioHotstar", href: "https://www.hotstar.com" },
  SonyLIV: { name: "SonyLIV", href: "https://www.sonyliv.com" },
  FuboTV: { name: "Fubo", href: "https://www.fubo.tv" },
  CW: { name: "The CW", href: "https://www.cwtv.com" },
  ION: { name: "ION", href: "https://ionplus.com" },
  USA: { name: "USA / Peacock", href: "https://www.peacocktv.com" },
  Golf: { name: "Golf Channel", href: "https://www.golfchannel.com" },
  "Golf Channel": { name: "Golf Channel", href: "https://www.golfchannel.com" },
  Tennis: { name: "Tennis Channel", href: "https://www.tennischannel.com" },
  "Tennis Channel": { name: "Tennis Channel", href: "https://www.tennischannel.com" },
  F1TV: { name: "F1 TV", href: "https://f1tv.formula1.com" },
  "F1 TV": { name: "F1 TV", href: "https://f1tv.formula1.com" },
  UFC: { name: "UFC Fight Pass", href: "https://ufcfightpass.com" },
  "UFC Fight Pass": { name: "UFC Fight Pass", href: "https://ufcfightpass.com" },
  WWE: { name: "Netflix / WWE", href: "https://www.netflix.com" },
  Crunchyroll: { name: "Crunchyroll", href: "https://www.crunchyroll.com" },
  Twitch: { name: "Twitch", href: "https://www.twitch.tv" },
  CBSSN: { name: "Paramount+", href: "https://www.paramountplus.com" },
};

export const FEATURED_OFFICIAL = [
  { name: "BLAST Premier", url: "https://www.twitch.tv/blastpremier", note: "Official Twitch" },
  { name: "ESL CS", url: "https://www.twitch.tv/eslcs", note: "Official Twitch" },
  { name: "PGL", url: "https://www.twitch.tv/pgl_cs2", note: "Official Twitch" },
  { name: "LoL — Riot", url: "https://www.twitch.tv/riotgames", note: "Official Twitch" },
  { name: "VALORANT", url: "https://www.twitch.tv/valorant", note: "Official Twitch" },
];

export function resolveNetwork(name: string): WatchTarget {
  const key = name.trim();
  if (NETWORKS[key]) return NETWORKS[key];
  const upper = key.toUpperCase();
  for (const [k, v] of Object.entries(NETWORKS)) {
    if (k.toUpperCase() === upper || upper.includes(k.toUpperCase())) return v;
  }
  return {
    name: key,
    href: `https://www.youtube.com/results?search_query=${encodeURIComponent(key + " official live stream")}`,
  };
}

export function youtubeWatch(idOrUrl: string) {
  const id = extractYoutubeId(idOrUrl);
  return id ? `https://www.youtube.com/watch?v=${id}` : idOrUrl;
}

export function extractYoutubeId(input: string) {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m =
    s.match(/[?&]v=([\w-]{11})/) ||
    s.match(/youtu\.be\/([\w-]{11})/) ||
    s.match(/youtube\.com\/embed\/([\w-]{11})/) ||
    s.match(/youtube\.com\/live\/([\w-]{11})/);
  return m?.[1];
}

export function extractTwitchChannel(input: string) {
  const m = input.match(/twitch\.tv\/([A-Za-z0-9_]+)/);
  return m?.[1];
}

export type PlayerKind = "youtube" | "twitch" | "hls" | "file" | "unknown";

export function classifyStream(url: string): { kind: PlayerKind; id?: string } {
  const u = url.trim();
  const yt = extractYoutubeId(u);
  if (yt) return { kind: "youtube", id: yt };
  const tw = extractTwitchChannel(u);
  if (tw) return { kind: "twitch", id: tw };
  if (/\.m3u8(\?|$)/i.test(u) || u.includes("application/vnd.apple.mpegurl")) return { kind: "hls" };
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(u)) return { kind: "file" };
  return { kind: "unknown" };
}

export function twitchEmbedSrc(channel: string, autoplay = false) {
  const host = typeof window !== "undefined" ? window.location.hostname : "www.bullpencession.com";
  const parents = Array.from(
    new Set([host, "www.bullpencession.com", "bullpencession.com", "localhost", "127.0.0.1"]),
  );
  const qs = parents.map((p) => `parent=${encodeURIComponent(p)}`).join("&");
  return `https://player.twitch.tv/?channel=${encodeURIComponent(channel)}&${qs}${autoplay ? "&autoplay=true&muted=true" : ""}`;
}

export function streamUrlFor(game: { twitch?: string; youtube?: string; watchHref?: string }) {
  if (game.twitch) return `https://www.twitch.tv/${game.twitch}`;
  if (game.youtube) return game.youtube;
  return game.watchHref || "";
}
