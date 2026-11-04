<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{ project: Project }>()
</script>

<template>
  <RouterLink
    :to="{ name: 'project-detail', params: { slug: project.slug } }"
    class="card group flex flex-col overflow-hidden"
  >
    <div class="relative aspect-video bg-gradient-to-br from-surface via-bg to-surface">
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="technical-label">{{ project.category }}</span>
      </div>
      <span class="absolute right-4 top-4 text-xs text-muted">{{ project.year }}</span>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-heading text-lg font-semibold text-text group-hover:text-accent transition-colors">
        {{ project.title }}
      </h3>
      <p class="mt-2 flex-1 text-sm text-muted">{{ project.summary }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
      </div>
    </div>
  </RouterLink>
</template>
