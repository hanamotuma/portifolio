<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types/project'

type Filter = 'all' | ProjectCategory

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Full-stack', value: 'full-stack' },
  { label: 'Backend', value: 'backend' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Data', value: 'data' }
]

const active = ref<Filter>('all')

const filtered = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.category === active.value)
)
</script>

<template>
  <section class="section">
    <div class="container-content">
      <p class="technical-label">Portfolio</p>
      <h1 class="mt-3 font-heading text-4xl font-bold md:text-5xl">Projects</h1>
      <p class="mt-4 max-w-xl text-muted">
        Full-stack applications and data projects built across university and independent work.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="filter in filters"
          :key="filter.value"
          type="button"
          class="btn"
          :class="active === filter.value ? 'btn-primary' : 'btn-ghost'"
          @click="active = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <div v-if="filtered.length" class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
      </div>
      <p v-else class="mt-8 text-muted">No projects in this category yet.</p>
    </div>
  </section>
</template>
