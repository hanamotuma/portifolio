export type ProjectCategory = 'full-stack' | 'frontend' | 'data' | 'backend'
export type ProjectStatus = 'completed' | 'in-progress' | 'archived'
export type ProjectOwnership = 'individual' | 'collaborative'

export interface Project {
  id: string
  slug: string
  title: string
  summary: string
  description: string
  category: ProjectCategory
  technologies: string[]
  thumbnail: string
  gallery: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  status: ProjectStatus
  ownership: ProjectOwnership
  role: string
  year: number
  problem?: string
  features?: string[]
  challenges?: string[]
  solutions?: string[]
  limitations?: string[]
}