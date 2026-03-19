export interface Page {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Dienst {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  icon: string;
  published: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  order_index: number;
  created_at: string;
}

export interface MediaFile {
  name: string;
  url: string;
  created_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  photo_url: string | null;
  bio: string | null;
  order_index: number;
  created_at: string;
}
