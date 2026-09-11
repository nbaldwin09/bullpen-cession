import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AdBar } from "@/components/bullpen/ad-bar";
import { SearchField } from "@/components/bullpen/search-field";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Bullpen Cession — Sports analytics" }],
  }),
  component: BullpenHome,
});

function BullpenHome() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const go = (next: string) => void navigate({ to: "/search", search: { q: next } });

  return (
    <main>
      <AdBar />

      <section className="ms-banner">
        <img src="/media/bullpen-hero.jpg" alt="" />
        <div className="ms-banner-copy">
          <p className="ms-kicker">Sports technology</p>
          <h1>Live analytics for every board</h1>
          <p>
            Scores, research, and official desks — NFL, soccer, and esports in one search. Bullpen Cession is sports
            analytics. Not a sportsbook.
          </p>
          <div className="ms-hero-actions">
            <Link className="ms-btn ms-btn-primary" to="/search">
              Open the board
            </Link>
            <Link className="ms-btn ms-btn-on-dark" to="/dashboard">
              Research desk
            </Link>
          </div>
        </div>
      </section>

      <section className="ms-section" id="analytics">
        <h2>Analytics</h2>
        <div className="ms-cards">
          <article>
            <div className="ms-card-media ms-card-media-board" />
            <h3>Live board</h3>
            <p>Games, leagues, and teams as they stand. Search is the product.</p>
            <Link to="/search">Learn more</Link>
          </article>
          <article id="desk">
            <div className="ms-card-media ms-card-media-navy" />
            <h3>Research desk</h3>
            <p>A live dashboard and API key when you leave an email. Coverage, integrity, the feed.</p>
            <Link to="/dashboard">Get started</Link>
          </article>
          <article id="esports">
            <div className="ms-card-media ms-card-media-dark" />
            <h3>Esports</h3>
            <p>Official tournament desks only — CS2, LoL, VALORANT, and the rest of the slate.</p>
            <Link to="/esports">Learn more</Link>
          </article>
          <article>
            <div className="ms-card-media ms-card-media-blue" />
            <h3>Data API</h3>
            <p>World board, search, and headlines. Same numbers the site uses.</p>
            <a href="https://api.bullpencession.com">Get started</a>
          </article>
        </div>
      </section>

      <section className="ms-find">
        <div>
          <h2>Find a match</h2>
          <p>Sport, league, team, or title.</p>
        </div>
        <SearchField value={q} onChange={setQ} size="lg" onSubmit={go} />
      </section>
    </main>
  );
}
