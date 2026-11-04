<script setup lang="ts">
import type { Project } from '@/types/project'
defineProps<{ project: Project }>()
</script>

<template>
  <RouterLink
    :to="`/projects/${project.slug}`"
    class="card group block p-6 reveal hover:-translate-y-1"
  >
    <div class="flex items-start justify-between mb-4">
      <span class="technical-label">{{ project.category }}</span>
      <span v-if="project.featured" class="text-[0.65rem] uppercase tracking-widest text-accent border border-accent/40 px-2 py-0.5 rounded">
        Featured
      </span>
    </div>
    <h3 class="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">
      {{ project.title }}
    </h3>
    <p class="text-sm text-muted mb-5 leading-relaxed">{{ project.summary }}</p>
    <div class="flex flex-wrap gap-1.5">
      <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
    </div>
  </RouterLink>
</template>