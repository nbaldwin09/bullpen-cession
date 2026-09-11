import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BrandShell } from "@/components/brand-shell";
import { BullpenThemeProvider } from "@/components/bullpen/theme";

export const Route = createFileRoute("/")({
  component: () => (
    <BullpenThemeProvider>
      <BrandShell brand="bullpen">
        <Outlet />
      </BrandShell>
    </BullpenThemeProvider>
  ),
});
