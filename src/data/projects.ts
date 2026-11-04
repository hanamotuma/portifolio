import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'dccp',
    slug: 'digital-campus-clearance-platform',
    title: 'Digital Campus Clearance Platform',
    summary: 'Multi-university digital clearance solution with role-based access, sequential office clearance and university management.',
    description: 'A collaborative full-stack platform that digitizes the student clearance process across multiple universities. Students progress through sequential office approvals while administrators manage universities, offices and role assignments.',
    category: 'full-stack',
    technologies: ['Laravel', 'Vue', 'Inertia', 'MySQL'],
    thumbnail: '/images/projects/dccp/thumb.webp',
    gallery: [
      '/images/projects/dccp/01.webp',
      '/images/projects/dccp/02.webp',
      '/images/projects/dccp/03.webp'
    ],
    githubUrl: 'https://github.com/hanamotuma',
    featured: true,
    status: 'completed',
    ownership: 'collaborative',
    role: 'Full-stack developer — contributed to backend clearance workflow logic, role-based access control, database relationships and Vue interface components.',
    year: 2024,
    problem: 'Manual, paper-based clearance across multiple offices is slow, error-prone and hard to audit.',
    features: [
      'Role-based access for students, office staff and administrators',
      'Sequential office clearance workflow',
      'Multi-university management',
      'Clearance progress tracking and audit trail'
    ],
    challenges: [
      'Enforcing order-dependent clearance steps securely',
      'Modeling multi-tenant university data cleanly'
    ],
    solutions: [
      'Server-side state machine for step transitions with policy checks',
      'Normalized schema with university-scoped pivots and query scopes'
    ]
  },
  {
    id: 'retention',
    slug: 'customer-retention-system',
    title: 'Customer Retention System',
    summary: 'AI-driven churn prediction and revenue analytics.',
    description: 'An analytics platform exploring customer retention, churn prediction and business insight generation using statistical modeling in R with a Laravel + Tailwind presentation layer.',
    category: 'data',
    technologies: ['Laravel', 'R', 'SQLite', 'Tailwind'],
    thumbnail: '/images/projects/retention/thumb.webp',
    gallery: ['/images/projects/retention/01.webp'],
    githubUrl: 'https://github.com/hanamotuma',
    featured: true,
    status: 'completed',
    ownership: 'individual',
    role: 'Designed and built the full pipeline: data modeling in R, churn feature engineering, and the Laravel analytics dashboard.',
    year: 2024,
    problem: 'Businesses lack clear signals about which customers are likely to churn and why revenue shifts.',
    features: [
      'Churn probability scoring',
      'Revenue trend analytics',
      'Cohort comparison',
      'Exportable insight reports'
    ],
    challenges: ['Meaningful churn features from limited data'],
    solutions: ['Engineered recency/frequency/tenure features and evaluated several baseline models in R']
  },
  {
    id: 'elearning',
    slug: 'e-learning-course-management',
    title: 'E-Learning & Course Management Platform',
    summary: 'Learning platform with student and instructor workflows, courses, quizzes, support tickets and role-based access.',
    description: 'An independent full-stack project supporting course authoring, student enrollment, quiz delivery and an internal support ticket system.',
    category: 'full-stack',
    technologies: ['Laravel', 'Vue', 'Inertia', 'MySQL'],
    thumbnail: '/images/projects/elearning/thumb.webp',
    gallery: [],
    githubUrl: 'https://github.com/hanamotuma',
    featured: true,
    status: 'completed',
    ownership: 'individual',
    role: 'Sole developer — architecture, backend, frontend and database design.',
    year: 2024,
    features: [
      'Course and lesson management',
      'Quiz engine with scoring',
      'Support ticket workflow',
      'Separate student and instructor roles'
    ]
  },
  {
    id: 'recipes',
    slug: 'recipe-sharing-platform',
    title: 'Recipe Sharing Platform',
    summary: 'Recipe creation, discovery, categories, favorites, comments and user profiles.',
    description: 'A social recipe platform where users create, discover and save recipes with categories, comments and profile pages.',
    category: 'full-stack',
    technologies: ['Laravel', 'Vue', 'Inertia', 'MySQL'],
    thumbnail: '/images/projects/recipes/thumb.webp',
    gallery: [],
    githubUrl: 'https://github.com/hanamotuma',
    featured: false,
    status: 'completed',
    ownership: 'individual',
    role: 'Sole developer.',
    year: 2024,
    features: ['Recipe CRUD', 'Categories & discovery', 'Favorites', 'Comments', 'User profiles']
  },
  {
    id: 'academic-analytics',
    slug: 'student-academic-performance-analytics',
    title: 'Student Academic Performance & Risk Analytics',
    summary: 'Data analysis of academic performance metrics, attendance and student risk visualization.',
    description: 'A data analysis project exploring academic performance, attendance correlation and student risk using R and tidyverse tools.',
    category: 'data',
    technologies: ['R', 'ggplot2', 'dplyr', 'tidyr'],
    thumbnail: '/images/projects/academic/thumb.webp',
    gallery: [],
    githubUrl: 'https://github.com/hanamotuma',
    featured: false,
    status: 'completed',
    ownership: 'individual',
    role: 'Data cleaning, analysis and visualization.',
    year: 2024,
    features: ['Performance metrics analysis', 'Attendance correlation', 'Risk visualization']
  }
]

export const getFeaturedProjects = (): Project[] => projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

export const getRelatedProjects = (project: Project, limit = 3): Project[] =>
  projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, limit)