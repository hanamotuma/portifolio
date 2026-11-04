<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug, getRelatedProjects } from '@/data/projects'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug as string))
const related = computed(() => (project.value ? getRelatedProjects(project.value) : []))
</script>

<template>
  <section v-if="project" class="section">
    <div class="container-content max-w-4xl">
      <RouterLink to="/projects" class="text-sm text-muted hover:text-accent">← All projects</RouterLink>

      <div class="mt-6 flex items-center gap-3">
        <span class="technical-label">{{ project.category }}</span>
        <span class="text-xs text-muted">{{ project.year }}</span>
        <span class="tag">{{ project.ownership === 'individual' ? 'Individual' : 'Team' }}</span>
        <span class="tag">{{ project.status }}</span>
      </div>

      <h1 class="hero-title text-4xl md:text-5xl mt-4">{{ project.title }}</h1>
      <p class="mt-6 text-lg text-muted leading-relaxed">{{ project.description }}</p>

      <div class="mt-8 flex flex-wrap gap-3">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener" class="btn btn-primary">Live Demo ↗</a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="btn btn-ghost">GitHub ↗</a>
      </div>

      <div class="mt-10 flex flex-wrap gap-1.5">
        <span v-for="t in project.technologies" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="mt-12 space-y-10">
        <section v-if="project.problem">
          <h2 class="technical-label mb-3">Problem</h2>
          <p class="text-muted leading-relaxed">{{ project.problem }}</p>
        </section>

        <section>
          <h2 class="technical-label mb-3">My Role</h2>
          <p class="text-muted leading-relaxed">{{ project.role }}</p>
        </section>

        <section v-if="project.features?.length">
          <h2 class="technical-label mb-3">Main Features</h2>
          <ul class="space-y-2">
            <li v-for="f in project.features" :key="f" class="flex gap-3 text-muted">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{{ f }}
            </li>
          </ul>
        </section>

        <section v-if="project.challenges?.length">
          <h2 class="technical-label mb-3">Challenges</h2>
          <ul class="space-y-2">
            <li v-for="c in project.challenges" :key="c" class="flex gap-3 text-muted">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-border shrink-0"></span>{{ c }}
            </li>
          </ul>
        </section>

        <section v-if="project.solutions?.length">
          <h2 class="technical-label mb-3">Solutions</h2>
          <ul class="space-y-2">
            <li v-for="s in project.solutions" :key="s" class="flex gap-3 text-muted">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>{{ s }}
            </li>
          </ul>
        </section>

        <section v-if="project.gallery.length">
          <h2 class="technical-label mb-3">Screenshots</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <img
              v-for="img in project.gallery"
              :key="img"
              :src="img"
              :alt="`${project.title} screenshot`"
              class="rounded-md border border-border w-full"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      <section v-if="related.length" class="mt-16 border-t border-border pt-12">
        <h2 class="text-2xl font-heading font-bold mb-6">Related projects</h2>
        <ProjectGrid :projects="related" />
      </section>
    </div>
  </section>
  <section v-else class="section">
    <div class="container-content text-center">
      <h1 class="hero-title text-4xl mb-4">Project not found</h1>
      <RouterLink to="/projects" class="btn btn-primary">Back to projects</RouterLink>
    </div>
  </section>
</template>