import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="section-padding container-max py-20">
          <div className="text-center">
            <h1 className="section-title">Blog</h1>
            <p className="section-subtitle mx-auto mb-12">
              Coming soon! This is where I&apos;ll share my thoughts, tutorials, and
              insights about web development and technology.
            </p>

            <div className="card p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Blog Under Construction
              </h2>
              <p className="text-primary-600 mb-6">
                I&apos;m working on creating valuable content for the developer
                community. Stay tuned for articles about React, Next.js,
                TypeScript, and more!
              </p>
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
