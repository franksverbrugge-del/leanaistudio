create table team (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text,
  email text,
  photo_url text,
  bio text,
  order_index integer default 0,
  created_at timestamptz default now()
);

alter table team enable row level security;

create policy "Public read" on team for select using (true);

create policy "Auth write" on team for all using (auth.role() = 'authenticated');
