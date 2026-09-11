# Bullpen Cession

Live scores, official esports streams, and in-site tournament feeds.

An Aorila company. Production domain: **bullpencession.com**

This house has **its own Vercel project** (linked to this repository) and **its own Supabase project**. Do not reuse the Bullpen, NeemSeed, or Calabi database on another house.

## What this is

A worldwide sports index. Live scores and calendars are pulled server-side from ESPN CDN, MLB StatsAPI, NHL, Jolpi/Ergast F1, and TheSportsDB. The watch desk plays official YouTube, Twitch, HLS, and MP4 links in-site and deep-links every other network to the rights holder. Unauthorized feeds are not hosted.

## 1. Create this house's Supabase project

1. New project named **bullpen-cession** (a new project — not the other two houses).
2. SQL editor → paste and run `supabase/schema.sql`.
3. Settings → API: copy **Project URL** and **service_role** key.

## 2. This house's Vercel project

Import **this repository only** as a Vercel project (or reuse the one already linked). Framework: Vite. Build: `npm run build`. Output: `dist`.

Environment:

- `SUPABASE_URL` = this house's Project URL
- `SUPABASE_SERVICE_ROLE_KEY` = this house's service_role key

Custom domains: `bullpencession.com` and `www.bullpencession.com`

bullpencession.com currently sits on GoDaddy / Framer. In Vercel → this project → Domains, add the apex and www, then point DNS at Vercel.

Until Supabase env is set, the site still boots and keeps a process-local fallback.

## Local

```bash
npm install
npm run build && npm start
```

Sister houses (separate Vercel, separate Supabase):

- [bullpen-cession](https://github.com/nbaldwin09/bullpen-cession) — bullpencession.com
- [neemseed](https://github.com/nbaldwin09/neemseed) — neemseed.net
- [calabi-group](https://github.com/nbaldwin09/calabi-group) — calabigroup.com
