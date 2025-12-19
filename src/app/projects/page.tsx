import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/lib/data';
import type { Project } from '@/lib/definitions';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function ProjectCard({ project, reverse = false }: { project: Project, reverse?: boolean }) {
  return (
    <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`grid md:grid-cols-2 items-center`}>
        <div className={`relative aspect-video md:aspect-auto md:h-full min-h-[300px] ${reverse ? 'md:order-last' : ''}`}>
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover"
            data-ai-hint={project.imageHint}
          />
        </div>
        <div className="p-8 md:p-10">
          <Badge variant="secondary" className="mb-4">Case Study</Badge>
          <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          <Button variant="link" asChild className="p-0 h-auto font-semibold">
            <Link href="#">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}


export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover a selection of our finest projects, each a testament to our commitment to quality, innovation, and client success.
              </p>
            </div>

            <div className="grid gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
