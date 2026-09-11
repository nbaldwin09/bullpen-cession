import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SignupForm } from "@/components/bullpen/signup-form";
import { awayOf, deskLean, homeOf } from "@/lib/sports/lean";
import { clearDesk, deskKpis, readDesk, type DeskSession } from "@/lib/sports/desk";
import { getWorldBoard } from "@/lib/sports/api";
import { leagueById } from "@/lib/sports/catalog";
import { formatClock } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Desk — Bullpen Cession" }] }),
  component: DashboardPage,
});

type Pane = "overview" | "live" | "security" | "api";

export function DashboardPage() {
  const navigate = useNavigate();
  const [desk, setDesk] = useState<DeskSession | null>(null);
  const [ready, setReady] = useState(false);
  const [pane, setPane] = useState<Pane>("overview");

  useEffect(() => {
    setDesk(readDesk());
    setReady(true);
  }, []);

  const world = useQuery({
    queryKey: ["world", "desk"],
    queryFn: () => getWorldBoard({ data: {} }),
    refetchInterval: 15_000,
    enabled: Boolean(desk),
  });

  if (!ready) return <main className="ms-dash" />;
  if (!desk) {
    return (
      <main className="bullpen-home">
        <SignupForm
          onReady={() => {
            setDesk(readDesk());
            void navigate({ to: "/dashboard" });
          }}
        />
      </main>
    );
  }

  const k = deskKpis(world.data?.games || [], world.data?.asOf);
  const asOf = world.data?.asOf ? formatClock(world.data.asOf) : "—";

  return (
    <main className="ms-dash">
      <header className="ms-dash-top">
        <div>
          <p className="ms-kicker">Desk</p>
          <h1>{desk.org}</h1>
          <p>
            {desk.email} · opened {new Date(desk.created_at).toUTCString()}
          </p>
        </div>
        <p className="ms-dash-asof">Board {asOf}</p>
      </header>

      <div className="ms-kpis">
        <div>
          <b>{world.isLoading && !world.data ? "—" : k.live}</b>
          <span>Live now</span>
        </div>
        <div>
          <b>{world.isLoading && !world.data ? "—" : k.total}</b>
          <span>On the board</span>
        </div>
        <div>
          <b>{world.isLoading && !world.data ? "—" : k.leagues}</b>
          <span>Leagues</span>
        </div>
        <div>
          <b>{k.ageSec ? `${k.ageSec}s` : "—"}</b>
          <span>Feed age</span>
        </div>
      </div>

      <nav className="ms-tabs">
        {(
          [
            ["overview", "Overview"],
            ["live", "Live"],
            ["security", "Security"],
            ["api", "API"],
          ] as const
        ).map(([id, label]) => (
          <button key={id} type="button" className={pane === id ? "on" : ""} onClick={() => setPane(id)}>
            {label}
          </button>
        ))}
      </nav>

      {pane === "overview" ? (
        <section>
          <p className="ms-dash-lead">Live board for this desk. Counts refresh every 15 seconds.</p>
          <div className="ms-cards">
            <article>
              <h3>Analytics</h3>
              <p>
                {k.withLine} of {k.total} games carry a published lean or line from the feed.
              </p>
              <Link to="/search">Open search</Link>
            </article>
            <article>
              <h3>Integrity</h3>
              <p>
                {k.liveNoScore
                  ? `${k.liveNoScore} live games are missing a score. The rest of the live set is complete.`
                  : "Every live game on the board has a score."}
              </p>
              <button type="button" className="ms-text" onClick={() => setPane("security")}>
                Security pane
              </button>
            </article>
            <article>
              <h3>Official desk</h3>
              <p>{k.withStream} games have an official Twitch or YouTube desk attached. We do not host grey feeds.</p>
              <Link to="/esports">Esports</Link>
            </article>
            <article>
              <h3>Infrastructure</h3>
              <p>This desk and the API run on Aorila. Copy your key in the API pane.</p>
              <button type="button" className="ms-text" onClick={() => setPane("api")}>
                API pane
              </button>
            </article>
          </div>
        </section>
      ) : null}

      {pane === "live" ? (
        <section>
          {k.liveGames.length ? (
            <table className="ms-table">
              <thead>
                <tr>
                  <th>League</th>
                  <th>Match</th>
                  <th>Clock</th>
                  <th>Score</th>
                  <th>Lean</th>
                </tr>
              </thead>
              <tbody>
                {k.liveGames.map((g) => {
                  const away = awayOf(g);
                  const home = homeOf(g);
                  const lean = deskLean(g);
                  return (
                    <tr key={g.id}>
                      <td>{leagueById(g.leagueId)?.short || g.leagueId}</td>
                      <td>
                        <Link to="/game/$gameId" params={{ gameId: encodeURIComponent(g.id) }} search={{ league: g.leagueId }}>
                          {g.shortName || g.name}
                        </Link>
                      </td>
                      <td>{g.clock || g.detail || "Live"}</td>
                      <td>
                        {away?.score ?? "—"}–{home?.score ?? "—"}
                      </td>
                      <td>
                        {lean.away}–{lean.home}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="ms-dash-lead">{world.isLoading ? "Loading the board…" : "No live games on the board right now."}</p>
          )}
        </section>
      ) : null}

      {pane === "security" ? (
        <section>
          <p className="ms-dash-lead">
            Integrity on the live board. This is not a SOC 2 packet — it is what the feed is doing right now.
          </p>
          <table className="ms-table">
            <thead>
              <tr>
                <th>Check</th>
                <th>Status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feed freshness</td>
                <td>{k.ageSec <= 120 ? "Pass" : "Watch"}</td>
                <td>{k.ageSec ? `${k.ageSec}s since last board write` : "No timestamp yet"}</td>
              </tr>
              <tr>
                <td>Live scores</td>
                <td>{k.liveNoScore ? "Watch" : "Pass"}</td>
                <td>
                  {k.liveNoScore
                    ? `${k.liveNoScore} live games without a score`
                    : `${k.live} live games scored`}
                </td>
              </tr>
              <tr>
                <td>Official streams only</td>
                <td>Pass</td>
                <td>Grey feeds are not attached. {k.withStream} official desks on the board.</td>
              </tr>
              <tr>
                <td>Line coverage</td>
                <td>{k.total && k.withLine / k.total >= 0.3 ? "Pass" : "Watch"}</td>
                <td>
                  {k.withLine} / {k.total} games have a published lean or line
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      ) : null}

      {pane === "api" ? (
        <section>
          <p className="ms-dash-lead">Your desk key. Send it as x-desk-key. CORS is open. This is not a betting API.</p>
          <div className="ms-key">
            <code>{desk.key}</code>
            <button
              type="button"
              onClick={() => void navigator.clipboard.writeText(desk.key)}
            >
              Copy
            </button>
          </div>
          <pre className="ms-pre">{`curl https://www.bullpencession.com/api/world \\
  -H "x-desk-key: ${desk.key}"

curl https://www.bullpencession.com/api/search \\
  -H "content-type: application/json" \\
  -H "x-desk-key: ${desk.key}" \\
  -d '{"q":"nfl"}'`}</pre>
          <button
            type="button"
            className="ms-text"
            onClick={() => {
              clearDesk();
              setDesk(null);
            }}
          >
            Close this desk on this browser
          </button>
        </section>
      ) : null}
    </main>
  );
}
