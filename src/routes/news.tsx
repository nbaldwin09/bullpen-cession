import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Page } from "@/components/bullpen/page";
import { getHeadlines } from "@/lib/sports/api";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News — Bullpen Cession" }] }),
  component: NewsPage,
});

function NewsPage() {
  const wire = useQuery({
    queryKey: ["headlines"],
    queryFn: () => getHeadlines(),
    refetchInterval: 120_000,
  });
  const items = wire.data || [];
  return (
    <Page title="News" lead="Headlines from the same sources as the scores. Links stay with the publisher.">
      {wire.isLoading ? <p className="text-sm text-muted">Loading headlines…</p> : null}
      {!wire.isLoading && items.length === 0 ? <p className="text-sm text-muted">No headlines right now.</p> : null}
      <ul className="divide-y divide-line border-y border-line">
        {items.map((h) => (
          <li key={h.id} className="py-4">
            {h.href ? (
              <a href={h.href} target="_blank" rel="noreferrer" className="text-sm hover:text-muted">
                {h.headline}
              </a>
            ) : (
              <span className="text-sm">{h.headline}</span>
            )}
            {h.published ? <p className="mt-1 text-xs text-faint">{h.published}</p> : null}
          </li>
        ))}
      </ul>
    </Page>
  );
}
