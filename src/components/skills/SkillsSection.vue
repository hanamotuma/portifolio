<script setup lang="ts">
import { skills } from '@/data/skills'
</script>

<template>
  <section id="skills" class="section border-t border-border">
    <div class="container-content">
      <p class="technical-label mb-4 reveal">02 — Skills</p>
      <h2 class="text-3xl md:text-4xl font-bold font-heading mb-10 reveal">Technical range</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="group in skills"
          :key="group.category"
          class="card p-5 reveal"
        >
          <h3 class="technical-label mb-3" :class="group.exploring ? 'text-muted' : ''">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="tech in group.technologies" :key="tech" class="tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>