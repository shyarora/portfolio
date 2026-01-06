import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-950 pt-24 md:pt-32">
        {/* Background decorations */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl" />
        </div>

        <div className="section-padding container-max py-12 md:py-20 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label mb-6">
              <BookOpen size={14} />
              Blog
            </span>
            <h1 className="section-title mb-4">
              Thoughts &{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Coming soon! Articles about web development, developer tools, and the tech industry.
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 md:p-12 text-center relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-secondary-500/5" />
              <div className="absolute inset-0 dot-pattern opacity-20" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-500/20 to-secondary-500/20 mb-8">
                  <Sparkles size={32} className="text-accent-400" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Blog Under Construction
                </h2>
                <p className="text-dark-400 mb-8 leading-relaxed">
                  I&apos;m working on creating valuable content for the developer community.
                  Stay tuned for articles about React, Next.js, TypeScript, developer tools,
                  and my experiences in the tech industry.
                </p>

                {/* Topics Preview */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {["React", "Next.js", "TypeScript", "DevOps", "VSCode Extensions", "Golang"].map((topic) => (
                    <span key={topic} className="tag">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Estimated time */}
                <div className="inline-flex items-center gap-2 text-sm text-dark-500 mb-8">
                  <Clock size={14} />
                  Coming in 2026
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/" className="btn-primary">
                    <ArrowLeft size={18} />
                    Back to Home
                  </Link>
                  <a
                    href="https://twitter.com/shyarora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Follow for Updates
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter signup placeholder */}
          <div className="max-w-xl mx-auto mt-12 text-center">
            <p className="text-dark-500 text-sm">
              Want to be notified when the blog launches?{" "}
              <a href="mailto:shyarora7@gmail.com" className="link-accent">
                Drop me an email
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
