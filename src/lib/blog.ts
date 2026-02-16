import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/data/content/blog");

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
      category: data.category,
      tags: data.tags ?? [],
      slug,
    } as BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated,
    category: data.category,
    tags: data.tags ?? [],
    slug,
    content,
  };
}
