create table cases (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  client text not null,
  description text not null,
  challenge text not null,
  solution text not null,
  result text not null,
  tags text[] default '{}',
  image_url text,
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

alter table cases enable row level security;

create policy "Public cases are viewable by everyone"
  on cases for select using (true);

create policy "Only authenticated users can modify cases"
  on cases for all using (auth.role() = 'authenticated');
