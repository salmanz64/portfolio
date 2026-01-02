import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-background-secondary rounded-2xl border border-muted-blue hover:border-electric-blue transition-all duration-300 hover:shadow-glow-hover"
    >
      {/* Gradient glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-electric-blue/0 group-hover:from-electric-blue/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
      
      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-electric-blue-light transition-colors duration-300">
          {project.name}
        </h3>
        
        <p className="text-muted-gray mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-muted-blue text-electric-blue-light rounded-full border border-electric-blue/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-electric-blue hover:text-electric-blue-light transition-colors duration-300 group/link"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={18} />
            <span className="text-sm font-medium">Code</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-electric-blue hover:text-electric-blue-light transition-colors duration-300 group/link"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={18} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

