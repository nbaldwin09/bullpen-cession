import { Routes, Route } from "react-router-dom";
import { Route as R0 } from "./routes/careers";
import { Route as R1 } from "./routes/contact";
import { Route as R2 } from "./routes/dashboard";
import { Route as R3 } from "./routes/docs";
import { Route as R4 } from "./routes/esports";
import { Route as R5 } from "./routes/game.$gameId";
import { Route as R6 } from "./routes/index";
import { Route as R7 } from "./routes/league.$leagueId";
import { Route as R8 } from "./routes/news";
import { Route as R9 } from "./routes/privacy";
import { Route as R10 } from "./routes/route";
import { Route as R11 } from "./routes/schedule";
import { Route as R12 } from "./routes/search";
import { Route as R13 } from "./routes/sports.$sportId";
import { Route as R14 } from "./routes/sports.index";
import { Route as R15 } from "./routes/templates";
import { Route as R16 } from "./routes/terms";
import { Route as R17 } from "./routes/watch";

export default function App() {
  const Layout = R10.component;
  const api = typeof window !== "undefined" && window.location.hostname.startsWith("api.");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="careers" element={<R0.component />} />
        <Route path="contact" element={<R1.component />} />
        <Route path="dashboard" element={<R2.component />} />
        <Route path="docs" element={<R3.component />} />
        <Route path="esports" element={<R4.component />} />
        <Route path="game/:gameId" element={<R5.component />} />
        <Route index element={api ? <R3.component /> : <R6.component />} />
        <Route path="league/:leagueId" element={<R7.component />} />
        <Route path="news" element={<R8.component />} />
        <Route path="privacy" element={<R9.component />} />
        <Route path="schedule" element={<R11.component />} />
        <Route path="search" element={<R12.component />} />
        <Route path="sports/:sportId" element={<R13.component />} />
        <Route path="sports" element={<R14.component />} />
        <Route path="templates" element={<R15.component />} />
        <Route path="terms" element={<R16.component />} />
        <Route path="watch" element={<R17.component />} />
      </Route>
    </Routes>
  );
}
