export interface Experience {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  responsibilities: string[]
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  location: string
  startYear: number
  endYear: number | 'Present'
  details?: string
}

export interface SkillGroup {
  category: string
  technologies: string[]
  exploring?: boolean
}