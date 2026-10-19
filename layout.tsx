import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/newsreader/wght-italic.css";
import "@fontsource-variable/hanken-grotesk/index.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ascendant Talent", template: "%s | Ascendant Talent" },
  description:
    "Researched career opportunities, each shown with its source, original posting date and the date we last verified it.",
  openGraph: { siteName: "Ascendant Talent", type: "website" },
};

export const viewport: Viewport = { themeColor: "#f7f4ed" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
