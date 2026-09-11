/**
 * Paste your sportsbook referral URLs into `href`.
 * Display names and offer lines match the chips Flashscore / theScore / Action use.
 * This is affiliate inventory, not a book we operate.
 */
export type Affiliate = {
  id: string;
  book: string;
  offer: string;
  href: string;
};

export const AFFILIATES: Affiliate[] = [
  { id: "dk", book: "DraftKings", offer: "Bet $5, Get $200", href: "https://sportsbook.draftkings.com" },
  { id: "fd", book: "FanDuel", offer: "Win $200 back", href: "https://sportsbook.fanduel.com" },
  { id: "mgm", book: "BetMGM", offer: "$1,500 first bet", href: "https://sports.betmgm.com" },
  { id: "czr", book: "Caesars", offer: "First bet on us", href: "https://www.caesars.com/sportsbook" },
  { id: "espn", book: "ESPN BET", offer: "Boost your first", href: "https://espnbet.com" },
  { id: "fan", book: "Fanatics", offer: "$100 bonus bet", href: "https://sportsbook.fanatics.com" },
];
