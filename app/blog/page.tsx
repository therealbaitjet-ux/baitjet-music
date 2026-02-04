import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Production Tips, Stories & Behind the Scenes",
  description: "Read the Baitjet blog for electronic music production tips, behind-the-scenes stories, and insights into the creative process.",
  alternates: {
    canonical: "https://baitjet.com/blog",
  },
};

const blogPosts = [
  {
    slug: "how-i-produced-come-to-the-party",
    title: "How I Produced 'Come to The Party'",
    excerpt: "A complete breakdown of the production process behind my debut single, from initial idea to final master.",
    date: "February 2025",
    readTime: "8 min read",
    category: "Production"
  },
  {
    slug: "future-bass-drum-programming",
    title: "Future Bass Drum Programming: Beyond the Basics",
    excerpt: "Essential techniques for programming trap drums that hit hard and groove naturally.",
    date: "February 2025",
    readTime: "6 min read",
    category: "Tutorial"
  },
  {
    slug: "top-10-production-plugins",
    title: "My Top 10 Production Plugins",
    excerpt: "The essential plugins I use for sound design, mixing, and mastering future bass and trap tracks.",
    date: "February 2025",
    readTime: "5 min read",
    category: "Gear"
  },
  {
    slug: "vocal-chop-techniques",
    title: "Vocal Chop Techniques for Emotional Impact",
    excerpt: "How to create emotive vocal manipulations that elevate your future bass tracks.",
    date: "January 2025",
    readTime: "7 min read",
    category: "Tutorial"
  },
  {
    slug: "mixing-low-end",
    title: "Mixing Low-End: Getting Club-Ready Bass",
    excerpt: "Strategies for achieving powerful, clear bass that translates on any system.",
    date: "January 2025",
    readTime: "8 min read",
    category: "Mixing"
  },
  {
    slug: "serum-sound-design",
    title: "Serum Sound Design: My Go-To Patches",
    excerpt: "A walkthrough of my favorite Serum patches and how I design future bass sounds.",
    date: "January 2025",
    readTime: "10 min read",
    category: "Sound Design"
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Production tips, behind-the-scenes stories, and insights into the creative process 
        behind Baitjet's music.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-baitjet-800 rounded-xl p-6 hover:bg-baitjet-700 transition group"
          >
            <div className="flex items-center gap-2 text-sm text-baitjet-accent mb-3">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold mb-3 group-hover:text-baitjet-accent transition">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              {post.excerpt}
            </p>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
