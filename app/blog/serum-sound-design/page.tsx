import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serum Sound Design: My Go-To Patches",
  description: "A walkthrough of my favorite Serum patches and how I design future bass sounds.",
  alternates: {
    canonical: "https://baitjet.com/blog/serum-sound-design",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-baitjet-accent mb-4">
          <span>Sound Design</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Serum Sound Design: My Go-To Patches
        </h1>
        <p className="text-xl text-gray-400">
          A walkthrough of my favorite Serum patches and how I design future bass sounds.
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <p>
          Serum is the backbone of my sound design workflow. Here are my go-to 
          patch types and how I build them from scratch.
        </p>

        <h2>The Future Bass Growl</h2>
        <p>
          Start with a saw wave wavetable. Add FM from a second oscillator using 
          a complex wavetable. The key is in the filter: use a low-pass with 
          aggressive drive, then modulate the cutoff with an LFO synced to 1/8 notes.
        </p>

        <h2>The Super Saw Lead</h2>
        <p>
          Init preset, add 7 voices of unison, detune to about 0.15. This is the 
          classic "supersaw" sound that defined trance and still works in future bass. 
          Add some dimension with the chorus effect.
        </p>

        <h2>The Reese Bass</h2>
        <p>
          Two saw waves, slightly detuned from each other. The phase cancellation 
          creates that moving, breathing character. Keep it simple—sometimes the 
          best sounds are the most basic.
        </p>

        <h2>The Pluck</h2>
        <p>
          Fast attack, medium decay, zero sustain. Use a triangle or sine wave 
          with a sharp filter envelope. Add some delay and reverb for atmosphere.
          Perfect for those emotional future bass chord progressions.
        </p>

        <h2>My Secret Weapon: The Noise Oscillator</h2>
        <p>
          Don't sleep on the noise oscillator. Use it to add texture to bass sounds 
          or create percussive elements. The "Bright White" and "Analog" noise types 
          are my favorites.
        </p>
      </div>
    </article>
  );
}
