'use client'

import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '@/data/projects.json'
import { Project } from '@/types'

const projects = projectsData as Project[]

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A collection of projects I've built with modern technologies"
      className="bg-background-secondary/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}

