import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ogImageUrl } from "@/lib/utils";
import { getAllCategories, getPostsByCategory } from "@/lib/blog";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  if (posts.length === 0) return {};

  const label = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${label} | On The Block Digital Blog`,
    description: `Articles about ${label.toLowerCase()} from On The Block Digital.`,
    openGraph: {
      title: `${label} | On The Block Digital Blog`,
      description: `Articles about ${label.toLowerCase()} from On The Block Digital.`,
      images: [
        {
          url: ogImageUrl(
            `${label} Articles`,
            `Tips and insights about ${label.toLowerCase()} from the block.`
          ),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) notFound();

  const label = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text/65">
          <Link href="/blog" className="hover:text-accent">
            Blog
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{label}</span>
        </nav>

        <div className="text-center">
          <SectionHeading
            as="h1"
            subtext={`Articles about ${label.toLowerCase()}.`}
          >
            {label}
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
                    className="text-sm text-text/65"
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
