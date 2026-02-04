import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mixing Low-End: Getting Club-Ready Bass",
  description: "Strategies for achieving powerful, clear bass that translates on any system.",
  alternates: {
    canonical: "https://baitjet.com/blog/mixing-low-end",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-baitjet-accent mb-4">
          <span>Mixing</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mixing Low-End: Getting Club-Ready Bass
        </h1>
        <p className="text-xl text-gray-400">
          Strategies for achieving powerful, clear bass that translates on any system.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <p>
          The low-end is where tracks live or die. Too muddy and it sounds amateur. 
          Too thin and it lacks impact. Here's how to get it right.
        </p>

        <h2>1. Separate Sub from Mid-Bass</h2>
        <p>
          Your bass should be two parts: sub (60-100Hz) for the physical impact, 
          and mid-bass (100-250Hz) for the character. Use a crossover or separate 
          tracks to process them differently.
        </p>

        <h2>2. High-Pass Everything Else</h2>
        <p>
          Every non-bass element should have a high-pass filter. Even a subtle 
          cut at 30-50Hz clears space for your bass to breathe. Check your kick—
          it probably doesn't need anything below 50Hz.
        </p>

        <h2>3. Sidechain Compression</h2>
        <p>
          When the kick hits, the bass should duck slightly. This creates space 
          and makes both elements punch through. Use a fast attack and medium 
          release on your sidechain compressor.
        </p>

        <h2>4. Mono Your Sub</h2>
        <p>
          Sub frequencies should always be in mono. Use a mono-maker plugin or 
          simply pan your sub bass to center. Stereo sub causes phase issues on 
          club systems.
        </p>

        <h2>5. Reference on Multiple Systems</h2>
        <p>
          Check your low-end on: studio monitors, headphones, car speakers, and 
          phone speakers. If it works on all four, you're golden. Phone speakers 
          are especially revealing—if you can hear the bass line clearly, you've 
          nailed it.
        </p>
      </div>
    </article>
  );
}
