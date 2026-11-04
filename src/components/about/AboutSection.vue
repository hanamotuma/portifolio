<script setup lang="ts">
const highlights = [
  'Full-stack application development',
  'System design and problem-solving',
  'Database design',
  'Collaborative software development',
  'Continuous learning in AI and data technologies'
]
</script>

<template>
  <section id="about" class="section border-t border-border">
    <div class="container-content grid lg:grid-cols-[0.4fr_1fr] gap-10">
      <div class="reveal">
        <p class="technical-label">01 — About</p>
      </div>
      <div class="reveal">
        <h2 class="text-3xl md:text-4xl font-bold font-heading mb-6">
          Engineering with clarity and intent.
        </h2>
        <p class="text-muted max-w-2xl leading-relaxed">
          I work across frontend and backend development, with an interest in
          building practical, scalable software systems. I care about the design
          decisions behind the code — how data is modeled, how systems are
          structured, and how software stays understandable over time.
        </p>
        <ul class="mt-8 grid sm:grid-cols-2 gap-3">
          <li
            v-for="item in highlights"
            :key="item"
            class="flex items-start gap-3 text-sm text-muted"
          >
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>