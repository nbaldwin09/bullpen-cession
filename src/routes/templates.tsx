import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { THEMES, type BullpenTheme, useBullpenTheme } from "@/components/bullpen/theme";

export const Route = createFileRoute("/templates")({
  head: () => ({ meta: [{ title: "Templates — Bullpen Cession" }] }),
  component: TemplatesPage,
});

function TemplatesPage() {
  const { theme, setTheme } = useBullpenTheme();
  const navigate = useNavigate();
  const pick = (id: BullpenTheme) => {
    setTheme(id);
    void navigate({ to: "/" });
  };
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 pb-16 lg:px-6">
      <h1 className="text-xl font-semibold tracking-tight">Templates</h1>
      <p className="mt-2 text-sm text-muted">Three looks. Same search. Pick one.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => pick(t.id)}
            className={
              theme === t.id
                ? "rounded-lg bg-surface p-5 text-left ring-2 ring-accent"
                : "rounded-lg bg-surface p-5 text-left ring-1 ring-line hover:bg-surface-2"
            }
          >
            <Swatch id={t.id} />
            <p className="mt-4 text-sm font-semibold tracking-tight">{t.name}</p>
            <p className="mt-1 text-sm text-muted">{t.blurb}</p>
            <p className="mt-4 text-xs font-medium text-accent">{theme === t.id ? "In use" : "Use this"}</p>
          </button>
        ))}
      </div>
    </main>
  );
}

function Swatch({ id }: { id: BullpenTheme }) {
  if (id === "espn") {
    return (
      <span className="flex h-16 overflow-hidden rounded-md">
        <span className="w-1/5 bg-fg" />
        <span className="w-1/5 bg-accent" />
        <span className="w-3/5 bg-surface-2" />
      </span>
    );
  }
  if (id === "book") {
    return (
      <span className="flex h-16 overflow-hidden rounded-md bg-media">
        <span className="m-3 w-1/3 rounded-sm bg-accent" />
      </span>
    );
  }
  return (
    <span className="flex h-16 items-end overflow-hidden rounded-md bg-surface-2 ring-1 ring-line">
      <span className="m-3 h-6 w-2/3 rounded-sm bg-accent" />
    </span>
  );
}
