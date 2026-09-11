import { createContext, type ReactNode, useContext, useState } from "react";

export type BullpenTheme = "espn" | "poly" | "book";

const KEY = "bc-theme";

const Ctx = createContext<{
  theme: BullpenTheme;
  setTheme: (t: BullpenTheme) => void;
}>({ theme: "poly", setTheme: () => {} });

export function useBullpenTheme() {
  return useContext(Ctx);
}

export function BullpenThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<BullpenTheme>("poly");
  const setTheme = (t: BullpenTheme) => {
    if (typeof window !== "undefined") window.localStorage.setItem(KEY, t);
    setThemeState(t);
  };
  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}

export const THEMES: Array<{ id: BullpenTheme; name: string; blurb: string }> = [
  { id: "espn", name: "ESPN", blurb: "Black bar, red live, white scoreboard. Dense rows." },
  { id: "poly", name: "Polymarket", blurb: "White field, Inter, quiet cards. Search first." },
  { id: "book", name: "The Book", blurb: "Dark desk. Betting-pro density. Lime on live only." },
];
