import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

/**
 * NOTE: SITE_ORIGIN currently points at the live PREVIEW url
 * (justinsoperation.chatgpt.site), not a final branded domain — none has
 * been decided yet. Update lib/site.ts's SITE_ORIGIN once the owner
 * approves a production domain, which will regenerate this automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/order", "/location-hours", "/contact"];

  return routes.map((route) => ({
    url: SITE_ORIGIN + route,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
