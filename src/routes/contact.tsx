import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/bullpen/page";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Bullpen Cession" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Page title="Contact" lead="Press, partnerships, and the board.">
      <ul className="space-y-3 text-sm">
        <li>
          Desk{" "}
          <a href="mailto:desk@bullpencession.com" className="underline decoration-accent underline-offset-4">
            desk@bullpencession.com
          </a>
        </li>
        <li>
          Press{" "}
          <a href="mailto:press@bullpencession.com" className="underline decoration-accent underline-offset-4">
            press@bullpencession.com
          </a>
        </li>
        <li>
          Parent company{" "}
          <a href="https://aorila.com" className="underline decoration-accent underline-offset-4">
            aorila.com
          </a>
        </li>
      </ul>
    </Page>
  );
}
