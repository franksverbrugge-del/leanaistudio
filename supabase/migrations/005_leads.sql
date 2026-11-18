-- Aanvragen via het contactformulier, de websitecheck en de automatiseringsscan.
-- Bezoekers mogen alleen toevoegen; lezen kan alleen een ingelogde beheerder.

create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  type text not null check (type in ('contact', 'websitecheck', 'scan')),
  naam text default '',
  bedrijf text default '',
  email text not null,
  telefoon text default '',
  website text default '',
  onderwerp text default '',
  bericht text default '',
  belmoment text default '',
  scan text default '',
  status text default 'nieuw'
);

alter table leads enable row level security;

create policy "Bezoekers kunnen een aanvraag toevoegen"
  on leads for insert
  to anon
  with check (true);

create policy "Beheerders kunnen aanvragen lezen en bijwerken"
  on leads for all
  to authenticated
  using (true)
  with check (true);
