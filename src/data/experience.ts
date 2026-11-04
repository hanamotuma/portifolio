import type { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: 'omishtu-intern',
    role: 'Software Engineering Intern',
    company: 'Omishtu-Joy Tech Solutions',
    location: 'Ethiopia',
    startDate: '2024-01',
    endDate: '2024-06',
    description: 'Five-month internship focused on full-stack application development with Laravel and Vue.',
    responsibilities: [
      'Developed full-stack features across Laravel and Vue',
      'Designed and managed database relationships',
      'Implemented role-based access control',
      'Wrote validation and applied security measures',
      'Collaborated via Git, debugging and integration work'
    ],
    technologies: ['Laravel', 'Vue', 'MySQL', 'Git']
  }
]