import Link from "next/link";

export function Header({ current }: { current?: "opportunities" | "home" }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">Ascendant Talent</Link>
        <nav className="nav" aria-label="Main">
          <Link href="/opportunities" aria-current={current === "opportunities" ? "page" : undefined}>
            Opportunities
          </Link>
          <Link href="/#how-we-label">How we label listings</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link href="/" className="brand">Ascendant Talent</Link>
        <p>
          A research and career-opportunity platform for Ascendant Groups. Listings are published
          only with their source and verification date. Legal pages are being prepared.
        </p>
      </div>
    </footer>
  );
}
