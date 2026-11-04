<script setup lang="ts">
import { computed } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { getProjectBySlug, getRelatedProjects } from '@/data/projects'

const props = defineProps<{ slug: string }>()

const project = computed(() => getProjectBySlug(props.slug))
const related = computed(() => (project.value ? getRelatedProjects(project.value) : []))
</script>

<template>
  <section class="section">
    <div class="container-content">
      <template v-if="project">
        <RouterLink to="/projects" class="text-sm text-accent hover:underline">← Back to projects</RouterLink>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <span class="technical-label">{{ project.category }}</span>
          <span class="text-xs text-muted">{{ project.year }}</span>
          <span class="tag">{{ project.status }}</span>
          <span class="tag">{{ project.ownership }}</span>
        </div>

        <h1 class="mt-4 font-heading text-4xl font-bold md:text-5xl">{{ project.title }}</h1>
        <p class="mt-4 max-w-2xl text-lg text-muted">{{ project.description }}</p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            View on GitHub
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-ghost"
          >
            Live site
          </a>
        </div>

        <div class="mt-8 flex flex-wrap gap-2">
          <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
        </div>

        <div class="mt-12 grid gap-10 md:grid-cols-2">
          <div class="space-y-8">
            <div v-if="project.problem">
              <h2 class="font-heading text-xl font-semibold">The problem</h2>
              <p class="mt-2 text-muted">{{ project.problem }}</p>
            </div>
            <div>
              <h2 class="font-heading text-xl font-semibold">My role</h2>
              <p class="mt-2 text-muted">{{ project.role }}</p>
            </div>
            <div v-if="project.features?.length">
              <h2 class="font-heading text-xl font-semibold">Key features</h2>
              <ul class="mt-2 list-inside list-disc space-y-1 text-muted">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>

          <div class="space-y-8">
            <div v-if="project.challenges?.length">
              <h2 class="font-heading text-xl font-semibold">Challenges</h2>
              <ul class="mt-2 list-inside list-disc space-y-1 text-muted">
                <li v-for="challenge in project.challenges" :key="challenge">{{ challenge }}</li>
              </ul>
            </div>
            <div v-if="project.solutions?.length">
              <h2 class="font-heading text-xl font-semibold">Solutions</h2>
              <ul class="mt-2 list-inside list-disc space-y-1 text-muted">
                <li v-for="solution in project.solutions" :key="solution">{{ solution }}</li>
              </ul>
            </div>
            <div v-if="project.limitations?.length">
              <h2 class="font-heading text-xl font-semibold">Limitations</h2>
              <ul class="mt-2 list-inside list-disc space-y-1 text-muted">
                <li v-for="item in project.limitations" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div v-if="related.length" class="mt-16">
          <h2 class="font-heading text-2xl font-bold">Related projects</h2>
          <div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard v-for="item in related" :key="item.id" :project="item" />
          </div>
        </div>
      </template>

      <div v-else class="py-16 text-center">
        <p class="technical-label">404</p>
        <h1 class="mt-3 font-heading text-4xl font-bold">Project not found</h1>
        <p class="mt-3 text-muted">The project you're looking for doesn't exist.</p>
        <RouterLink to="/projects" class="btn btn-primary mt-6">Back to projects</RouterLink>
      </div>
    </div>
  </section>
</template>
