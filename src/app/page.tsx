import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-8">
        <Hero />
        <About />
        <Experience />
        <Blog />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
