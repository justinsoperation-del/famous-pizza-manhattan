import type { MetadataRoute } from "next";

// PENDING — swap for the final branded production domain before public launch.
const SITE_URL = "https://famous-pizza-manhattan.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
