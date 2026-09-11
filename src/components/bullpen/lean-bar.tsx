import { deskLean } from "@/lib/sports/lean";
import type { Game } from "@/lib/sports/types";
import { cn } from "@/lib/utils";

export function LeanBar({ game, compact = false }: { game: Game; compact?: boolean }) {
  const lean = deskLean(game);
  return (
    <div className={cn("min-w-0", compact ? "mt-2" : "mt-4")}>
      {!compact ? (
        <div className="mb-1.5 flex items-baseline justify-between gap-3 text-xs text-muted">
          <span>{lean.label}</span>
          <span className="tabular-nums">
            {lean.away} / {lean.home}
          </span>
        </div>
      ) : null}
      <div className="flex h-1 overflow-hidden rounded-pill bg-surface-2" aria-hidden>
        <div className="bg-fg transition-[width] duration-500" style={{ width: `${lean.away}%` }} />
        <div className="bg-accent transition-[width] duration-500" style={{ width: `${lean.home}%` }} />
      </div>
    </div>
  );
}
