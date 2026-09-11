export async function getBoard({ data }: { data: { leagueId: string; date?: string } }) {
  const r = await fetch("/api/board", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
  return r.json();
}
export async function getWorldBoard({ data }: { data: { date?: string } }) {
  const r = await fetch("/api/world", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data || {}) });
  return r.json();
}
export async function getHeadlines() {
  const r = await fetch("/api/headlines", { method: "POST" });
  return r.json();
}
export async function searchSports({ data }: { data: { q: string } }) {
  const r = await fetch("/api/search", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
  return r.json();
}
