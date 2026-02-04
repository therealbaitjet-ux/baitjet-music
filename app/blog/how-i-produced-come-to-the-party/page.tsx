import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Produced 'Come to The Party'",
  description: "A complete breakdown of the production process behind Baitjet's debut single 'Come to The Party' - from initial idea to final master.",
  alternates: {
    canonical: "https://baitjet.com/blog/how-i-produced-come-to-the-party",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-baitjet-accent mb-4">
          <span>Production</span>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>February 2025</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How I Produced "Come to The Party"
        </h1>
        <p className="text-xl text-gray-400">
          A complete breakdown of the production process behind my debut single, 
          from initial idea to final master.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <p>
          "Come to The Party" started with a simple goal: create a high-energy track 
          that works equally well in a club and at the gym. Here's how it came together.
        </p>

        <h2>The Concept</h2>
        <p>
          I wanted to capture that feeling of anticipation right before a drop hits—when 
          the energy in the room is building and everyone's waiting for the release. The 
          working title was actually just "Drop" for the first week.
        </p>

        <h2>The Drop</h2>
        <p>
          The main drop uses a combination of serum wavetables and processed vocal chops. 
          I started with a basic saw wave, added some FM modulation, then resampled it through 
          a distortion chain to get that gritty edge.
        </p>
        <p>
          The key was layering: three different bass sounds occupying slightly different 
          frequency ranges. One sub (pure sine), one mid-range growl, and one high-frequency 
          "bite" layer that cuts through on phone speakers.
        </p>

        <h2>Drum Programming</h2>
        <p>
          The drum pattern draws from both trap and Jersey club influences. I programmed 
          the kicks to hit on the 1 and the "and" of 2, creating that bouncy, off-beat 
          feel that makes you want to move.
        </p>
        <p>
          The snare is layered: a tight acoustic snare for body, a clap for width, and 
          a synthesized snare for that modern "snap" that cuts through the mix.
        </p>

        <h2>The Build-Up</h2>
        <p>
          Build-ups are all about tension. I used a riser that increases in volume and 
          pitch over 8 bars, combined with a drum roll that doubles in speed every 2 bars. 
          The vocal chops get progressively more processed—starting dry, then adding reverb, 
          then introducing a delay that gets faster until it becomes a blur of sound.
        </p>

        <h2>Mixing Challenges</h2>
        <p>
          The biggest challenge was getting the low-end to hit hard without muddying the mix. 
          I ended up using multiband compression on the bass bus, with heavy compression 
          on everything below 100Hz and lighter treatment on the mids.
        </p>

        <h2>Mastering</h2>
        <p>
          For mastering, I aimed for -8 LUFS integrated loudness—loud enough for streaming 
          platforms but not so crushed that it loses dynamics. The limiter settings were crucial: 
          slow attack to let transients through, fast release to catch the decay.
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>Layer your bass sounds for maximum impact across all playback systems</li>
          <li>Drum programming is everything in trap—spend time on the groove</li>
          <li>Build tension gradually, then pay it off with the drop</li>
          <li>Reference your track on multiple systems (car, phone, headphones)</li>
        </ul>

        <p>
          You can listen to "Come to The Party" on{" "}
          <a href="https://www.youtube.com/watch?v=xnftmuM2sks" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>{" "}
          and soon on all streaming platforms.
        </p>
      </div>

      {/* Related Posts */}
      <div className="mt-16 border-t border-baitjet-700 pt-12">
        <h3 className="text-xl font-bold mb-6">Related Posts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/future-bass-drum-programming" className="bg-baitjet-800 rounded-xl p-6 hover:bg-baitjet-700 transition">
            <h4 className="font-bold mb-2">Future Bass Drum Programming</h4>
            <p className="text-gray-400 text-sm">Essential techniques for trap drums that hit hard.</p>
          </Link>
          <Link href="/blog/mixing-low-end" className="bg-baitjet-800 rounded-xl p-6 hover:bg-baitjet-700 transition">
            <h4 className="font-bold mb-2">Mixing Low-End</h4>
            <p className="text-gray-400 text-sm">Strategies for club-ready bass.</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
