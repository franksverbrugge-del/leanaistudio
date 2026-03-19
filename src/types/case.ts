export interface Case {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  image_url: string | null;
  published_at: string;
  featured: boolean;
  client_quote: string | null;
  client_quote_author: string | null;
  duration: string | null;
  category: string | null;
  hero_image_url: string | null;
  result_stat_1_value: string | null;
  result_stat_1_label: string | null;
  result_stat_2_value: string | null;
  result_stat_2_label: string | null;
}
