import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Verified career opportunities published by Ascendant Talent.",
};

export default function Opportunities() {
  return (
    <>
      <Header current="opportunities" />
      <main id="main">
        <div className="wrap page-title">
          <h1>Opportunities</h1>
          <p>Each listing shows its classification, source, original posting date and the date we last verified it.</p>
        </div>
        <div className="wrap page-body">
          <div className="empty">
            <h2>No listings are published yet</h2>
            <p>
              We publish a listing only after we have verified its source. When the first one is ready,
              it will appear here with its full record.
            </p>
            <p><Link href="/#how-we-label">See how listings are labelled</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
