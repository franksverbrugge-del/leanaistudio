import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { articles } from "@/content/kennisbank";
import { cases } from "@/content/projecten";
import { toepassingen } from "@/content/toepassingen";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/website-laten-maken", priority: 0.9 },
    { path: "/ai-automatisering", priority: 0.9 },
    { path: "/webapplicatie-laten-maken", priority: 0.8 },
    { path: "/website-vernieuwen", priority: 0.8 },
    { path: "/beheer-en-onderhoud", priority: 0.6 },
    { path: "/prijzen", priority: 0.8 },
    { path: "/werkwijze", priority: 0.7 },
    { path: "/cases", priority: 0.7 },
    { path: "/kennisbank", priority: 0.6 },
    { path: "/over", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/websitecheck", priority: 0.6 },
    { path: "/automatiseringsscan", priority: 0.6 },
    { path: "/privacy", priority: 0.2 },
    { path: "/voorwaarden", priority: 0.2 },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p.path === "/" ? "" : p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...toepassingen.map((t) => ({
      url: `${SITE_URL}/ai-automatisering/${t.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...cases.map((c) => ({
      url: `${SITE_URL}/cases/${c.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/kennisbank/${a.slug}`,
      lastModified: new Date(`${a.updated ?? a.date}T12:00:00Z`),
      priority: 0.6,
    })),
  ];
}
