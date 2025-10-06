import type { MetadataRoute } from "next";
import { siteConfig } from "./config";
import { fetchBlogs } from "./utils/fetchWordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  try {
    const posts = await fetchBlogs();
    const blogRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch {
    return staticRoutes;
  }
}


