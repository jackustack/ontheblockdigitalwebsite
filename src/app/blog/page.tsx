import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ogImageUrl } from "@/lib/utils";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, strategies, and local insights to help Main Street businesses get found and grow. From On The Block Digital.",
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
              <article>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg p-6 transition-colors hover:bg-bg-subtle"
                >
                  <time
                    dateTime={post.date}
                    className="text-sm text-text/50"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-1 font-heading text-xl font-bold text-primary group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-text/70">{post.description}</p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
