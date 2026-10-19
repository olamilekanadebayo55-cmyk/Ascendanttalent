import type { MetadataRoute } from "next";
// Opportunity URLs will be added later, filtered through isPubliclyVisible().
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return ["", "/opportunities"].map((p) => ({ url: `${base}${p}` }));
}
