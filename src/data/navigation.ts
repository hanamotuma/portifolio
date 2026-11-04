export interface NavLink {
  label: string
  to: string
  section?: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/', section: '#about' },
  { label: 'Contact', to: '/contact' }
]

export const socialLinks = {
  github: 'https://github.com/hanamotuma',
  linkedin: 'https://linkedin.com/in/hanamotuma',
  email: 'hanamotuma1@gmail.com'
}