import Link from "next/link";

const footerLinks = [
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const industryLinks = [
  { href: "/restaurants/oakland-ca", label: "Restaurants" },
  { href: "/home-services/oakland-ca", label: "Home Services" },
  { href: "/dental/oakland-ca", label: "Dental" },
  { href: "/legal/oakland-ca", label: "Legal" },
  { href: "/retail/oakland-ca", label: "Retail" },
];

export function Footer() {
  return (
    <footer className="border-t border-text/10 bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg text-primary">
              On The Block Digital
            </p>
            <p className="mt-2 text-sm text-text/70">
              Your neighbors are searching for you.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-primary">Company</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text/70 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-primary">
              Industries
            </p>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text/70 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-text/10 pt-6 text-center text-sm text-text/50">
          &copy; {new Date().getFullYear()} On The Block Digital. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
