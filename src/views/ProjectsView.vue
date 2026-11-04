<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/projects'
import ProjectFilter from '@/components/projects/ProjectFilter.vue'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'
import type { ProjectCategory } from '@/types/project'

const category = ref<ProjectCategory | 'all'>('all')
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return projects.filter((p) => {
    const matchesCat = category.value === 'all' || p.category === category.value
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    return matchesCat && matchesQuery
  })
})
</script>

<template>
  <section class="section">
    <div class="container-content">
      <p class="technical-label mb-4">Projects</p>
      <h1 class="hero-title text-4xl md:text-6xl mb-3">All Projects</h1>
      <p class="text-muted mb-10">{{ projects.length }} projects · full-stack, data and frontend work.</p>

      <ProjectFilter v-model="category" v-model:query="query" />
      <ProjectGrid :projects="filtered" />
    </div>
  </section>
</template>