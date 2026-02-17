import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MdxContent } from "@/components/blog/MdxContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/schema";
import { ogImageUrl } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | On The Block Digital Blog`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [
        {
          url: ogImageUrl(post.title, post.description),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl(post.title, post.description)],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const schema = articleSchema(
    post.title,
    post.date,
    post.updated ?? post.date,
    post.description
  );

  return (
    <article className="px-4 py-20">
      <JsonLd data={schema} />
      <div className="mx-auto max-w-2xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text/65">
          <Link href="/blog" className="hover:text-accent">
            Blog
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{post.title}</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-text/65">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <Link
              href={`/blog/category/${post.category}`}
              className="hover:text-accent"
            >
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </Link>
          </div>
          <h1 className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-text/70">{post.description}</p>
        </header>

        <div className="prose-custom">
          <MdxContent source={post.content} />
        </div>
      </div>
    </article>
  );
}
