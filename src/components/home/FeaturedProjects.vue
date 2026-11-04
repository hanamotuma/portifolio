<script setup lang="ts">
import { getFeaturedProjects } from '@/data/projects'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'
const featured = getFeaturedProjects()
</script>

<template>
  <section class="section border-t border-border">
    <div class="container-content">
      <div class="flex items-end justify-between mb-10">
        <div class="reveal">
          <p class="technical-label mb-4">03 — Selected Work</p>
          <h2 class="text-3xl md:text-4xl font-bold font-heading">Featured projects</h2>
        </div>
        <RouterLink to="/projects" class="text-sm text-muted hover:text-accent reveal">View all →</RouterLink>
      </div>
      <ProjectGrid :projects="featured" />
    </div>
  </section>
</template>