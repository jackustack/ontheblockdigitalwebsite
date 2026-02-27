import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ogImageUrl, SITE_URL } from "@/lib/utils";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "On The Block Digital blog — articles about local business growth, digital presence, SEO, and competing as a small business in Oakland and the Bay Area.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    images: [
      {
        url: ogImageUrl(
          "The Block Blog",
          "Tips, insights, and stories from the block."
        ),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionHeading
            as="h1"
            subtext="Tips, insights, and stories from the block."
          >
            The Block Blog
          </SectionHeading>
        </div>

        <ul className="mt-12 space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-lg p-6 transition-colors hover:bg-bg-subtle">
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
                    {post.category.charAt(0).toUpperCase() +
                      post.category.slice(1)}
                  </Link>
                </div>
                <h2 className="mt-1 font-heading text-xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-text/70">{post.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
