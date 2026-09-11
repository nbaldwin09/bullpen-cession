import { AFFILIATES } from "@/lib/sports/affiliates";

export function AdBar() {
  if (!AFFILIATES.length) return null;
  return (
    <div className="bc-ads">
      <div className="bc-ads-inner">
        {AFFILIATES.map((a) => (
          <a key={a.id} className="bc-ad" href={a.href} target="_blank" rel="noopener noreferrer sponsored">
            <span>{a.book}</span>
            <b>{a.offer}</b>
          </a>
        ))}
        <span className="bc-ads-note">21+ · Ads · 1-800-GAMBLER</span>
      </div>
    </div>
  );
}
