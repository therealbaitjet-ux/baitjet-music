import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music | Baitjet Discography",
  description: "Listen to Baitjet's music. Grunge-influenced rap from Union City, NJ. Stream 'Come to The Party' and more on all platforms.",
  alternates: {
    canonical: "https://baitjet.com/music",
  },
};

export default function MusicPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Music</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Grunge-influenced rap from Union City, NJ. Released under DripJet Records. 
        Stream on your favorite platform or get early access via the podcast.
      </p>

      {/* Spotify Profile */}
      <section className="mb-12">
        <a 
          href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 rounded-2xl p-8 flex items-center justify-between hover:bg-green-700 transition"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Follow on Spotify</h2>
            <p className="text-green-100">Stream the full catalog</p>
          </div>
          <span className="text-4xl">🎧</span>
        </a>
      </section>

      {/* YouTube Channel */}
      <section className="mb-16">
        <a 
          href="https://www.youtube.com/@Mr.J.C.Santos"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 rounded-2xl p-8 flex items-center justify-between hover:bg-red-700 transition"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Subscribe on YouTube</h2>
            <p className="text-red-100">@Mr.J.C.Santos — Official music videos</p>
          </div>
          <span className="text-4xl">📺</span>
        </a>
      </section>

      {/* Singles */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Singles</h2>
        
        <div className="space-y-6">
          {/* No Doubt */}
          <div className="bg-baitjet-800 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gradient-to-br from-purple-700 to-indigo-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🎯</span>
              </div>
              <div className="flex-1">
                <p className="text-baitjet-accent text-sm uppercase tracking-wider mb-1">Single</p>
                <h3 className="text-2xl font-bold mb-2">No Doubt</h3>
                <p className="text-gray-400 mb-2">DripJet Records</p>
                <p className="text-gray-300 mb-6">
                  Latest single from Baitjet. Grunge-influenced rap with raw, authentic energy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.youtube.com/@Mr.J.C.Santos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
                  >
                    YouTube
                  </a>
                  <a 
                    href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Different Type of Drip */}
          <div className="bg-baitjet-800 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gradient-to-br from-blue-700 to-cyan-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">💧</span>
              </div>
              <div className="flex-1">
                <p className="text-baitjet-accent text-sm uppercase tracking-wider mb-1">Single</p>
                <h3 className="text-2xl font-bold mb-2">Different Type of Drip</h3>
                <p className="text-gray-400 mb-2">DripJet Records</p>
                <p className="text-gray-300 mb-6">
                  Unique track showcasing Baitjet's grunge-rap style and Union City sound.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.youtube.com/@Mr.J.C.Santos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
                  >
                    YouTube
                  </a>
                  <a 
                    href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Need Your Love */}
          <div className="bg-baitjet-800 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gradient-to-br from-pink-700 to-rose-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">❤️</span>
              </div>
              <div className="flex-1">
                <p className="text-baitjet-accent text-sm uppercase tracking-wider mb-1">Single</p>
                <h3 className="text-2xl font-bold mb-2">Need Your Love</h3>
                <p className="text-gray-400 mb-2">DripJet Records</p>
                <p className="text-gray-300 mb-6">
                  Emotional track with the signature grunge-influenced hip-hop sound.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.youtube.com/@Mr.J.C.Santos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
                  >
                    YouTube
                  </a>
                  <a 
                    href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Come to The Party */}
          <div className="bg-baitjet-800 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🎤</span>
              </div>
              <div className="flex-1">
                <p className="text-baitjet-accent text-sm uppercase tracking-wider mb-1">Single • 2021</p>
                <h3 className="text-2xl font-bold mb-2">Come to The Party</h3>
                <p className="text-gray-400 mb-2">DripJet Records</p>
                <p className="text-gray-300 mb-6">
                  The debut single. Recorded at Sherny 911's studio in Union City, NJ. 
                  Released May 24, 2021. Grunge-influenced rap with raw, authentic energy.
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
                    href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Spotify
                  </a>
                  <a 
                    href="https://music.apple.com/us/artist/baitjet/1449553069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition"
                  >
                    Apple Music
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Omerta 2 */}
          <div className="bg-baitjet-800 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🎵</span>
              </div>
              <div className="flex-1">
                <p className="text-baitjet-accent text-sm uppercase tracking-wider mb-1">Single • 2020</p>
                <h3 className="text-2xl font-bold mb-2">Omerta 2</h3>
                <p className="text-gray-400 mb-2">DripJet Records</p>
                <p className="text-gray-300 mb-6">
                  Released February 22, 2020. Raw street energy with the signature grunge-rap sound.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://open.spotify.com/album/6at4X0ym5h7jpMOoEVjU1k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Pre-Releases */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Podcast Pre-Releases</h2>
        <p className="text-gray-400 mb-6">
          These tracks get early release on the podcast before hitting streaming platforms. 
          Subscribe to hear them first.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-baitjet-800 rounded-xl p-6">
            <div className="w-full h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-3xl">🎙️</span>
            </div>
            <h3 className="font-bold mb-1">Talking to Nina</h3>
            <p className="text-gray-400 text-sm mb-2">Described as "a bit grungy but it's a good expression"</p>
            <a 
              href="https://podcasters.spotify.com/pod/show/baitjet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-baitjet-accent text-sm hover:underline"
            >
              Listen on Podcast →
            </a>
          </div>
          <div className="bg-baitjet-800 rounded-xl p-6">
            <div className="w-full h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-3xl">🎙️</span>
            </div>
            <h3 className="font-bold mb-1">Rick and Morty</h3>
            <p className="text-gray-400 text-sm mb-2">Available on podcast platforms</p>
            <a 
              href="https://podcasters.spotify.com/pod/show/baitjet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-baitjet-accent text-sm hover:underline"
            >
              Listen on Podcast →
            </a>
          </div>
        </div>
      </section>

      {/* All Platforms */}
      <section className="border-t border-baitjet-700 pt-12">
        <h2 className="text-2xl font-bold mb-6">All Platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a 
            href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 rounded-xl p-4 text-center hover:bg-green-700 transition"
          >
            <span className="text-2xl block mb-2">🎧</span>
            <span className="font-semibold text-sm">Spotify</span>
          </a>
          <a 
            href="https://www.youtube.com/@Mr.J.C.Santos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 rounded-xl p-4 text-center hover:bg-red-700 transition"
          >
            <span className="text-2xl block mb-2">📺</span>
            <span className="font-semibold text-sm">YouTube</span>
          </a>
          <a 
            href="https://music.apple.com/us/artist/baitjet/1449553069"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 rounded-xl p-4 text-center hover:bg-gray-700 transition"
          >
            <span className="text-2xl block mb-2">🎵</span>
            <span className="font-semibold text-sm">Apple Music</span>
          </a>
          <a 
            href="https://www.reverbnation.com/baitjet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 rounded-xl p-4 text-center hover:bg-blue-700 transition"
          >
            <span className="text-2xl block mb-2">🎤</span>
            <span className="font-semibold text-sm">ReverbNation</span>
          </a>
        </div>
      </section>
    </div>
  );
}
