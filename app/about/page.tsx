import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Baitjet | Union City Rapper",
  description: "Learn about Baitjet, a grunge-influenced rapper from Union City, NJ. Discover the story, influences, and the podcast-first release strategy.",
  alternates: {
    canonical: "https://baitjet.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Baitjet</h1>
      
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="lead text-xl text-gray-300">
          Grunge-influenced rapper from Union City, New Jersey. Raw, authentic hip-hop 
          released under DripJet Records with a podcast-first strategy for the real ones.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">The Sound</h2>
        <p>
          Baitjet's music carries the raw energy of underground rap. It's been described as 
          "grungy but a good expression"—unpolished, authentic, and real. Where mainstream 
          hip-hop chases trends and polish, Baitjet embraces imperfection as a feature.
        </p>
        <p>
          The sound is influenced by the grit of 90s hip-hop, the DIY ethos of grunge rock, 
          and the unfiltered storytelling of the underground rap scene.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">The Strategy</h2>
        <p>
          What sets Baitjet apart is the podcast-first release strategy. Every track drops 
          on podcast platforms first—giving real fans early access before it hits streaming 
          services. It's about building a community, not just an audience.
        </p>
        <p>
          The tagline says it all: "if your here your a real one." This approach rewards 
          dedicated listeners with exclusive early access and behind-the-scenes content.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">Union City, NJ</h2>
        <p>
          Based in Union City, Hudson County, New Jersey. Recording at Sherny 911's studio. 
          Part of the next generation of NJ hip-hop, carrying the torch of a legendary lineage.
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">NJ Hip-Hop Heritage</h3>
        <p>
          New Jersey has produced some of hip-hop's most iconic voices:
        </p>
        <ul>
          <li><strong>Queen Latifah</strong> (Newark) - Trailblazing MC and actress</li>
          <li><strong>Naughty By Nature</strong> (East Orange) - "O.P.P." and "Hip Hop Hooray"</li>
          <li><strong>The Fugees</strong> (South Orange) - "The Score" and "Killing Me Softly"</li>
          <li><strong>Redman</strong> (Newark) - Funk Doc, Def Squad</li>
          <li><strong>Joe Budden</strong> (Jersey City) - Mood Muzik, Everyday Struggle</li>
        </ul>
        <p>
          Baitjet represents the next wave—gritty, independent, and true to the Garden State's 
          legacy of authentic hip-hop.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">DripJet Records</h2>
        <p>
          Independent label based in Union City. Founded on the principles of artist autonomy 
          and authentic expression. No middlemen, no compromises—just raw music released on 
          the artist's own terms.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">The Message</h2>
        <p>
          "Pushing through the noise and sticking to your guns." Baitjet's music explores themes 
          of perseverance, authenticity, and maintaining integrity in a world of naysayers. It's 
          about keeping it real when everything around you feels fake.
        </p>
      </div>

      {/* Connect */}
      <div className="mt-16 border-t border-baitjet-700 pt-12">
        <h2 className="text-2xl font-bold mb-6">Connect</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://instagram.com/mr.j.c.santos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Instagram @mr.j.c.santos
          </a>
          <a 
            href="https://www.youtube.com/watch?v=xnftmuM2sks"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            YouTube
          </a>
          <a 
            href="https://podcasters.spotify.com/pod/show/baitjet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Podcast
          </a>
        </div>
      </div>
    </div>
  );
}
