-- Pagina's tabel
create table pages (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  meta_description text default '',
  content text default '',
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table pages enable row level security;

create policy "Public pages are viewable by everyone"
  on pages for select using (published = true);

create policy "Only authenticated users can modify pages"
  on pages for all using (auth.role() = 'authenticated');

-- Diensten tabel
create table diensten (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text default '',
  content text default '',
  icon text default '',
  published boolean default true,
  order_index integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table diensten enable row level security;

create policy "Public diensten are viewable by everyone"
  on diensten for select using (published = true);

create policy "Only authenticated users can modify diensten"
  on diensten for all using (auth.role() = 'authenticated');

-- Navigatie tabel
create table navigation_items (
  id uuid default gen_random_uuid() primary key,
  label text not null,
  url text not null,
  order_index integer default 0,
  created_at timestamptz default now()
);

alter table navigation_items enable row level security;

create policy "Navigation is viewable by everyone"
  on navigation_items for select using (true);

create policy "Only authenticated users can modify navigation"
  on navigation_items for all using (auth.role() = 'authenticated');

-- Supabase Storage bucket voor media
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "Public media access"
  on storage.objects for select using (bucket_id = 'media');

create policy "Authenticated users can upload media"
  on storage.objects for insert with check (
    bucket_id = 'media' and auth.role() = 'authenticated'
  );

create policy "Authenticated users can delete media"
  on storage.objects for delete using (
    bucket_id = 'media' and auth.role() = 'authenticated'
  );
