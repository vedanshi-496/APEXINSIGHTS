import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/landing/Projects";
import Clients from "@/components/landing/Clients";
import Contact from "@/components/landing/Contact";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                Drive Your Business Forward.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We deliver cutting-edge digital solutions that empower your brand, streamline your operations, and fuel your growth. Let's build the future together.
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary/80"/>Custom Software Development</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary/80"/>Cloud & DevOps Solutions</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary/80"/>Data Analytics & AI</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="rounded-full font-semibold">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full font-semibold">
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="rounded-xl object-cover shadow-lg"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
