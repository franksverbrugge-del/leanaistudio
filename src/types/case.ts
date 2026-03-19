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
}
