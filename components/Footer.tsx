import { Github, Linkedin, Mail } from 'lucide-react'
import personalData from '@/data/personal.json'

export default function Footer() {
  return (
    <footer className="border-t border-muted-blue bg-background-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-gray text-sm">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-gray hover:text-electric-blue transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-gray hover:text-electric-blue transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-muted-gray hover:text-electric-blue transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

