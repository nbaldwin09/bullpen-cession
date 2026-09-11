-- Bullpen Cession — own Supabase project. Do not run this on NeemSeed or Calabi.
create table if not exists desks (
  id text primary key,
  email text unique not null,
  key text unique not null,
  org text not null,
  created_at timestamptz not null default now()
);
