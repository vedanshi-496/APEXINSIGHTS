import { getProjects } from "@/lib/data";
import { ProjectsClient } from "./client";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
        <h1 className="text-2xl font-bold font-headline mb-6">Manage Projects</h1>
        <ProjectsClient data={projects} />
    </div>
  );
}
