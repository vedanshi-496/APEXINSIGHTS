import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import Clients from "@/components/landing/Clients";
import Contact from "@/components/landing/Contact";
import Newsletter from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Newsletter />
        <Hero />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
