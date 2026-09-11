// src/lib/sports/catalog.ts
var SPORTS = [
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
  { id: "esports", name: "Esports", group: "Digital", blurb: "CS2, League of Legends, VALORANT, Dota \u2014 official tournament streams only." },
  { id: "mind", name: "Mind Sports", group: "Mind", blurb: "Chess, go, and poker championships." }
];
var LEAGUES = [
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
  { id: "brasileirao", name: "Brasileir\xE3o", short: "BRA", sportId: "soccer", region: "Brazil", espnSoccer: "bra.1", official: "https://www.cbf.com.br", watch: "https://premiere.globo.com", live: true },
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
  { id: "copa", name: "Copa Am\xE9rica", short: "COPA", sportId: "soccer", region: "Americas", official: "https://www.conmebol.com", watch: "https://www.foxsports.com", live: false },
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
  { id: "surfing", name: "World Surf League", short: "WSL", sportId: "water", region: "World", official: "https://www.worldsurfleague.com", watch: "https://www.worldsurfleague.com/watch", live: true }
];
var ESPN_SOCCER_SLUG = Object.fromEntries(
  LEAGUES.filter((l) => l.espnSoccer).map((l) => [l.espnSoccer, l.id])
);
var GROUPS = Array.from(new Set(SPORTS.map((s) => s.group)));
function leagueById(id) {
  return LEAGUES.find((l) => l.id === id);
}
var LIVE_LEAGUES = LEAGUES.filter((l) => l.live);

// src/lib/sports/esports.ts
var OFFICIAL_DESKS = [
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
  { id: "r6", leagueId: "r6", titleId: "r6", name: "Rainbow Six", twitch: "rainbow6", keywords: ["siege", "rainbow"] }
];
var PREVIEW_LIVE_BYTES = 8e3;
var LIVE_TTL_MS = 6e4;
var liveCache = /* @__PURE__ */ new Map();
function deskForEvent(event, leagueId) {
  const n = `${event} ${leagueId || ""}`.toLowerCase();
  const hit = OFFICIAL_DESKS.find((d) => d.keywords.some((k) => n.includes(k)));
  if (hit) return hit;
  if (leagueId) {
    const byLeague = OFFICIAL_DESKS.find((d) => d.leagueId === leagueId);
    if (byLeague) return byLeague;
  }
  return OFFICIAL_DESKS[1];
}
async function isTwitchLive(channel) {
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
async function liveOfficialDesks() {
  const live = [];
  for (let i = 0; i < OFFICIAL_DESKS.length; i += 3) {
    const chunk = OFFICIAL_DESKS.slice(i, i + 3);
    const flags = await Promise.all(chunk.map((d) => isTwitchLive(d.twitch)));
    chunk.forEach((d, j) => {
      if (flags[j]) live.push(d);
    });
  }
  return live;
}
function team(name, side, score, winner, rank) {
  return {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    name,
    abbr: name.replace(/[^A-Za-z0-9]/g, "").slice(0, 4).toUpperCase() || name.slice(0, 3).toUpperCase(),
    homeAway: side,
    score,
    winner,
    rank
  };
}
function twitchBroadcast(channel) {
  return { name: "Official Twitch", href: `https://www.twitch.tv/${channel}` };
}
function deskAsGame(desk, live) {
  return {
    id: `desk-${desk.id}`,
    leagueId: desk.leagueId,
    sportId: "esports",
    name: desk.name,
    shortName: desk.name,
    date: (/* @__PURE__ */ new Date()).toISOString(),
    state: live ? "in" : "pre",
    detail: live ? "Live" : "Offline",
    venue: "Twitch",
    competitors: [team("Official stream", "home")],
    broadcasts: [twitchBroadcast(desk.twitch)],
    watchHref: `https://www.twitch.tv/${desk.twitch}`,
    twitch: desk.twitch,
    event: desk.name,
    source: "official-twitch"
  };
}
function csState(m, today) {
  const day = String(m.date || "").slice(0, 10);
  if (day > today) return "pre";
  if (day === today && !m.winner) return "in";
  if (day === today && m.winner) return "post";
  return "post";
}
async function loadCsMatches() {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  try {
    const res = await fetch("https://api.csapi.de/matches/latest", {
      headers: { Accept: "application/json" }
    });
    if (!res.ok) return [];
    const rows = await res.json();
    return (Array.isArray(rows) ? rows : []).slice(0, 24).map((m) => {
      const event = String(m.event || "Counter-Strike");
      const desk = deskForEvent(event, "cs");
      const t1 = String(m.team1?.name || "Team");
      const t2 = String(m.team2?.name || "Team");
      const s1 = m.team1?.score != null ? String(m.team1.score) : void 0;
      const s2 = m.team2?.score != null ? String(m.team2.score) : void 0;
      const state = csState(m, today);
      const winnerName = m.winner?.name;
      const maps = (m.maps || []).filter((row) => row.name).map((row) => ({
        name: String(row.name),
        away: row.team1_score != null ? String(row.team1_score) : "\u2013",
        home: row.team2_score != null ? String(row.team2_score) : "\u2013"
      }));
      return {
        id: `cs-${m.id}`,
        leagueId: desk.leagueId,
        sportId: "esports",
        name: `${t1} vs ${t2}`,
        shortName: `${t1} vs ${t2}`,
        date: m.date ? `${m.date}T16:00:00Z` : (/* @__PURE__ */ new Date()).toISOString(),
        state,
        detail: state === "in" ? `BO${m.best_of || 3} \xB7 live` : `BO${m.best_of || 3} \xB7 ${event}`,
        venue: event,
        event,
        bestOf: m.best_of,
        maps,
        competitors: [
          team(t1, "away", s1, winnerName === t1, m.team1?.rank),
          team(t2, "home", s2, winnerName === t2, m.team2?.rank)
        ],
        broadcasts: [twitchBroadcast(desk.twitch)],
        watchHref: `https://www.twitch.tv/${desk.twitch}`,
        twitch: desk.twitch,
        source: "csapi"
      };
    });
  } catch {
    return [];
  }
}
async function loadCsRankings() {
  try {
    const res = await fetch("https://api.csapi.de/rankings", { headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const payload = await res.json();
    return (payload.rankings || []).slice(0, 10).map((r) => ({
      id: `rank-${r.rank}-${r.name}`,
      headline: `#${r.rank} ${r.name} \xB7 ${r.points} pts`,
      href: "https://www.hltv.org/ranking/teams",
      published: payload.date || ""
    }));
  } catch {
    return [];
  }
}
async function loadEsportsBoard(leagueId = "cs") {
  const [live, matches, rankings] = await Promise.all([
    liveOfficialDesks(),
    loadCsMatches(),
    leagueId === "cs" || leagueId === "blast" || leagueId === "esl" || leagueId === "pgl" || leagueId === "esports" ? loadCsRankings() : Promise.resolve([])
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
  const seen = /* @__PURE__ */ new Set();
  const games = [];
  for (const g of [...deskGames, ...matchFor]) {
    if (seen.has(g.id)) continue;
    seen.add(g.id);
    games.push(g);
  }
  if (!games.length) {
    const fallback = OFFICIAL_DESKS.filter(
      (d) => leagueId === "esports" || leagueId === "cs" ? d.titleId === "cs" || leagueId === "esports" : d.leagueId === leagueId
    ).slice(0, 3);
    for (const d of fallback) games.push(deskAsGame(d, false));
  }
  games.sort((a, b) => {
    const rank = (s) => s === "in" ? 0 : s === "pre" ? 1 : 2;
    return rank(a.state) - rank(b.state);
  });
  return { leagueId, asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: rankings };
}

// src/lib/sports/watch.ts
var NETWORKS = {
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
  UniM\u00E1s: { name: "TelevisaUnivision", href: "https://www.univision.com" },
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
  CBSSN: { name: "Paramount+", href: "https://www.paramountplus.com" }
};
function resolveNetwork(name) {
  const key = name.trim();
  if (NETWORKS[key]) return NETWORKS[key];
  const upper = key.toUpperCase();
  for (const [k, v] of Object.entries(NETWORKS)) {
    if (k.toUpperCase() === upper || upper.includes(k.toUpperCase())) return v;
  }
  return {
    name: key,
    href: `https://www.youtube.com/results?search_query=${encodeURIComponent(key + " official live stream")}`
  };
}

// src/lib/sports/fetch.server.ts
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";
async function getJson(url, extra = {}) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "application/json", ...extra }
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}
function stateFrom(raw, detail, completed) {
  if (completed) return "post";
  const s = `${raw || ""} ${detail || ""}`.toLowerCase().replace(/[_/]+/g, " ");
  if (/\bfinal\b|\bft\b|\bpost\b|\bofficial\b|\bended\b|\bcomplete|\baot\b|\bfull time\b|\bmatch finished\b/.test(s)) {
    return "post";
  }
  if (/\bin\b|\blive\b|\bprogress\b|\bcrit\b|\bmid\b|\bpause|\bhalftime\b|\bht\b/.test(s)) return "in";
  return "pre";
}
function broadcastsFrom(comp) {
  const out = [];
  const names = /* @__PURE__ */ new Set();
  const push = (name) => {
    const n = name.trim();
    if (!n || names.has(n)) return;
    names.add(n);
    out.push(resolveNetwork(n));
  };
  const list = comp.broadcasts || [];
  for (const b of list) {
    for (const n of b.names || []) push(n);
    if (b.type?.shortName) push(b.type.shortName);
  }
  const geo = comp.geoBroadcasts || [];
  for (const g of geo) if (g.media?.shortName) push(g.media.shortName);
  if (typeof comp.broadcast === "string") push(comp.broadcast);
  return out;
}
function parsePredictor(comp) {
  const odds = comp.odds || [];
  const first = odds[0] || {};
  const home = first.homeTeamOdds || {};
  const away = first.awayTeamOdds || {};
  const hp = Number(home.winPercentage);
  const ap = Number(away.winPercentage);
  if (Number.isFinite(hp) && Number.isFinite(ap) && hp + ap > 50) {
    return { home: hp, away: ap, source: "espn" };
  }
  return void 0;
}
function parseSituation(comp) {
  const sit = comp.situation || {};
  const last = sit.lastPlay || {};
  const situation = String(sit.downDistanceText || sit.possessionText || last.text || "").trim() || void 0;
  const odds = (comp.odds || [])[0] || {};
  const details = String(odds.details || "").trim();
  const ou = odds.overUnder != null ? String(odds.overUnder) : "";
  const line = details ? ou ? `${details} \xB7 O/U ${ou}` : details : void 0;
  return { situation, line };
}
function collectEspnEvents(payload) {
  const content = payload.content || {};
  const sb = content.sbData || {};
  const events = [];
  for (const ev of sb.events || []) events.push(ev);
  for (const group of sb.scores || []) {
    const leagueMeta = (group.leagues || [])[0] || {};
    for (const ev of group.events || []) {
      events.push({ ...ev, _groupLeague: leagueMeta });
    }
  }
  return events;
}
function parseEspnEvent(ev, leagueId, sportId) {
  const comps = ev.competitions || [{}];
  const comp = comps[0] || {};
  const status = ev.status || comp.status || {};
  const type = status.type || {};
  const competitors = (comp.competitors || []).map((c) => {
    const team2 = c.team || {};
    return {
      id: String(team2.id || c.id || team2.abbreviation || ""),
      name: String(team2.displayName || team2.name || "Team"),
      abbr: String(team2.abbreviation || team2.shortDisplayName || ""),
      homeAway: c.homeAway === "home" || c.homeAway === "away" ? c.homeAway : "unknown",
      score: c.score != null ? String(c.score) : void 0,
      winner: Boolean(c.winner),
      record: Array.isArray(c.records) ? String(c.records[0]?.summary || "") : void 0,
      logo: typeof team2.logo === "string" ? team2.logo : void 0
    };
  });
  const bcast = broadcastsFrom(comp);
  const pred = parsePredictor(comp);
  const extra = parseSituation(comp);
  return {
    id: String(ev.id || comp.id || `${leagueId}-${ev.date}`),
    leagueId,
    sportId,
    name: String(ev.name || ev.shortName || "Fixture"),
    shortName: String(ev.shortName || ev.name || ""),
    date: String(ev.date || comp.date || ""),
    state: stateFrom(
      String(type.state || type.name || ""),
      String(type.detail || type.description || type.shortDetail || ""),
      Boolean(type.completed)
    ),
    detail: String(type.detail || type.description || type.shortDetail || extra.situation || ""),
    clock: status.displayClock != null ? String(status.displayClock) : void 0,
    period: typeof status.period === "number" ? status.period : void 0,
    venue: String((comp.venue || ev.venue || {}).fullName || (ev.venue || {}).displayName || ""),
    competitors,
    broadcasts: bcast,
    watchHref: bcast[0]?.href,
    predictor: pred,
    situation: extra.situation,
    line: extra.line,
    source: "espn-cdn"
  };
}
function parseEspnHeadlines(payload) {
  const nowFeed = payload.nowFeed || [];
  const newsBlock = payload.news || {};
  const feed = newsBlock.articles || newsBlock.feed || nowFeed;
  return feed.slice(0, 16).map((n, i) => {
    const links = n.links || {};
    const web = links.web || n.link || {};
    return {
      id: String(n.id || i),
      headline: String(n.headline || n.title || n.description || "Update"),
      href: String(web.href || n.link || ""),
      published: String(n.published || n.lastModified || "")
    };
  });
}
function parseEspnBoard(leagueId, sportId, payload) {
  const events = collectEspnEvents(payload);
  const games = events.map((ev) => parseEspnEvent(ev, leagueId, sportId));
  return { leagueId, asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: parseEspnHeadlines(payload) };
}
function soccerLeagueIdFromEvent(ev) {
  const group = ev._groupLeague || {};
  const slug = String(group.slug || ev.leagueId || "");
  if (slug && ESPN_SOCCER_SLUG[slug]) return ESPN_SOCCER_SLUG[slug];
  const name = String(group.name || group.abbreviation || "");
  if (slug && ESPN_SOCCER_SLUG[slug.replace(/^soccer\./, "")]) return ESPN_SOCCER_SLUG[slug];
  return LEAGUES.find(
    (l) => l.sportId === "soccer" && (name.toLowerCase().includes(l.name.toLowerCase()) || name.toLowerCase().includes(l.short.toLowerCase()) || l.name.toLowerCase().includes(name.toLowerCase()))
  )?.id;
}
async function loadEspnSoccerAll(date) {
  const url = `https://cdn.espn.com/core/soccer/scoreboard?xhr=1${date ? `&dates=${date.replaceAll("-", "")}` : ""}`;
  const json = await getJson(url);
  return collectEspnEvents(json).map((ev) => {
    const lid = soccerLeagueIdFromEvent(ev) || "ucl";
    return parseEspnEvent(ev, lid, "soccer");
  });
}
function parseMlb(payload) {
  const dates = payload.dates || [];
  const games = [];
  for (const day of dates) {
    for (const g of day.games || []) {
      const status = g.status || {};
      const teams = g.teams || {};
      const toComp = (side) => {
        const t = teams[side] || {};
        const team2 = t.team || {};
        return {
          id: String(team2.id || ""),
          name: String(team2.name || team2.teamName || side),
          abbr: String(team2.abbreviation || ""),
          homeAway: side,
          score: t.score != null ? String(t.score) : void 0
        };
      };
      const broadcasts = [];
      const b = g.broadcasts || [];
      for (const item of b) {
        const name = String(item.name || item.callSign || "");
        if (name) broadcasts.push(resolveNetwork(name));
      }
      games.push({
        id: `mlb-${g.gamePk}`,
        leagueId: "mlb",
        sportId: "baseball",
        name: `${toComp("away").name} at ${toComp("home").name}`,
        shortName: `${toComp("away").abbr} @ ${toComp("home").abbr}`,
        date: String(g.gameDate || ""),
        state: stateFrom(String(status.abstractGameState || status.detailedState || "")),
        detail: String(status.detailedState || ""),
        venue: String((g.venue || {}).name || ""),
        competitors: [toComp("away"), toComp("home")],
        broadcasts,
        watchHref: broadcasts[0]?.href || "https://www.mlb.com/live-stream-games",
        source: "mlb"
      });
    }
  }
  return { leagueId: "mlb", asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: [] };
}
function locName(v) {
  if (typeof v === "string") return v;
  if (v && typeof v === "object" && "default" in v) {
    return String(v.default || "");
  }
  return "";
}
function parseNhl(payload) {
  const fromWeek = (payload.gameWeek || []).flatMap(
    (d) => d.games || []
  );
  const week = (payload.games || []).concat(fromWeek);
  const games = week.map((g) => {
    const home = g.homeTeam || {};
    const away = g.awayTeam || {};
    const clock = g.clock || {};
    const toComp = (t, side) => ({
      id: String(t.id || t.abbrev || ""),
      name: locName(t.name) || locName(t.commonName) || String(t.abbrev || side),
      abbr: String(t.abbrev || ""),
      homeAway: side,
      score: t.score != null ? String(t.score) : void 0,
      record: typeof t.record === "string" ? t.record : void 0
    });
    const broadcasts = [];
    for (const b of g.tvBroadcasts || []) {
      if (b.network) broadcasts.push(resolveNetwork(b.network));
    }
    if (!broadcasts.length) broadcasts.push({ name: "ESPN+", href: "https://www.espn.com/watch/" });
    return {
      id: `nhl-${g.id}`,
      leagueId: "nhl",
      sportId: "hockey",
      name: `${toComp(away, "away").name} at ${toComp(home, "home").name}`,
      shortName: `${away.abbrev} @ ${home.abbrev}`,
      date: String(g.startTimeUTC || g.gameDate || ""),
      state: stateFrom(String(g.gameState || "")),
      detail: String(g.gameState || clock.inPeriod || ""),
      clock: clock.timeRemaining != null ? String(clock.timeRemaining) : void 0,
      venue: locName(g.venue),
      competitors: [toComp(away, "away"), toComp(home, "home")],
      broadcasts,
      watchHref: broadcasts[0]?.href || "https://www.nhl.com/info/plus",
      source: "nhl"
    };
  });
  return { leagueId: "nhl", asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: [] };
}
function parseF1(payload) {
  const mr = payload.MRData || {};
  const table = mr.RaceTable || {};
  const races = table.Races || [];
  const games = races.slice(0, 24).map((r) => {
    const circuit = r.Circuit || {};
    const loc = circuit.Location || {};
    const results = r.Results || [];
    const top = results.slice(0, 2).map((row, i) => {
      const driver = row.Driver || {};
      return {
        id: String(driver.driverId || i),
        name: `${driver.givenName || ""} ${driver.familyName || ""}`.trim() || "Driver",
        abbr: String(driver.code || ""),
        homeAway: i === 0 ? "home" : "away",
        score: row.position != null ? `P${row.position}` : void 0
      };
    });
    const raceDate = `${r.date || ""}T${r.time || "12:00:00Z"}`;
    const start = new Date(raceDate).getTime();
    const now = Date.now();
    const state = results.length ? "post" : start && now - start > 0 && now - start < 4 * 36e5 ? "in" : "pre";
    return {
      id: `f1-${r.round}`,
      leagueId: "f1",
      sportId: "motorsport",
      name: String(r.raceName || "Grand Prix"),
      shortName: String(r.raceName || ""),
      date: raceDate,
      state,
      detail: results.length ? "Final" : state === "in" ? "Lights out" : "Scheduled",
      venue: `${circuit.circuitName || ""} \xB7 ${loc.locality || ""}`,
      competitors: top.length ? top : [
        { id: "grid", name: String(circuit.circuitName || "Grid"), abbr: "F1", homeAway: "home" }
      ],
      broadcasts: [resolveNetwork("F1 TV")],
      watchHref: "https://f1tv.formula1.com",
      source: "ergast"
    };
  });
  return { leagueId: "f1", asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: [] };
}
async function parseFootballData(leagueId, code) {
  const token = process.env.FOOTBALL_DATA_TOKEN;
  if (!token) throw new Error("football-data token not set");
  const payload = await getJson(
    `https://api.football-data.org/v4/competitions/${code}/matches?status=SCHEDULED,LIVE,FINISHED,IN_PLAY,PAUSED,TIMED`,
    { "X-Auth-Token": token }
  );
  const matches = payload.matches || [];
  const games = matches.slice(0, 40).map((m) => {
    const home = m.homeTeam || {};
    const away = m.awayTeam || {};
    const score = m.score || {};
    const full = score.fullTime || {};
    const status = String(m.status || "");
    const toComp = (t, side, sc) => ({
      id: String(t.id || ""),
      name: String(t.name || side),
      abbr: String(t.tla || t.shortName || ""),
      homeAway: side,
      score: sc != null ? String(sc) : void 0
    });
    return {
      id: `fd-${m.id}`,
      leagueId,
      sportId: "soccer",
      name: `${away.name} vs ${home.name}`,
      shortName: `${away.tla} @ ${home.tla}`,
      date: String(m.utcDate || ""),
      state: /IN_PLAY|LIVE|PAUSED/.test(status) ? "in" : /FINISH/.test(status) ? "post" : "pre",
      detail: status.replaceAll("_", " "),
      competitors: [toComp(away, "away", full.away), toComp(home, "home", full.home)],
      broadcasts: [resolveNetwork("YouTube")],
      watchHref: leagueById(leagueId)?.watch,
      source: "football-data"
    };
  });
  return { leagueId, asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: [] };
}
async function parseSportsDbDay(league, date) {
  const day = date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const payload = await getJson(`https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${day}`);
  const events = payload.events || [];
  const filtered = events.filter((e) => {
    if (!league) return true;
    const sport = String(e.strSport || "").toLowerCase();
    const name = String(e.strLeague || "").toLowerCase();
    return sport.includes(league.sportId) || name.includes(league.short.toLowerCase()) || name.includes(league.name.toLowerCase().slice(0, 8));
  });
  const games = filtered.slice(0, 30).map((e) => ({
    id: `tsdb-${e.idEvent}`,
    leagueId: league?.id || "world",
    sportId: league?.sportId || "olympic",
    name: String(e.strEvent || `${e.strHomeTeam} vs ${e.strAwayTeam}`),
    shortName: String(e.strEventAlternate || e.strEvent || ""),
    date: `${e.dateEvent || day}T${e.strTime || "00:00:00"}Z`,
    state: stateFrom(String(e.strStatus || ""), String(e.strProgress || e.strStatus || "")),
    detail: String(e.strStatus || ""),
    venue: String(e.strVenue || ""),
    competitors: [
      {
        id: String(e.idAwayTeam || "a"),
        name: String(e.strAwayTeam || "Away"),
        abbr: String(e.strAwayTeam || "").slice(0, 3).toUpperCase(),
        homeAway: "away",
        score: e.intAwayScore != null ? String(e.intAwayScore) : void 0
      },
      {
        id: String(e.idHomeTeam || "h"),
        name: String(e.strHomeTeam || "Home"),
        abbr: String(e.strHomeTeam || "").slice(0, 3).toUpperCase(),
        homeAway: "home",
        score: e.intHomeScore != null ? String(e.intHomeScore) : void 0
      }
    ],
    broadcasts: e.strVideo ? [{ name: "Official video", href: String(e.strVideo) }] : league ? [resolveNetwork("YouTube")] : [],
    watchHref: e.strVideo ? String(e.strVideo) : league?.watch,
    youtube: e.strVideo ? String(e.strVideo) : void 0,
    source: "thesportsdb"
  }));
  return { leagueId: league?.id || "world", asOf: (/* @__PURE__ */ new Date()).toISOString(), games, headlines: [] };
}
async function loadBoard(leagueId, date) {
  const league = leagueById(leagueId);
  if (!league) return { leagueId, asOf: (/* @__PURE__ */ new Date()).toISOString(), games: [], headlines: [], error: "Unknown league" };
  if (league.sportId === "esports") {
    try {
      return await loadEsportsBoard(leagueId);
    } catch (err) {
      return {
        leagueId,
        asOf: (/* @__PURE__ */ new Date()).toISOString(),
        games: [],
        headlines: [],
        error: err instanceof Error ? err.message : "esports feed quiet"
      };
    }
  }
  const stamp = date ? `&dates=${date.replaceAll("-", "")}` : "";
  const primary = [];
  const fallback = [];
  if (league.espnCdn) {
    primary.push(async () => {
      const url = `https://cdn.espn.com/core/${league.espnCdn}/scoreboard?xhr=1${stamp}`;
      const json = await getJson(url);
      return parseEspnBoard(league.id, league.sportId, json);
    });
  }
  if (league.espnSoccer) {
    primary.push(async () => {
      const url = `https://cdn.espn.com/core/soccer/scoreboard?xhr=1&league=${league.espnSoccer}${stamp}`;
      const json = await getJson(url);
      return parseEspnBoard(league.id, "soccer", json);
    });
  }
  if (league.mlb) {
    primary.push(async () => {
      const q = date ? `&date=${date}` : "";
      const json = await getJson(`https://statsapi.mlb.com/api/v1/schedule?sportId=1&hydrate=team,linescore,broadcasts${q}`);
      return parseMlb(json);
    });
  }
  if (league.nhl) {
    primary.push(async () => {
      const json = await getJson("https://api-web.nhle.com/v1/score/now");
      return parseNhl(json);
    });
  }
  if (league.f1) {
    primary.push(async () => {
      const json = await getJson("https://api.jolpi.ca/ergast/f1/current.json");
      return parseF1(json);
    });
  }
  if (league.footballData) {
    primary.push(() => parseFootballData(league.id, league.footballData));
  }
  fallback.push(() => parseSportsDbDay(league, date));
  let last = "No source";
  for (const fn of primary) {
    try {
      return await fn();
    } catch (err) {
      last = err instanceof Error ? err.message : "fetch failed";
    }
  }
  for (const fn of fallback) {
    try {
      const board = await fn();
      if (board.games.length || board.headlines.length) return board;
    } catch (err) {
      last = err instanceof Error ? err.message : "fetch failed";
    }
  }
  return {
    leagueId,
    asOf: (/* @__PURE__ */ new Date()).toISOString(),
    games: [],
    headlines: [],
    error: `Live feed quiet \u2014 official calendar still listed. (${last})`
  };
}
async function loadWorld(date) {
  const core = ["nfl", "nba", "mlb", "nhl", "f1", "wnba", "ncaaf", "ncaab"];
  const [boards, soccer, esports] = await Promise.all([
    Promise.all(
      core.map(
        (id) => loadBoard(id, date).catch(
          () => ({ leagueId: id, asOf: (/* @__PURE__ */ new Date()).toISOString(), games: [], headlines: [] })
        )
      )
    ),
    loadEspnSoccerAll(date).catch(() => []),
    loadEsportsBoard("esports").catch(
      () => ({ leagueId: "esports", asOf: (/* @__PURE__ */ new Date()).toISOString(), games: [], headlines: [] })
    )
  ]);
  const games = boards.flatMap((b) => b.games).concat(soccer).concat(esports.games);
  const headlines = boards.flatMap((b) => b.headlines).concat(esports.headlines).slice(0, 24);
  const seen = /* @__PURE__ */ new Set();
  const unique = games.filter((g) => {
    if (seen.has(g.id)) return false;
    seen.add(g.id);
    return true;
  });
  unique.sort((a, b) => {
    const rank = (s) => s === "in" ? 0 : s === "pre" ? 1 : 2;
    return rank(a.state) - rank(b.state) || a.date.localeCompare(b.date);
  });
  return { leagueId: "world", asOf: (/* @__PURE__ */ new Date()).toISOString(), games: unique, headlines };
}
async function loadHeadlines() {
  const urls = [
    "https://cdn.espn.com/core/nfl/scoreboard?xhr=1",
    "https://cdn.espn.com/core/nba/scoreboard?xhr=1",
    "https://cdn.espn.com/core/soccer/scoreboard?xhr=1"
  ];
  const lists = await Promise.all(
    urls.map(async (url) => {
      try {
        const json = await getJson(url);
        return parseEspnHeadlines(json);
      } catch {
        return [];
      }
    })
  );
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const h of lists.flat()) {
    if (!h.headline || seen.has(h.headline)) continue;
    seen.add(h.headline);
    out.push(h);
  }
  return out.slice(0, 32);
}
async function searchAll(q) {
  const needle = q.trim().toLowerCase();
  const sports = needle ? SPORTS.filter((s) => `${s.name} ${s.blurb} ${s.group}`.toLowerCase().includes(needle)) : SPORTS;
  const leagues = needle ? LEAGUES.filter((l) => `${l.name} ${l.short} ${l.region} ${l.sportId}`.toLowerCase().includes(needle)) : LEAGUES;
  let teams = [];
  let events = [];
  try {
    const world = await loadWorld();
    const games = (world.games || []).filter((g) => g.source !== "official-twitch" && g.competitors.length > 1);
    events = needle ? games.filter((g) => {
      const hay = `${g.name} ${g.shortName} ${g.leagueId} ${g.sportId} ${g.event || ""} ${g.competitors.map((c) => c.name).join(" ")}`.toLowerCase();
      return hay.includes(needle);
    }) : games.slice(0, 48);
  } catch {
    events = [];
  }
  if (needle.length >= 2) {
    try {
      const json = await getJson(
        `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(q.trim())}`
      );
      teams = (json.teams || []).slice(0, 12).map((t) => ({
        id: String(t.idTeam || ""),
        name: String(t.strTeam || ""),
        sport: String(t.strSport || ""),
        league: String(t.strLeague || ""),
        badge: typeof t.strBadge === "string" ? t.strBadge : void 0
      }));
    } catch {
      teams = [];
    }
  }
  return { sports, leagues, teams, events };
}
export {
  loadBoard,
  loadHeadlines,
  loadWorld,
  searchAll
};
