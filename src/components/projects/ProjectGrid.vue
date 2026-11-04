<script setup lang="ts">
import type { Project } from '@/types/project'
import ProjectCard from './ProjectCard.vue'
defineProps<{ projects: Project[] }>()
</script>

<template>
  <div v-if="projects.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
  </div>
  <p v-else class="text-muted text-center py-16">No projects match your filters.</p>
</template>