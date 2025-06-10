import { TPost } from "./types";

export const staticBlogs: TPost[] = [
  {
    id: 1,
    date: "2024-03-15T10:00:00",
    date_gmt: "2024-03-15T10:00:00",
    guid: { rendered: "https://example.com/blog/1" },
    modified: "2024-03-15T10:00:00",
    modified_gmt: "2024-03-15T10:00:00",
    slug: "getting-started-with-nextjs",
    status: "publish",
    type: "post",
    link: "https://example.com/blog/getting-started-with-nextjs",
    title: { rendered: "Getting Started with Next.js" },
    content: {
      rendered: "Learn how to build modern web applications with Next.js...",
      protected: false,
    },
    excerpt: {
      rendered: "A comprehensive guide to getting started with Next.js",
      protected: false,
    },
    author: 1,
    featured_media: 0,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: { footnotes: "" },
    categories: [1],
    tags: [1, 2],
    class_list: [],
    _links: {
      self: [{ href: "https://example.com/wp-json/wp/v2/posts/1" }],
      collection: [{ href: "https://example.com/wp-json/wp/v2/posts" }],
      about: [{ href: "https://example.com/wp-json/wp/v2/types/post" }],
      author: [
        { embeddable: true, href: "https://example.com/wp-json/wp/v2/users/1" },
      ],
      replies: [
        {
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/comments?post=1",
        },
      ],
      "version-history": [
        {
          count: 0,
          href: "https://example.com/wp-json/wp/v2/posts/1/revisions",
        },
      ],
      "predecessor-version": [
        {
          id: 0,
          href: "https://example.com/wp-json/wp/v2/posts/1/revisions/0",
        },
      ],
      "wp:attachment": [
        { href: "https://example.com/wp-json/wp/v2/media?parent=1" },
      ],
      "wp:term": [
        {
          taxonomy: "category",
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/categories?post=1",
        },
        {
          taxonomy: "post_tag",
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/tags?post=1",
        },
      ],
      curies: [
        { name: "wp", href: "https://api.w.org/{rel}", templated: true },
      ],
    },
  },
  {
    id: 2,
    date: "2024-03-10T10:00:00",
    date_gmt: "2024-03-10T10:00:00",
    guid: { rendered: "https://example.com/blog/2" },
    modified: "2024-03-10T10:00:00",
    modified_gmt: "2024-03-10T10:00:00",
    slug: "mastering-typescript",
    status: "publish",
    type: "post",
    link: "https://example.com/blog/mastering-typescript",
    title: { rendered: "Mastering TypeScript" },
    content: {
      rendered: "Deep dive into TypeScript features and best practices...",
      protected: false,
    },
    excerpt: {
      rendered: "Learn advanced TypeScript concepts and patterns",
      protected: false,
    },
    author: 1,
    featured_media: 0,
    comment_status: "open",
    ping_status: "open",
    sticky: false,
    template: "",
    format: "standard",
    meta: { footnotes: "" },
    categories: [1],
    tags: [2, 3],
    class_list: [],
    _links: {
      self: [{ href: "https://example.com/wp-json/wp/v2/posts/2" }],
      collection: [{ href: "https://example.com/wp-json/wp/v2/posts" }],
      about: [{ href: "https://example.com/wp-json/wp/v2/types/post" }],
      author: [
        { embeddable: true, href: "https://example.com/wp-json/wp/v2/users/1" },
      ],
      replies: [
        {
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/comments?post=2",
        },
      ],
      "version-history": [
        {
          count: 0,
          href: "https://example.com/wp-json/wp/v2/posts/2/revisions",
        },
      ],
      "predecessor-version": [
        {
          id: 0,
          href: "https://example.com/wp-json/wp/v2/posts/2/revisions/0",
        },
      ],
      "wp:attachment": [
        { href: "https://example.com/wp-json/wp/v2/media?parent=2" },
      ],
      "wp:term": [
        {
          taxonomy: "category",
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/categories?post=2",
        },
        {
          taxonomy: "post_tag",
          embeddable: true,
          href: "https://example.com/wp-json/wp/v2/tags?post=2",
        },
      ],
      curies: [
        { name: "wp", href: "https://api.w.org/{rel}", templated: true },
      ],
    },
  },
];
