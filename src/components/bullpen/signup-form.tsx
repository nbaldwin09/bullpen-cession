import { type FormEvent, useState } from "react";
import { provisionDesk } from "@/lib/sports/desk";

export function SignupForm({ onReady }: { onReady: () => void }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "bad">("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const next = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next)) {
      setState("bad");
      return;
    }
    setState("sending");
    await provisionDesk(next);
    onReady();
  };

  return (
    <form className="bc-signup" onSubmit={(e) => void submit(e)}>
      <p>Enter a work email. We open a live desk on this machine — analytics, integrity, and an API key.</p>
      <input
        type="email"
        name="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "bad") setState("idle");
        }}
        placeholder="Email"
        aria-label="Email"
      />
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Opening desk..." : "Open dashboard"}
      </button>
      {state === "bad" ? <p className="bc-signup-bad">Need a real email.</p> : null}
    </form>
  );
}
