import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["","/menu","/order","/location-hours","/contact"].map((p) => ({ url: `${SITE.siteOrigin}${p}`, lastModified: new Date(), changeFrequency: p === "/menu" ? "weekly" : "monthly", priority: p === "" ? 1 : .8 })) as MetadataRoute.Sitemap; }
