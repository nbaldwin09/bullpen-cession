import type { League, Sport } from "./types";

export const SPORTS: Sport[] = [
  { id: "football", name: "American Football", group: "Ball", blurb: "NFL, college football, CFL, and spring leagues." },
  { id: "basketball", name: "Basketball", group: "Ball", blurb: "NBA, WNBA, college, and EuroLeague." },
  { id: "baseball", name: "Baseball", group: "Ball", blurb: "MLB, NPB, KBO, and winter ball." },
  { id: "hockey", name: "Ice Hockey", group: "Ice", blurb: "NHL, PWHL, AHL, and international ice." },
  { id: "soccer", name: "Soccer", group: "Football", blurb: "First divisions, continental cups, and national teams." },
  { id: "motorsport", name: "Motorsport", group: "Speed", blurb: "Formula 1, NASCAR, MotoGP, IndyCar, WEC, WRC." },
  { id: "combat", name: "Combat Sports", group: "Combat", blurb: "UFC, boxing, ONE, and PFL." },
  { id: "racket", name: "Racket", group: "Court", blurb: "Tennis, badminton, table tennis, squash." },
  { id: "golf", name: "Golf", group: "Precision", blurb: "PGA, LPGA, LIV, and the majors." },
  { id: "cricket", name: "Cricket", group: "Bat", blurb: "Tests, ODIs, T20, and IPL." },
  { id: "rugby", name: "Rugby", group: "Football", blurb: "Union, league, Six Nations, Rugby Championship." },
  { id: "olympic", name: "Olympic & World", group: "Multi", blurb: "Athletics, aquatics, gymnastics, winter sports." },
  { id: "cycling", name: "Cycling", group: "Endurance", blurb: "WorldTour, Grand Tours, cyclo-cross, track." },
  { id: "water", name: "Water Sports", group: "Water", blurb: "Swimming, water polo, surfing, sailing." },
  { id: "field", name: "Field", group: "Field", blurb: "Lacrosse, AFL, Gaelic football, handball, volleyball." },
  { id: "esports", name: "Esports", group: "Digital", blurb: "CS2, League of Legends, VALORANT, Dota — official tournament streams only." },
  { id: "mind", name: "Mind Sports", group: "Mind", blurb: "Chess, go, and poker championships." },
];

export const LEAGUES: League[] = [
  { id: "nfl", name: "National Football League", short: "NFL", sportId: "football", region: "USA", espnCdn: "nfl", official: "https://www.nfl.com", watch: "https://www.nfl.com/plus", live: true },
  { id: "ncaaf", name: "NCAA Football", short: "CFB", sportId: "football", region: "USA", espnCdn: "college-football", official: "https://www.ncaa.com/sports/football", watch: "https://www.espn.com/watch/", live: true },
  { id: "cfl", name: "Canadian Football League", short: "CFL", sportId: "football", region: "Canada", official: "https://www.cfl.ca", watch: "https://www.tsn.ca", live: false },
  { id: "ufl", name: "United Football League", short: "UFL", sportId: "football", region: "USA", official: "https://www.theufl.com", watch: "https://www.foxsports.com/live", live: false },
  { id: "nba", name: "National Basketball Association", short: "NBA", sportId: "basketball", region: "USA", espnCdn: "nba", official: "https://www.nba.com", watch: "https://www.nba.com/league-pass", live: true },
  { id: "wnba", name: "WNBA", short: "WNBA", sportId: "basketball", region: "USA", espnCdn: "wnba", official: "https://www.wnba.com", watch: "https://www.nba.com/wnba/league-pass", live: true },
  { id: "ncaab", name: "NCAA Men's Basketball", short: "CBB", sportId: "basketball", region: "USA", espnCdn: "mens-college-basketball", official: "https://www.ncaa.com/sports/basketball-men", watch: "https://www.espn.com/watch/", live: true },
  { id: "euroleague", name: "EuroLeague", short: "EL", sportId: "basketball", region: "Europe", official: "https://www.euroleaguebasketball.net", watch: "https://tv.euroleague.net", live: false },
  { id: "mlb", name: "Major League Baseball", short: "MLB", sportId: "baseball", region: "USA", espnCdn: "mlb", mlb: true, official: "https://www.mlb.com", watch: "https://www.mlb.com/live-stream-games", live: true },
  { id: "npb", name: "Nippon Professional Baseball", short: "NPB", sportId: "baseball", region: "Japan", official: "https://npb.jp/eng/", watch: "https://www.pacificleague.jp", live: false },
  { id: "kbo", name: "KBO League", short: "KBO", sportId: "baseball", region: "Korea", official: "https://www.koreabaseball.com", watch: "https://www.spotvnow.co.kr", live: false },
  { id: "nhl", name: "National Hockey League", short: "NHL", sportId: "hockey", region: "North America", nhl: true, official: "https://www.nhl.com", watch: "https://www.espn.com/watch/", live: true },
  { id: "pwhl", name: "PWHL", short: "PWHL", sportId: "hockey", region: "North America", official: "https://www.thepwhl.com", watch: "https://www.youtube.com/@thepwhl", live: true },
  { id: "khl", name: "Kontinental Hockey League", short: "KHL", sportId: "hockey", region: "Eurasia", official: "https://en.khl.ru", watch: "https://www.khl.ru", live: false },
  { id: "epl", name: "Premier League", short: "EPL", sportId: "soccer", region: "England", espnSoccer: "eng.1", footballData: "PL", official: "https://www.premierleague.com", watch: "https://www.peacocktv.com", live: true },
  { id: "laliga", name: "LaLiga", short: "LaLiga", sportId: "soccer", region: "Spain", espnSoccer: "esp.1", footballData: "PD", official: "https://www.laliga.com", watch: "https://www.espn.com/watch/", live: true },
  { id: "bundesliga", name: "Bundesliga", short: "BUN", sportId: "soccer", region: "Germany", espnSoccer: "ger.1", footballData: "BL1", official: "https://www.bundesliga.com", watch: "https://www.espn.com/watch/", live: true },
  { id: "seriea", name: "Serie A", short: "SA", sportId: "soccer", region: "Italy", espnSoccer: "ita.1", footballData: "SA", official: "https://www.legaseriea.it", watch: "https://www.paramountplus.com", live: true },
  { id: "ligue1", name: "Ligue 1", short: "L1", sportId: "soccer", region: "France", espnSoccer: "fra.1", footballData: "FL1", official: "https://www.ligue1.com", watch: "https://www.cbs.com", live: true },
  { id: "ucl", name: "UEFA Champions League", short: "UCL", sportId: "soccer", region: "Europe", espnSoccer: "uefa.champions", footballData: "CL", official: "https://www.uefa.com/uefachampionsleague/", watch: "https://www.paramountplus.com", live: true },
  { id: "uel", name: "UEFA Europa League", short: "UEL", sportId: "soccer", region: "Europe", espnSoccer: "uefa.europa", footballData: "EL", official: "https://www.uefa.com/uefaeuropaleague/", watch: "https://www.paramountplus.com", live: true },
  { id: "mls", name: "Major League Soccer", short: "MLS", sportId: "soccer", region: "USA", espnSoccer: "usa.1", footballData: "MLS", official: "https://www.mlssoccer.com", watch: "https://tv.apple.com", live: true },
  { id: "nwsl", name: "NWSL", short: "NWSL", sportId: "soccer", region: "USA", espnSoccer: "usa.nwsl", official: "https://www.nwslsoccer.com", watch: "https://www.nwslsoccer.com/watch", live: true },
  { id: "ligamx", name: "Liga MX", short: "MX", sportId: "soccer", region: "Mexico", espnSoccer: "mex.1", official: "https://www.ligamx.net", watch: "https://www.tudn.com", live: true },
  { id: "brasileirao", name: "Brasileirão", short: "BRA", sportId: "soccer", region: "Brazil", espnSoccer: "bra.1", official: "https://www.cbf.com.br", watch: "https://premiere.globo.com", live: true },
  { id: "afa", name: "Liga Profesional", short: "ARG", sportId: "soccer", region: "Argentina", espnSoccer: "arg.1", official: "https://www.ligaprofesional.ar", watch: "https://www.disneyplus.com", live: true },
  { id: "eredivisie", name: "Eredivisie", short: "NED", sportId: "soccer", region: "Netherlands", espnSoccer: "ned.1", footballData: "DED", official: "https://eredivisie.nl", watch: "https://www.espn.com/watch/", live: true },
  { id: "primeira", name: "Primeira Liga", short: "POR", sportId: "soccer", region: "Portugal", espnSoccer: "por.1", footballData: "PPL", official: "https://www.ligaportugal.pt", watch: "https://www.dazn.com", live: true },
  { id: "spl", name: "Scottish Premiership", short: "SCO", sportId: "soccer", region: "Scotland", espnSoccer: "sco.1", footballData: "SPL", official: "https://spfl.co.uk", watch: "https://www.skysports.com", live: true },
  { id: "saudi", name: "Saudi Pro League", short: "SPL-SA", sportId: "soccer", region: "Saudi Arabia", espnSoccer: "ksa.1", official: "https://www.spl.com.sa", watch: "https://www.dazn.com", live: true },
  { id: "jleague", name: "J1 League", short: "J1", sportId: "soccer", region: "Japan", espnSoccer: "jpn.1", official: "https://www.jleague.jp", watch: "https://www.dazn.com", live: true },
  { id: "aleague", name: "A-League", short: "AUS", sportId: "soccer", region: "Australia", espnSoccer: "aus.1", official: "https://www.aleagues.com.au", watch: "https://www.paramountplus.com", live: false },
  { id: "cafcl", name: "CAF Champions League", short: "CAF", sportId: "soccer", region: "Africa", espnSoccer: "caf.champions", official: "https://www.cafonline.com", watch: "https://www.supersport.com", live: false },
  { id: "libertadores", name: "Copa Libertadores", short: "LIB", sportId: "soccer", region: "South America", espnSoccer: "conmebol.libertadores", official: "https://www.conmebol.com", watch: "https://www.besoccer.com", live: true },
  { id: "worldcup", name: "FIFA World Cup", short: "WC", sportId: "soccer", region: "World", espnSoccer: "fifa.world", official: "https://www.fifa.com", watch: "https://www.foxsports.com", live: false },
  { id: "fifa-wwc", name: "FIFA Women's World Cup", short: "WWC", sportId: "soccer", region: "World", official: "https://www.fifa.com/en/tournaments/womens/womensworldcup", watch: "https://www.foxsports.com", live: false },
  { id: "copa", name: "Copa América", short: "COPA", sportId: "soccer", region: "Americas", official: "https://www.conmebol.com", watch: "https://www.foxsports.com", live: false },
  { id: "euros", name: "UEFA European Championship", short: "EURO", sportId: "soccer", region: "Europe", official: "https://www.uefa.com/euro2024/", watch: "https://www.foxsports.com", live: false },
  { id: "f1", name: "Formula 1", short: "F1", sportId: "motorsport", region: "World", f1: true, official: "https://www.formula1.com", watch: "https://f1tv.formula1.com", live: true },
  { id: "nascar", name: "NASCAR Cup Series", short: "NASCAR", sportId: "motorsport", region: "USA", official: "https://www.nascar.com", watch: "https://www.nascar.com/plus", live: true },
  { id: "motogp", name: "MotoGP", short: "MotoGP", sportId: "motorsport", region: "World", official: "https://www.motogp.com", watch: "https://www.videopass.motogp.com", live: true },
  { id: "indycar", name: "IndyCar", short: "Indy", sportId: "motorsport", region: "USA", official: "https://www.indycar.com", watch: "https://www.peacocktv.com", live: true },
  { id: "wec", name: "World Endurance Championship", short: "WEC", sportId: "motorsport", region: "World", official: "https://www.fiawec.com", watch: "https://fiatv.fia.com", live: false },
  { id: "wrc", name: "World Rally Championship", short: "WRC", sportId: "motorsport", region: "World", official: "https://www.wrc.com", watch: "https://www.wrc.com", live: false },
  { id: "ufc", name: "UFC", short: "UFC", sportId: "combat", region: "World", official: "https://www.ufc.com", watch: "https://www.espn.com/watch/", live: true },
  { id: "boxing", name: "World Boxing", short: "BOX", sportId: "combat", region: "World", official: "https://www.boxingscene.com", watch: "https://www.dazn.com", live: true },
  { id: "one", name: "ONE Championship", short: "ONE", sportId: "combat", region: "Asia", official: "https://www.onefc.com", watch: "https://www.amazon.com/gp/video", live: true },
  { id: "atp", name: "ATP Tour", short: "ATP", sportId: "racket", region: "World", official: "https://www.atptour.com", watch: "https://www.tennischannel.com", live: true },
  { id: "wta", name: "WTA Tour", short: "WTA", sportId: "racket", region: "World", official: "https://www.wtatennis.com", watch: "https://www.tennischannel.com", live: true },
  { id: "grandslam", name: "Grand Slams", short: "GS", sportId: "racket", region: "World", official: "https://www.itftennis.com", watch: "https://www.espn.com/watch/", live: true },
  { id: "bwf", name: "BWF Badminton", short: "BWF", sportId: "racket", region: "World", official: "https://bwfbadminton.com", watch: "https://bwftv.com", live: false },
  { id: "pga", name: "PGA Tour", short: "PGA", sportId: "golf", region: "USA", official: "https://www.pgatour.com", watch: "https://www.pgatour.com/live", live: true },
  { id: "lpga", name: "LPGA", short: "LPGA", sportId: "golf", region: "USA", official: "https://www.lpga.com", watch: "https://www.golfchannel.com", live: true },
  { id: "liv", name: "LIV Golf", short: "LIV", sportId: "golf", region: "World", official: "https://www.livgolf.com", watch: "https://www.foxsports.com", live: true },
  { id: "ipl", name: "Indian Premier League", short: "IPL", sportId: "cricket", region: "India", official: "https://www.iplt20.com", watch: "https://www.hotstar.com", live: true },
  { id: "icc", name: "ICC Internationals", short: "ICC", sportId: "cricket", region: "World", official: "https://www.icc-cricket.com", watch: "https://www.hotstar.com", live: true },
  { id: "bbl", name: "Big Bash League", short: "BBL", sportId: "cricket", region: "Australia", official: "https://www.cricket.com.au", watch: "https://7plus.com.au", live: false },
  { id: "sixnations", name: "Six Nations", short: "6N", sportId: "rugby", region: "Europe", official: "https://www.sixnationsrugby.com", watch: "https://www.peacocktv.com", live: false },
  { id: "trchampionship", name: "Rugby Championship", short: "TRC", sportId: "rugby", region: "South", official: "https://www.rugbychampionship.com", watch: "https://www.stan.com.au", live: false },
  { id: "premrugby", name: "Premiership Rugby", short: "PREM", sportId: "rugby", region: "England", official: "https://www.premiershiprugby.com", watch: "https://www.tntsports.co.uk", live: true },
  { id: "nrl", name: "National Rugby League", short: "NRL", sportId: "rugby", region: "Australia", official: "https://www.nrl.com", watch: "https://www.nine.com.au", live: true },
  { id: "afl", name: "Australian Football League", short: "AFL", sportId: "field", region: "Australia", official: "https://www.afl.com.au", watch: "https://www.channel7.com.au", live: true },
  { id: "pll", name: "Premier Lacrosse League", short: "PLL", sportId: "field", region: "USA", official: "https://premierlacrosseleague.com", watch: "https://www.espn.com/watch/", live: true },
  { id: "nll", name: "National Lacrosse League", short: "NLL", sportId: "field", region: "North America", official: "https://www.nll.com", watch: "https://www.espn.com/watch/", live: false },
  { id: "gafa", name: "GAA Football", short: "GAA", sportId: "field", region: "Ireland", official: "https://www.gaa.ie", watch: "https://www.gaa.ie/watch", live: false },
  { id: "handball", name: "EHF Champions League", short: "EHF", sportId: "field", region: "Europe", official: "https://ehfcl.eurohandball.com", watch: "https://ehftv.com", live: false },
  { id: "volleyball", name: "FIVB Volleyball", short: "FIVB", sportId: "field", region: "World", official: "https://www.fivb.com", watch: "https://www.volleyballworld.tv", live: true },
  { id: "fieldhockey", name: "FIH Hockey", short: "FIH", sportId: "field", region: "World", official: "https://www.fih.hockey", watch: "https://www.fih.hockey", live: false },
  { id: "worldathletics", name: "World Athletics", short: "WA", sportId: "olympic", region: "World", official: "https://worldathletics.org", watch: "https://www.nbc.com/paris-2024", live: true },
  { id: "fina", name: "World Aquatics", short: "AQUA", sportId: "water", region: "World", official: "https://www.worldaquatics.com", watch: "https://www.worldaquatics.com", live: false },
  { id: "worldtour", name: "UCI WorldTour", short: "UCI", sportId: "cycling", region: "World", official: "https://www.uci.org", watch: "https://www.flo-cycling.com", live: true },
  { id: "tdf", name: "Tour de France", short: "TdF", sportId: "cycling", region: "France", official: "https://www.letour.fr", watch: "https://www.peacocktv.com", live: false },
  { id: "wsop", name: "World Series of Poker", short: "WSOP", sportId: "mind", region: "USA", official: "https://www.wsop.com", watch: "https://www.pokergo.com", live: false },
  { id: "fide", name: "FIDE Chess", short: "FIDE", sportId: "mind", region: "World", official: "https://www.fide.com", watch: "https://www.chess.com/tv", live: true },
  { id: "lol", name: "League of Legends Esports", short: "LoL", sportId: "esports", region: "World", twitch: "riotgames", official: "https://lolesports.com", watch: "https://www.twitch.tv/riotgames", live: true },
  { id: "lck", name: "LCK", short: "LCK", sportId: "esports", region: "Korea", twitch: "lck", official: "https://lolesports.com", watch: "https://www.twitch.tv/lck", live: true },
  { id: "lec", name: "LEC", short: "LEC", sportId: "esports", region: "Europe", twitch: "lec", official: "https://lolesports.com", watch: "https://www.twitch.tv/lec", live: true },
  { id: "dota", name: "Dota 2", short: "Dota", sportId: "esports", region: "World", twitch: "dota2ti", official: "https://www.dota2.com", watch: "https://www.twitch.tv/dota2ti", live: true },
  { id: "cs", name: "Counter-Strike", short: "CS2", sportId: "esports", region: "World", twitch: "eslcs", official: "https://www.hltv.org", watch: "https://www.twitch.tv/eslcs", live: true },
  { id: "blast", name: "BLAST Premier", short: "BLAST", sportId: "esports", region: "World", twitch: "blastpremier", official: "https://blasttv.gg", watch: "https://www.twitch.tv/blastpremier", live: true },
  { id: "esl", name: "ESL Counter-Strike", short: "ESL", sportId: "esports", region: "World", twitch: "eslcs", official: "https://pro.eslgaming.com/tour/cs", watch: "https://www.twitch.tv/eslcs", live: true },
  { id: "iem", name: "Intel Extreme Masters", short: "IEM", sportId: "esports", region: "World", twitch: "eslcs", official: "https://www.ie-masters.com", watch: "https://www.twitch.tv/eslcs", live: true },
  { id: "pgl", name: "PGL", short: "PGL", sportId: "esports", region: "World", twitch: "pgl_cs2", official: "https://pglesports.com", watch: "https://www.twitch.tv/pgl_cs2", live: true },
  { id: "valorant", name: "VCT", short: "VCT", sportId: "esports", region: "World", twitch: "valorant", official: "https://valorantesports.com", watch: "https://www.twitch.tv/valorant", live: true },
  { id: "rl", name: "RLCS", short: "RLCS", sportId: "esports", region: "World", twitch: "rocketleague", official: "https://www.rocketleagueesports.com", watch: "https://www.twitch.tv/rocketleague", live: true },
  { id: "r6", name: "Rainbow Six Esports", short: "R6", sportId: "esports", region: "World", twitch: "rainbow6", official: "https://www.ubisoft.com/en-us/esports/rainbow-six", watch: "https://www.twitch.tv/rainbow6", live: true },
  { id: "sailing", name: "America's Cup / SailGP", short: "SAIL", sportId: "water", region: "World", official: "https://sailgp.com", watch: "https://www.youtube.com/@SailGP", live: true },
  { id: "surfing", name: "World Surf League", short: "WSL", sportId: "water", region: "World", official: "https://www.worldsurfleague.com", watch: "https://www.worldsurfleague.com/watch", live: true },
];

export const ESPN_SOCCER_SLUG: Record<string, string> = Object.fromEntries(
  LEAGUES.filter((l) => l.espnSoccer).map((l) => [l.espnSoccer!, l.id]),
);

export const GROUPS = Array.from(new Set(SPORTS.map((s) => s.group)));

export function sportById(id: string) {
  return SPORTS.find((s) => s.id === id);
}

export function leagueById(id: string) {
  return LEAGUES.find((l) => l.id === id);
}

export function leaguesForSport(sportId: string) {
  return LEAGUES.filter((l) => l.sportId === sportId);
}

export const LIVE_LEAGUES = LEAGUES.filter((l) => l.live);

export function matchSoccerLeague(slug?: string, name?: string) {
  if (slug && ESPN_SOCCER_SLUG[slug]) return ESPN_SOCCER_SLUG[slug];
  const n = (name || slug || "").toLowerCase();
  return LEAGUES.find(
    (l) =>
      l.sportId === "soccer" &&
      (n.includes(l.short.toLowerCase()) || n.includes(l.name.toLowerCase()) || l.name.toLowerCase().includes(n)),
  )?.id;
}
