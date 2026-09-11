import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BoardGrid } from "@/components/bullpen/page";
import { SearchField } from "@/components/bullpen/search-field";
import { searchSports } from "@/lib/sports/api";
import { isReallyLive } from "@/lib/sports/live";

type SearchQ = { q?: string };

export const Route = createFileRoute("/search")({
  validateSearch: (raw: Record<string, unknown>): SearchQ => ({
    q: typeof raw.q === "string" ? raw.q : "",
  }),
  head: () => ({ meta: [{ title: "Search — Bullpen Cession" }] }),
  component: SearchPage,
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const navigate = useNavigate();
  const [value, setValue] = useState(q);
  const [debounced, setDebounced] = useState(q.trim());

  useEffect(() => {
    const t = window.setTimeout(() => {
      const next = value.trim();
      setDebounced(next);
      void navigate({ to: "/search", search: { q: next }, replace: true });
    }, 120);
    return () => window.clearTimeout(t);
  }, [value]);

  const result = useQuery({
    queryKey: ["search", debounced],
    queryFn: () => searchSports({ data: { q: debounced } }),
  });
  const data = result.data;
  const live = (data?.events || []).filter((g) => isReallyLive(g));
  const rest = (data?.events || []).filter((g) => !isReallyLive(g));
  const go = (next: string) => {
    setValue(next);
    void navigate({ to: "/search", search: { q: next }, replace: true });
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 pb-16 lg:px-6">
      <SearchField value={value} onChange={setValue} onSubmit={go} autoFocus size="lg" />

      {result.isLoading && !data ? <p className="mt-8 text-sm text-muted">Searching…</p> : null}

      {live.length ? (
        <section className="mt-8">
          <h2 className="mb-2 text-sm font-semibold tracking-tight">Live</h2>
          <BoardGrid games={live} empty="" />
        </section>
      ) : null}

      {rest.length ? (
        <section className="mt-8">
          <h2 className="mb-2 text-sm font-semibold tracking-tight">{debounced ? "Games" : "Board"}</h2>
          <BoardGrid games={rest} empty="" />
        </section>
      ) : null}

      {data?.sports.length ? (
        <section className="mt-8">
          <h2 className="mb-2 text-sm font-semibold tracking-tight">Sports</h2>
          <div className="flex flex-wrap gap-2">
            {data.sports.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.name)}
                className="inline-flex h-9 items-center rounded-md bg-surface px-3 text-sm ring-1 ring-line hover:bg-surface-2"
              >
                {s.name}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {data?.leagues.length ? (
        <section className="mt-8">
          <h2 className="mb-2 text-sm font-semibold tracking-tight">Leagues</h2>
          <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-line">
            {data.leagues.map((l) => (
              <Link
                key={l.id}
                to="/search"
                search={{ q: l.short }}
                className="flex items-center justify-between border-b border-line px-4 py-3 last:border-b-0 hover:bg-surface-2"
              >
                <span>
                  <span className="block text-sm font-medium">{l.name}</span>
                  <span className="text-xs text-faint">{l.region}</span>
                </span>
                <span className="text-xs text-muted">{l.short}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {data?.teams.length ? (
        <section className="mt-8">
          <h2 className="mb-2 text-sm font-semibold tracking-tight">Teams</h2>
          <div className="overflow-hidden rounded-lg bg-surface ring-1 ring-line">
            {data.teams.map((t) => (
              <Link
                key={t.id}
                to="/search"
                search={{ q: t.name }}
                className="flex items-center gap-3 border-b border-line px-4 py-3 last:border-b-0 hover:bg-surface-2"
              >
                {t.badge ? <img src={t.badge} alt="" className="h-7 w-7 object-contain" /> : null}
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="text-xs text-faint">
                    {t.sport} · {t.league}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {debounced && !result.isLoading && !data?.sports.length && !data?.leagues.length && !data?.teams.length && !data?.events.length ? (
        <p className="mt-8 text-sm text-muted">No results for “{debounced}”.</p>
      ) : null}
    </main>
  );
}
