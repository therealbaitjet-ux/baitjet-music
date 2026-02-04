import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast | Baitjet | Early Access to New Music",
  description: "Subscribe to the Baitjet podcast for early access to new music, behind-the-scenes content, and exclusive updates. Available on Spotify, Apple Podcasts, and more.",
  alternates: {
    canonical: "https://baitjet.com/podcast",
  },
};

export default function PodcastPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Podcast</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Real fans get early access. Subscribe to the Baitjet podcast for new music before it hits 
        streaming platforms, behind-the-scenes content, and exclusive updates.
      </p>

      {/* Tagline */}
      <div className="bg-baitjet-800 rounded-2xl p-8 mb-12 text-center">
        <p className="text-2xl md:text-3xl font-bold text-baitjet-accent mb-2">
          "if your here your a real one"
        </p>
        <p className="text-gray-400">
          Early access to every track. Subscribe now.
        </p>
      </div>

      {/* Platforms */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Listen On</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a 
            href="https://podcasters.spotify.com/pod/show/baitjet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 rounded-xl p-6 hover:bg-green-700 transition flex items-center gap-4"
          >
            <span className="text-3xl">🎧</span>
            <div>
              <h3 className="font-bold">Spotify</h3>
              <p className="text-green-200 text-sm">Subscribe for new episodes</p>
            </div>
          </a>
          <a 
            href="https://podcasts.apple.com/lc/podcast/baitjet/id1357663243"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 rounded-xl p-6 hover:bg-purple-700 transition flex items-center gap-4"
          >
            <span className="text-3xl">🎧</span>
            <div>
              <h3 className="font-bold">Apple Podcasts</h3>
              <p className="text-purple-200 text-sm">Subscribe on iOS</p>
            </div>
          </a>
          <a 
            href="https://www.iheart.com/podcast/256-baitjet-31074558/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 rounded-xl p-6 hover:bg-red-700 transition flex items-center gap-4"
          >
            <span className="text-3xl">🎧</span>
            <div>
              <h3 className="font-bold">iHeart Radio</h3>
              <p className="text-red-200 text-sm">Listen and subscribe</p>
            </div>
          </a>
          <a 
            href="https://anchor.fm/baitjet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-600 rounded-xl p-6 hover:bg-brown-700 transition flex items-center gap-4"
          >
            <span className="text-3xl">🎙️</span>
            <div>
              <h3 className="font-bold">Anchor</h3>
              <p className="text-brown-200 text-sm">Home base</p>
            </div>
          </a>
        </div>
      </section>

      {/* Episodes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Episodes</h2>
        <div className="space-y-4">
          <div className="bg-baitjet-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">Come to The Party</h3>
                <p className="text-gray-400 text-sm">Debut single • Recorded at Sherny 911's studio</p>
              </div>
              <a 
                href="https://podcasters.spotify.com/pod/show/baitjet/episodes/Come-To-The-Party-epc479"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline text-sm"
              >
                Listen →
              </a>
            </div>
          </div>
          <div className="bg-baitjet-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">Talking to Nina</h3>
                <p className="text-gray-400 text-sm">Grunge-influenced track</p>
              </div>
              <a 
                href="https://podcasters.spotify.com/pod/show/baitjet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline text-sm"
              >
                Listen →
              </a>
            </div>
          </div>
          <div className="bg-baitjet-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">Rick and Morty</h3>
                <p className="text-gray-400 text-sm">Latest release</p>
              </div>
              <a 
                href="https://podcasters.spotify.com/pod/show/baitjet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline text-sm"
              >
                Listen →
              </a>
            </div>
          </div>
          <div className="bg-baitjet-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">Don't Give UP!</h3>
                <p className="text-gray-400 text-sm">Motivational track</p>
              </div>
              <a 
                href="https://podcasters.spotify.com/pod/show/baitjet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline text-sm"
              >
                Listen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Podcast */}
      <section className="bg-baitjet-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Why Podcast-First?</h2>
        <p className="text-gray-300 mb-4">
          Most artists chase streaming algorithms. Baitjet builds community. By releasing music 
          on podcast platforms first, real fans get early access before the general public.
        </p>
        <p className="text-gray-300 mb-4">
          It's about rewarding the people who actually care—not just optimizing for playlists. 
          If you're subscribed to the podcast, you're part of the inner circle.
        </p>
        <p className="text-gray-400 text-sm">
          Every track eventually hits streaming platforms (Apple Music, YouTube, etc.), but 
          podcast subscribers hear it first.
        </p>
      </section>
    </div>
  );
}
