import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Baitjet | Bookings & Inquiries",
  description: "Get in touch with Baitjet for booking inquiries, features, collaborations, and more. Union City, NJ rapper.",
  alternates: {
    canonical: "https://baitjet.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
      <p className="text-gray-400 mb-12">
        For bookings, features, collaborations, or just to connect.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-baitjet-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-baitjet-900 border border-baitjet-700 focus:border-baitjet-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-baitjet-900 border border-baitjet-700 focus:border-baitjet-accent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-lg bg-baitjet-900 border border-baitjet-700 focus:border-baitjet-accent focus:outline-none">
                <option>General Inquiry</option>
                <option>Booking Request</option>
                <option>Feature/Collaboration</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-baitjet-900 border border-baitjet-700 focus:border-baitjet-accent focus:outline-none resize-none"
                placeholder="Your message..."
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-baitjet-accent py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-6">Connect</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/mr.j.c.santos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline"
              >
                @mr.j.c.santos →
              </a>
              <p className="text-gray-400 text-sm mt-1">Behind-the-scenes and updates</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">YouTube</h3>
              <a 
                href="https://www.youtube.com/@Mr.J.C.Santos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline"
              >
                @Mr.J.C.Santos →
              </a>
              <p className="text-gray-400 text-sm mt-1">Official YouTube channel</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Spotify</h3>
              <a 
                href="https://open.spotify.com/artist/6EQHv0arvH6gvWhyhHVbMG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-baitjet-accent hover:underline"
              >
                Follow on Spotify →
              </a>
              <p className="text-gray-400 text-sm mt-1">Stream the full catalog</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Podcast</h3>
              <Link href="/podcast" className="text-baitjet-accent hover:underline">
                Subscribe to Podcast →
              </Link>
              <p className="text-gray-400 text-sm mt-1">Early access to new music</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Press Kit</h3>
              <Link href="/press" className="text-baitjet-accent hover:underline">
                Download Press Kit →
              </Link>
            </div>

            <div className="border-t border-baitjet-700 pt-6">
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Union City, New Jersey</p>
              <p className="text-gray-400 text-sm mt-1">Recording at Sherny 911's studio</p>
            </div>

            <div className="border-t border-baitjet-700 pt-6">
              <h3 className="font-semibold mb-2">Label</h3>
              <p className="text-gray-300">DripJet Records</p>
              <p className="text-gray-400 text-sm mt-1">Independent label based in Union City, NJ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
