export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
  screenshots?: string[]
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools' | 'Mobile'
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description?: string
  gpa?: string
}

export interface Achievement {
  title: string
  description?: string
  year?: string
  issuer?: string
}

