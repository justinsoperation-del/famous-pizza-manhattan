import type { MetadataRoute } from "next";
import { siteStatus } from "@/lib/site-config";

const SITE_URL = "https://famous-pizza-manhattan.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Blocked while this remains a private owner-review demo. Flip to `allow`
      // only after the owner approves public launch and siteStatus.isPrivateDemo is false.
      disallow: siteStatus.isPrivateDemo ? "/" : undefined,
      allow: siteStatus.isPrivateDemo ? undefined : "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
