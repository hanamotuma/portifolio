<script setup lang="ts">
import { experiences } from '@/data/experience'
import { education } from '@/data/education'

const fmt = (d: string) =>
  d === 'Present' ? 'Present' : new Date(d).toLocaleDateString('en', { month: 'short', year: 'numeric' })
</script>

<template>
  <section id="experience" class="section border-t border-border">
    <div class="container-content">
      <p class="technical-label mb-4 reveal">04 — Experience</p>
      <h2 class="text-3xl md:text-4xl font-bold font-heading mb-10 reveal">Where I've worked</h2>

      <div class="space-y-8">
        <article v-for="exp in experiences" :key="exp.id" class="card p-6 reveal">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 class="font-heading text-xl font-bold">{{ exp.role }}</h3>
              <p class="text-muted">{{ exp.company }} · {{ exp.location }}</p>
            </div>
            <p class="technical-label whitespace-nowrap">
              {{ fmt(exp.startDate) }} — {{ fmt(exp.endDate) }}
            </p>
          </div>
          <p class="mt-4 text-sm text-muted">{{ exp.description }}</p>
          <ul class="mt-4 space-y-1.5">
            <li v-for="r in exp.responsibilities" :key="r" class="flex gap-2 text-sm text-muted">
              <span class="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0"></span>{{ r }}
            </li>
          </ul>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span v-for="t in exp.technologies" :key="t" class="tag">{{ t }}</span>
          </div>
        </article>
      </div>

      <h2 class="text-3xl md:text-4xl font-bold font-heading mt-16 mb-10 reveal">Education</h2>
      <div class="space-y-6">
        <article v-for="ed in education" :key="ed.id" class="card p-6 reveal">
          <div class="flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 class="font-heading text-xl font-bold">{{ ed.degree }}</h3>
              <p class="text-muted">{{ ed.institution }} · {{ ed.location }}</p>
            </div>
            <p class="technical-label">{{ ed.startYear }} — {{ ed.endYear }}</p>
          </div>
          <p v-if="ed.details" class="mt-3 text-sm text-muted">{{ ed.details }}</p>
        </article>
      </div>
    </div>
  </section>
</template>