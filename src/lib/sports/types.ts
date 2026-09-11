export type GameState = "pre" | "in" | "post";

export type Competitor = {
  id: string;
  name: string;
  abbr: string;
  homeAway: "home" | "away" | "unknown";
  score?: string;
  winner?: boolean;
  record?: string;
  logo?: string;
  rank?: number;
};

export type Broadcast = {
  name: string;
  href?: string;
};

export type MapScore = {
  name: string;
  away: string;
  home: string;
};

export type Predictor = {
  home: number;
  away: number;
  source: string;
};

export type Game = {
  id: string;
  leagueId: string;
  sportId: string;
  name: string;
  shortName: string;
  date: string;
  state: GameState;
  detail: string;
  clock?: string;
  period?: number;
  venue?: string;
  competitors: Competitor[];
  broadcasts: Broadcast[];
  watchHref?: string;
  highlightHref?: string;
  youtube?: string;
  twitch?: string;
  event?: string;
  source: string;
  bestOf?: number;
  maps?: MapScore[];
  situation?: string;
  predictor?: Predictor;
  line?: string;
};

export type Headline = {
  id: string;
  headline: string;
  href?: string;
  published?: string;
};

export type Board = {
  leagueId: string;
  asOf: string;
  games: Game[];
  headlines: Headline[];
  error?: string;
};

export type League = {
  id: string;
  name: string;
  short: string;
  sportId: string;
  region: string;
  espnCdn?: string;
  espnSoccer?: string;
  mlb?: boolean;
  nhl?: boolean;
  f1?: boolean;
  footballData?: string;
  sportsDbSport?: string;
  sportsDbLeague?: string;
  twitch?: string;
  official: string;
  watch: string;
  live: boolean;
};

export type Sport = {
  id: string;
  name: string;
  group: string;
  blurb: string;
};

export type SearchHit = {
  sports: Sport[];
  leagues: League[];
  teams: Array<{ id: string; name: string; sport: string; league: string; badge?: string }>;
  events: Game[];
};
