import { MetadataRoute } from "next";
import { fetchBlogs } from "./utils/fetchWordpress";
import { TPost } from "./utils/types";

export async function generateSitemaps() {
    const sitemapIndexes = [{ id: 0 }]

    return sitemapIndexes;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const posts = await fetchBlogs();

    return [
      {
        url: "https://nasir-portfolio.vercel.app",
        lastModified: new Date(),
      },

      ...posts.map((post: TPost) => ({
        url: `https://nasir-portfolio.vercel.app/blogs/${post.slug}`,
        lastModified: new Date(post.modified_gmt),
        priority: 0.8,
      })),
    ];
}