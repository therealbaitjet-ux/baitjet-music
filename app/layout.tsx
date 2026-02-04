import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baitjet.com"),
  title: {
    default: "Baitjet | Union City Rapper | NJ Hip-Hop",
    template: "%s | Baitjet",
  },
  description: "Grunge-influenced rapper from Union City, NJ. Raw, authentic hip-hop released under DripJet Records. Listen to 'Come to The Party' and more.",
  keywords: ["Baitjet", "Union City rapper", "NJ hip-hop", "New Jersey rap", "grunge rap", "underground hip-hop", "DripJet Records"],
  authors: [{ name: "Baitjet" }],
  creator: "Baitjet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baitjet.com",
    siteName: "Baitjet",
    title: "Baitjet | Union City Rapper | NJ Hip-Hop",
    description: "Grunge-influenced rapper from Union City, NJ. Raw, authentic hip-hop released under DripJet Records.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baitjet | Union City Rapper | NJ Hip-Hop",
    description: "Grunge-influenced rapper from Union City, NJ. Raw, authentic hip-hop released under DripJet Records.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-baitjet-900 text-white min-h-screen">
        <header className="border-b border-baitjet-700">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight hover:text-baitjet-accent transition">
              BAITJET
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-baitjet-accent transition">Home</Link>
              <Link href="/music" className="hover:text-baitjet-accent transition">Music</Link>
              <Link href="/podcast" className="hover:text-baitjet-accent transition">Podcast</Link>
              <Link href="/about" className="hover:text-baitjet-accent transition">About</Link>
              <Link href="/contact" className="hover:text-baitjet-accent transition">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-baitjet-700 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; {new Date().getFullYear()} Baitjet. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="https://instagram.com/mr.j.c.santos" target="_blank" rel="noopener noreferrer" className="hover:text-baitjet-accent transition">
                  Instagram
                </a>
                <a href="https://www.youtube.com/@Mr.J.C.Santos" target="_blank" rel="noopener noreferrer" className="hover:text-baitjet-accent transition">
                  YouTube
                </a>
                <a href="https://podcasters.spotify.com/pod/show/baitjet" target="_blank" rel="noopener noreferrer" className="hover:text-baitjet-accent transition">
                  Podcast
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
