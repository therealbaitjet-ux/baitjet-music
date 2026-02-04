import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit | Baitjet | Union City Rapper",
  description: "Official press kit for Baitjet, grunge-influenced rapper from Union City, NJ. Download photos, bios, and assets for media use.",
  alternates: {
    canonical: "https://baitjet.com/press",
  },
};

export default function PressPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Kit</h1>
      <p className="text-gray-400 mb-12">
        Official assets and information for media, promoters, and industry professionals.
      </p>

      <div className="space-y-12">
        {/* Bio Section */}
        <section className="bg-baitjet-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Biography</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-baitjet-accent mb-2">Short Bio (80 words)</h3>
              <p className="text-gray-300 text-sm">
                Baitjet is a Union City rapper crafting grunge-influenced hip-hop with raw authenticity. 
                Released under DripJet Records, his tracks like "Come to The Party" showcase a gritty, 
                unpolished sound that stands apart from mainstream trap. Using a unique podcast-first 
                strategy, he gives real fans early access to music before it hits streaming platforms. 
                Representing New Jersey's next generation of hip-hop.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-baitjet-accent mb-2">Long Bio (250 words)</h3>
              <p className="text-gray-300 text-sm">
                Baitjet is a rapper from Union City, New Jersey, forging a distinctive path in hip-hop 
                with a grunge-influenced sound that prioritizes authenticity over polish. His music—released 
                under DripJet Records—carries the raw energy of underground rap, with tracks like "Come to 
                The Party" and "Talking to Nina" showcasing a style that's been described as "grungy but a 
                good expression." What sets Baitjet apart is his innovative release strategy: podcast-first 
                distribution. Recording at Sherny 911's studio in Union City, Baitjet maintains a DIY ethos 
                that reflects the independence of his DripJet Records imprint. As a Union City artist, Baitjet 
                carries the torch of New Jersey's rich hip-hop lineage.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="bg-baitjet-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
          <dl className="grid md:grid-cols-2 gap-4">
            <div>
              <dt className="text-gray-400 text-sm">Artist Name</dt>
              <dd className="font-semibold">Baitjet</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Location</dt>
              <dd className="font-semibold">Union City, New Jersey</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Genre</dt>
              <dd className="font-semibold">Grunge Rap / Hip-Hop</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Label</dt>
              <dd className="font-semibold">DripJet Records</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Debut Single</dt>
              <dd className="font-semibold">"Come to The Party" (2021)</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Instagram</dt>
              <dd className="font-semibold">@mr.j.c.santos</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Studio</dt>
              <dd className="font-semibold">Sherny 911's Studio</dd>
            </div>
            <div>
              <dt className="text-gray-400 text-sm">Release Strategy</dt>
              <dd className="font-semibold">Podcast-First</dd>
            </div>
          </dl>
        </section>

        {/* NJ Hip-Hop Connection */}
        <section className="bg-baitjet-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">NJ Hip-Hop Lineage</h2>
          <p className="text-gray-300 mb-4">
            Baitjet represents the next generation of New Jersey hip-hop, following in the footsteps of:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
            <li>• Queen Latifah (Newark)</li>
            <li>• Naughty By Nature (East Orange)</li>
            <li>• The Fugees (South Orange)</li>
            <li>• Redman (Newark)</li>
            <li>• Joe Budden (Jersey City)</li>
          </ul>
          <p className="text-gray-400 text-sm mt-4">
            Where NJ legends leaned toward polish, Baitjet embraces grunge—raw, authentic, and unfiltered.
          </p>
        </section>

        {/* Assets */}
        <section className="bg-baitjet-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Assets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-baitjet-700 rounded-xl text-center">
              <span className="text-4xl mb-4 block">🖼️</span>
              <h3 className="font-semibold mb-2">Artist Photos</h3>
              <p className="text-gray-400 text-sm mb-4">High-resolution press photos</p>
              <span className="text-gray-500 text-sm">(Coming soon)</span>
            </div>
            <div className="p-6 border border-baitjet-700 rounded-xl text-center">
              <span className="text-4xl mb-4 block">🎵</span>
              <h3 className="font-semibold mb-2">Music Files</h3>
              <p className="text-gray-400 text-sm mb-4">WAV files and stems</p>
              <span className="text-gray-500 text-sm">(Coming soon)</span>
            </div>
            <div className="p-6 border border-baitjet-700 rounded-xl text-center">
              <span className="text-4xl mb-4 block">📄</span>
              <h3 className="font-semibold mb-2">One Sheet</h3>
              <p className="text-gray-400 text-sm mb-4">PDF with key facts and stats</p>
              <span className="text-gray-500 text-sm">(Coming soon)</span>
            </div>
            <div className="p-6 border border-baitjet-700 rounded-xl text-center">
              <span className="text-4xl mb-4 block">🎨</span>
              <h3 className="font-semibold mb-2">Logos</h3>
              <p className="text-gray-400 text-sm mb-4">Vector logos and branding</p>
              <span className="text-gray-500 text-sm">(Coming soon)</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <p className="text-gray-400 mb-4">
            For press inquiries, interview requests, and booking
          </p>
          <a 
            href="/contact"
            className="inline-block bg-baitjet-accent px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
