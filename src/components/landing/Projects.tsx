import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/definitions';
import { ArrowRight } from 'lucide-react';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary/20">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
          <Button variant="link" asChild className="p-0 h-auto mt-4 self-start font-semibold">
            <Link href="/projects">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
      </CardContent>
    </Card>
  );
}

export default async function Projects() {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud of the work we do. Here are some of our recent projects that showcase our skills and dedication.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full font-semibold">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
