import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 mb-4 font-heading text-2xl font-bold text-primary"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 font-heading text-xl font-bold text-primary"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4 leading-relaxed text-text/80" {...props} />,
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-accent underline underline-offset-2 hover:text-accent/80"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-accent underline underline-offset-2 hover:text-accent/80"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-text/80" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-text/80" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-accent pl-4 italic text-text/70"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold text-text" {...props} />,
};

interface MdxContentProps {
  source: string;
}

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote source={source} components={components} />;
}
