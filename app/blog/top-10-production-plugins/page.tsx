import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Top 10 Production Plugins",
  description: "The essential plugins Baitjet uses for sound design, mixing, and mastering future bass and trap tracks.",
  alternates: {
    canonical: "https://baitjet.com/blog/top-10-production-plugins",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-baitjet-accent mb-4">
          <span>Gear</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My Top 10 Production Plugins
        </h1>
        <p className="text-xl text-gray-400">
          The essential plugins I use for sound design, mixing, and mastering.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <h2>1. Xfer Serum</h2>
        <p>
          The backbone of my sound design. Serum's wavetable synthesis is perfect for 
          future bass growls, leads, and bass sounds. The visual interface makes sound 
          design intuitive.
        </p>

        <h2>2. FabFilter Pro-Q 3</h2>
        <p>
          The best EQ on the market. Dynamic EQ mode is a game-changer for controlling 
          resonances that only appear at certain volumes.
        </p>

        <h2>3. FabFilter Pro-C 2</h2>
        <p>
          My go-to compressor. The different styles (Clean, Classic, Opto, etc.) cover 
          every situation from subtle vocal compression to aggressive drum bus processing.
        </p>

        <h2>4. iZotope Ozone</h2>
        <p>
          For mastering. The AI-powered assistant gets me 80% of the way there, then I 
          fine-tune with the individual modules.
        </p>

        <h2>5. Soundtoys Decapitator</h2>
        <p>
          Analog saturation that adds warmth and edge. Perfect for making digital synths 
          sound more organic.
        </p>

        <h2>6. Valhalla VintageVerb</h2>
        <p>
          Affordable and versatile reverb. The 1970s mode is my favorite for creating 
          space without washing out the mix.
        </p>

        <h2>7. Cableguys ShaperBox</h2>
        <p>
          For rhythmic effects. VolumeShaper is essential for sidechain-style ducking 
          without the complexity of traditional sidechain routing.
        </p>

        <h2>8. Soothe2</h2>
        <p>
      Resonance suppression that saves harsh vocal recordings and tames harsh synth 
      sounds automatically.
        </p>

        <h2>9. OTT</h2>
        <p>
          The free multiband compressor that's become a staple in electronic music. 
          Use it subtly for glue, or heavily for that distinctive "future bass" sound.
        </p>

        <h2>10. Pro-L 2</h2>
        <p>
          My limiter of choice for the final stage of mastering. Transparent at 
          reasonable levels, effective when you need to push loudness.
        </p>

        <h2>Honorable Mentions</h2>
        <p>
          RC-20 Retro Color for lo-fi textures, Portal for granular effects, and 
          Kick 2 for designing custom kick drums.
        </p>
      </div>
    </article>
  );
}
