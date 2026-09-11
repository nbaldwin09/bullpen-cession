import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { SignupForm } from "@/components/bullpen/signup-form";
import { readDesk } from "@/lib/sports/desk";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "Open a desk — Bullpen Cession" }] }),
  component: DocsPage,
});

export function DocsPage() {
  const navigate = useNavigate();
  const go = () => void navigate({ to: "/dashboard" });

  useEffect(() => {
    if (readDesk()) go();
  }, []);

  return (
    <main className="bullpen-home">
      <SignupForm onReady={go} />
    </main>
  );
}
