alter table cases
  add column if not exists featured boolean default false,
  add column if not exists client_quote text,
  add column if not exists client_quote_author text,
  add column if not exists duration text,
  add column if not exists category text,
  add column if not exists hero_image_url text,
  add column if not exists result_stat_1_value text,
  add column if not exists result_stat_1_label text,
  add column if not exists result_stat_2_value text,
  add column if not exists result_stat_2_label text;
