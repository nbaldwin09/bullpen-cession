import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { CalabiMark, NeemMark, BullpenMark, AorilaMark } from "@/components/wordmarks";
import { useBullpenTheme } from "@/components/bullpen/theme";

type Brand = "hub" | "bullpen" | "neem" | "calabi";

const NAV: Record<
  Brand,
  {
    home: string;
    name: string;
    cta?: { to: string; label: string };
    links: Array<{ to: string; label: string }>;
  }
> = {
  hub: {
    home: "/",
    name: "Aorila",
    links: [
      { to: "/", label: "Bullpen" },
      { to: "/", label: "NeemSeed" },
      { to: "/", label: "Calabi" },
    ],
  },
  bullpen: {
    home: "/",
    name: "Bullpen Cession",
    links: [{ to: "https://api.bullpencession.com", label: "API" }],
  },
  neem: {
    home: "/",
    name: "NeemSeed",
    links: [
      { to: "/about", label: "About" },
      { to: "/research", label: "Research" },
      { to: "/involved", label: "Get Involved" },
      { to: "/investors", label: "Investors" },
      { to: "/contact", label: "Contact" },
    ],
    cta: { to: "/shop", label: "Shop Seeds" },
  },
  calabi: {
    home: "/",
    name: "Calabi Group",
    links: [
      { to: "/compute", label: "Compute" },
      { to: "/storage", label: "Storage" },
      { to: "/status", label: "Status" },
    ],
  },
};

export function BrandShell({
  brand,
  children,
}: {
  brand: Brand;
  children: ReactNode;
}) {
  const nav = NAV[brand];
  const { theme } = useBullpenTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div data-brand={brand} data-template={brand === "bullpen" ? theme : undefined} className="min-h-dvh bg-bg text-fg">
      {brand === "bullpen" ? (
        <header className="bullpen-bar">
          <div className="bullpen-bar-inner">
            <Link to="/" className="bullpen-brand" aria-label="Bullpen Cession">
              <BullpenMark />
            </Link>
            <div className="bullpen-bar-links">
              <Link to="/search">Analytics</Link>
              <Link to="/esports">Esports</Link>
              <Link to="/dashboard">Desk</Link>
            </div>
            <nav>
              <Link to="/search" className="bc-mag" aria-label="Search">
                <Search size={18} strokeWidth={2.25} />
              </Link>
              <a className="ms-bar-cta" href="https://api.bullpencession.com">
                Get started
              </a>
            </nav>
          </div>
        </header>
      ) : (
        <header className="sticky top-0 z-40 border-b border-line bg-bg">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-6">
            <Link to={nav.home} className="shrink-0" onClick={() => setOpen(false)}>
              <Mark brand={brand} />
              <span className="sr-only">{nav.name}</span>
            </Link>
            <nav className="ml-auto hidden items-center gap-1 md:flex">
              {nav.links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="inline-flex h-10 items-center px-3 text-sm text-muted hover:text-fg"
                >
                  {l.label}
                </Link>
              ))}
              {nav.cta ? (
                <Link
                  to={nav.cta.to as "/"}
                  className="ml-2 inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
                >
                  {nav.cta.label}
                </Link>
              ) : null}
            </nav>
            {nav.cta ? (
              <Link
                to={nav.cta.to as "/"}
                className="ml-auto inline-flex h-10 items-center rounded-pill bg-accent px-4 text-sm font-medium text-accent-fg md:hidden"
              >
                {nav.cta.label}
              </Link>
            ) : null}
            <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-sm text-fg md:hidden ${nav.cta ? "" : "ml-auto"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>
      )}

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-fg/20"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed right-0 top-0 z-50 flex h-dvh w-80 flex-col border-l border-line bg-bg">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-line px-4">
              <p className="text-sm font-semibold tracking-tight">Menu</p>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-3 py-2">
              {nav.links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="inline-flex h-11 items-center rounded-md px-3 text-sm hover:bg-surface-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              {nav.cta ? (
                <Link
                  to={nav.cta.to as "/"}
                  className="inline-flex h-11 items-center rounded-md px-3 text-sm hover:bg-surface-2"
                  onClick={() => setOpen(false)}
                >
                  {nav.cta.label}
                </Link>
              ) : null}
            </nav>
          </aside>
        </>
      ) : null}

      {children}
      {brand === "bullpen" ? <PoweredByAorila /> : null}
      {brand === "bullpen" ? <BullpenFooter /> : (
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between lg:px-6">
            <p>{nav.name}</p>
            <p>An Aorila company</p>
          </div>
        </footer>
      )}
    </div>
  );
}

function Mark({ brand }: { brand: Brand }) {
  if (brand === "bullpen") return <BullpenMark />;
  if (brand === "neem") return <NeemMark />;
  if (brand === "calabi") return <CalabiMark className="h-9" />;
  return <AorilaMark className="h-7" />;
}

function BullpenFooter() {
  return (
    <footer className="bullpen-foot">
      <div className="bullpen-foot-grid">
        <div>
          <a href="https://www.bullpencession.com" aria-label="Bullpen Cession">
            <BullpenMark />
          </a>
          <p>Sports analytics technology.</p>
        </div>
        <div>
          <h2>Analytics</h2>
          <Link to="/search">Live board</Link>
          <Link to="/dashboard">Research desk</Link>
          <Link to="/news">News</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/esports">Esports</Link>
        </div>
        <div>
          <h2>Company</h2>
          <a href="https://api.bullpencession.com">API</a>
          <a href="mailto:desk@bullpencession.com">Contact</a>
        </div>
        <div>
          <h2>Legal</h2>
          <Link to="/terms">Terms of use</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="bullpen-foot-bar">
        <span>© 2026 Bullpen Cession. All rights reserved.</span>
        <span>English (United States)</span>
      </div>
    </footer>
  );
}

function PoweredByAorila() {
  return (
    <a
      href="https://aorila.com"
      className="fixed bottom-4 right-4 z-30 inline-flex h-9 items-center gap-2 rounded-md bg-surface px-3 ring-1 ring-line"
      aria-label="Powered by Aorila"
    >
      <span className="text-[11px] tracking-[0.04em] text-muted">Powered by</span>
      <AorilaMark className="h-4" />
    </a>
  );
}
