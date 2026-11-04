import { describe, it, expect } from 'vitest'
import { projects, getFeaturedProjects, getProjectBySlug, getRelatedProjects } from '@/data/projects'

describe('project data', () => {
  it('every project has required fields', () => {
    projects.forEach((p) => {
      expect(p.id).toBeTruthy()
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.category).toBeTruthy()
      expect(Array.isArray(p.technologies)).toBe(true)
    })
  })

  it('slugs are unique', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('find by slug works', () => {
    expect(getProjectBySlug('digital-campus-clearance-platform')?.title).toContain('Digital Campus')
  })

  it('featured filter works', () => {
    expect(getFeaturedProjects().every((p) => p.featured)).toBe(true)
  })

  it('related projects share category and exclude self', () => {
    const p = projects[0]
    getRelatedProjects(p).forEach((r) => {
      expect(r.id).not.toBe(p.id)
      expect(r.category).toBe(p.category)
    })
  })
})