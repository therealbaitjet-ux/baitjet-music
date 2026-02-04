import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baitjet | Union City Rapper | NJ Hip-Hop",
  description: "Grunge-influenced rapper from Union City, NJ. Raw, authentic hip-hop released under DripJet Records. Listen to 'Come to The Party' and more.",
  alternates: {
    canonical: "https://baitjet.com",
  },
  openGraph: {
    title: "Baitjet | Union City Rapper | NJ Hip-Hop",
    description: "Grunge-influenced rapper from Union City, NJ. Raw, authentic hip-hop released under DripJet Records.",
    url: "https://baitjet.com",
  },
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center">
        <p className="text-baitjet-accent text-sm uppercase tracking-widest mb-4">Union City, NJ</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          BAITJET
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Grunge-Influenced Rapper
        </p>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Raw, authentic hip-hop from Union City, New Jersey. Releasing under DripJet Records 
          with a podcast-first strategy for the real ones.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Spotify
          </a>
          <a 
            href="https://www.youtube.com/@Mr.J.C.Santos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            YouTube
          </a>
          <Link 
            href="/music" 
            className="bg-baitjet-accent px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            All Music
          </Link>
        </div>
      </section>

      {/* Featured Track */}
      <section className="py-16 border-t border-baitjet-700">
        <h2 className="text-3xl font-bold mb-8">Latest Release</h2>
        <div className="bg-baitjet-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
              <span className="text-6xl">🎤</span>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-baitjet-accent text-sm uppercase tracking-wider mb-2">Single</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Come to The Party</h3>
              <p className="text-gray-400 mb-2">Released May 24, 2021</p>
              <p className="text-gray-300 mb-6">
                The debut single from Baitjet. Recorded at Sherny 911's studio in Union City, NJ. 
                Released under DripJet Records.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.youtube.com/watch?v=xnftmuM2sks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
                >
                  YouTube
                </a>
                <a 
                  href="https://music.apple.com/us/artist/baitjet/1449553069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition"
                >
                  Apple Music
                </a>
                <a 
                  href="https://www.reverbnation.com/baitjet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                >
                  ReverbNation
                </a>
                <a 
                  href="https://podcasters.spotify.com/pod/show/baitjet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                >
                  Podcast
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NJ Hip-Hop Heritage */}
      <section className="py-16 border-t border-baitjet-700">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Next Generation NJ Hip-Hop</h2>
            <p className="text-gray-300 mb-4">
              From Union City, New Jersey—carrying the torch of the state's legendary hip-hop 
              lineage. Following in the footsteps of Queen Latifah, Naughty By Nature, The Fugees, 
              Redman, and Joe Budden.
            </p>
            <p className="text-gray-300 mb-6">
              But where legends leaned toward polish, Baitjet embraces the grunge—a raw, 
              unfiltered sound that prioritizes authenticity over algorithms.
            </p>
            <Link 
              href="/about" 
              className="text-baitjet-accent font-semibold hover:underline"
            >
              Read the full story →
            </Link>
          </div>
          <div className="bg-baitjet-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">The Sound</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Grunge Rap", "Raw Hip-Hop", "Underground", "Authentic", "NJ Sound"].map((tag) => (
                <span key={tag} className="bg-baitjet-700 px-4 py-2 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-4">From Union City</h3>
            <p className="text-gray-400 text-sm">
              Representing Hudson County's next wave of hip-hop talent. Recording at Sherny 911's studio.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Strategy */}
      <section className="py-16 border-t border-baitjet-700">
        <div className="bg-gradient-to-r from-baitjet-accent/20 to-purple-600/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Podcast-First Releases</h2>
              <p className="text-gray-300 mb-4">
                Real fans get early access. Every track drops on the podcast first, then hits 
                streaming platforms. If you're here, you're a real one.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe for exclusive early access to new music, behind-the-scenes content, 
                and the raw, unfiltered journey.
              </p>
              <a 
                href="https://podcasters.spotify.com/pod/show/baitjet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Subscribe on Spotify
              </a>
            </div>
            <div className="flex-1 text-center">
              <div className="text-6xl mb-4">🎧</div>
              <p className="text-gray-400 text-sm">Available on all podcast platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 border-t border-baitjet-700 text-center">
        <h2 className="text-3xl font-bold mb-4">Follow the Journey</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Behind-the-scenes studio sessions, new music previews, and Union City life. 
          Follow @mr.j.c.santos on Instagram.
        </p>
        <a 
          href="https://instagram.com/mr.j.c.santos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          <span>📷</span> Follow @mr.j.c.santos
        </a>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-baitjet-700">
        <div className="bg-baitjet-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Get new releases, behind-the-scenes content, and exclusive updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-baitjet-900 border border-baitjet-700 focus:border-baitjet-accent focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-baitjet-accent px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
