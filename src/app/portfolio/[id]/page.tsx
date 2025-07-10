import { notFound } from "next/navigation";
import { getProjectById, getRelatedProjects, getPrevNextProjects } from "../../lib/projectData";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = parseInt(id);

  if (isNaN(projectId)) {
    notFound();
  }

  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(projectId);
  const { prev, next } = getPrevNextProjects(projectId);

  return (
    <ProjectDetailClient project={project} relatedProjects={relatedProjects} prevProject={prev} nextProject={next} />
  );
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}
