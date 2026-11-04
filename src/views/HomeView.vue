<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { getFeaturedProjects } from '@/data/projects'
import { skills } from '@/data/skills'
import { experiences } from '@/data/experience'
import { education } from '@/data/education'
import { socialLinks } from '@/data/navigation'

const featuredProjects = getFeaturedProjects()

function formatDate(value: string) {
  return new Date(`${value}-01`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })
}
</script>

<template>
  <div>
    <section class="section">
      <div class="container-content">
        <p class="technical-label">Software Engineer</p>
        <h1 class="hero-title mt-4 text-5xl md:text-7xl">
          Hana<br />Motuma<span class="text-accent">.</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg text-muted">
          Building thoughtful digital products through engineering, technology and
          problem-solving.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/projects" class="btn btn-primary">View Projects</RouterLink>
          <RouterLink to="/contact" class="btn btn-ghost">Get in Touch</RouterLink>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container-content grid gap-10 md:grid-cols-2">
        <div>
          <p class="technical-label">About</p>
          <h2 class="mt-3 font-heading text-3xl font-bold">Full-stack engineer focused on practical systems.</h2>
        </div>
        <div class="space-y-4 text-muted">
          <p>
            I am a software engineering student at Jimma University with hands-on experience
            building full-stack applications using Laravel, Vue and relational databases.
          </p>
          <p>
            I enjoy turning complex workflows into clear, reliable software — from role-based
            access and database design to interface components and analytics.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-content">
        <div class="flex items-end justify-between gap-4">
          <div>
            <p class="technical-label">Selected Work</p>
            <h2 class="mt-3 font-heading text-3xl font-bold">Featured Projects</h2>
          </div>
          <RouterLink to="/projects" class="text-sm text-accent hover:underline">All projects</RouterLink>
        </div>
        <div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-content">
        <p class="technical-label">Capabilities</p>
        <h2 class="mt-3 font-heading text-3xl font-bold">Skills</h2>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="group in skills" :key="group.category" class="card p-6">
            <h3 class="font-heading text-sm uppercase tracking-widest" :class="group.exploring ? 'text-muted' : 'text-accent'">
              {{ group.category }}
            </h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tech in group.technologies" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-content grid gap-10 md:grid-cols-2">
        <div>
          <p class="technical-label">Experience</p>
          <h2 class="mt-3 font-heading text-3xl font-bold">Where I've worked</h2>
          <div class="mt-8 space-y-8">
            <article v-for="job in experiences" :key="job.id" class="border-l border-border pl-6">
              <h3 class="font-heading text-lg font-semibold">{{ job.role }}</h3>
              <p class="text-sm text-accent">{{ job.company }} · {{ job.location }}</p>
              <p class="mt-1 text-xs text-muted">
                {{ formatDate(job.startDate) }} — {{ job.endDate === 'Present' ? 'Present' : formatDate(job.endDate) }}
              </p>
              <p class="mt-3 text-sm text-muted">{{ job.description }}</p>
              <ul class="mt-3 list-inside list-disc space-y-1 text-sm text-muted">
                <li v-for="item in job.responsibilities" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>

        <div>
          <p class="technical-label">Education</p>
          <h2 class="mt-3 font-heading text-3xl font-bold">Academic background</h2>
          <div class="mt-8 space-y-8">
            <article v-for="item in education" :key="item.id" class="border-l border-border pl-6">
              <h3 class="font-heading text-lg font-semibold">{{ item.degree }}</h3>
              <p class="text-sm text-accent">{{ item.institution }} · {{ item.location }}</p>
              <p class="mt-1 text-xs text-muted">{{ item.startYear }} — {{ item.endYear }}</p>
              <p v-if="item.details" class="mt-3 text-sm text-muted">{{ item.details }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-content card p-10 text-center">
        <p class="technical-label">Contact</p>
        <h2 class="mt-3 font-heading text-3xl font-bold">Let's build something.</h2>
        <p class="mt-3 text-muted">Open to internships, freelance work and collaboration.</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <a :href="`mailto:${socialLinks.email}`" class="btn btn-primary">{{ socialLinks.email }}</a>
          <RouterLink to="/contact" class="btn btn-ghost">Contact page</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
