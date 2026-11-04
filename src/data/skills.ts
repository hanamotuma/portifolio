import type { SkillGroup } from '@/types/experience'

export const skills: SkillGroup[] = [
  { category: 'Frontend', technologies: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind'] },
  { category: 'Backend', technologies: ['Laravel', 'PHP', 'Node.js'] },
  { category: 'Databases', technologies: ['MySQL', 'MongoDB', 'SQLite'] },
  { category: 'Programming', technologies: ['PHP', 'JavaScript', 'Python', 'R', 'C++'] },
  { category: 'Data & Analytics', technologies: ['R', 'ggplot2', 'dplyr'] },
  { category: 'Tools', technologies: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  { category: 'Currently Exploring', technologies: ['AI', 'Machine Learning', 'Cybersecurity'], exploring: true }
]