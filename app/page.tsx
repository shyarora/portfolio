import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPortfolioData } from "@/lib/api";

// Force dynamic rendering - always fetch fresh data from API
export const dynamic = 'force-dynamic';

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Experience data={data.experiences} />
      <Projects data={data.projects} />
      <Contact data={data.contact} />
      <Footer />
    </main>
  );
}
