import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] },
      // AI-zoekmachines expliciet toegestaan, zodat we in hun antwoorden kunnen verschijnen.
      { userAgent: ["OAI-SearchBot", "PerplexityBot", "ChatGPT-User"], allow: "/", disallow: ["/admin", "/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
