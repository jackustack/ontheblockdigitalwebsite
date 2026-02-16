import Link from "next/link";

const navLinks = [
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-text/10 bg-bg">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-heading text-xl font-normal text-primary"
        >
          On The Block Digital
        </Link>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
