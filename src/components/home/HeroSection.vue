<script setup lang="ts">
import { socialLinks } from '@/data/navigation'
</script>

<template>
  <section class="section relative overflow-hidden">
    <div class="container-content grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
      <div>
        <p class="technical-label mb-6">Software Engineer · Ethiopia</p>

        <h1 class="hero-title text-[clamp(2.75rem,8vw,6rem)]">
          Hana<br />
          Motuma
        </h1>

        <p class="mt-8 max-w-xl text-muted text-lg leading-relaxed">
          Building thoughtful digital products through engineering,
          technology and problem-solving.
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <RouterLink to="/projects" class="btn btn-primary">Explore My Work</RouterLink>
          <a href="/files/Hana-Motuma-CV.pdf" download class="btn btn-ghost">Download Resume</a>
          <RouterLink to="/contact" class="btn btn-ghost">Let's Connect</RouterLink>
        </div>

        <div class="mt-10 flex items-center gap-6 text-sm text-muted">
          <a :href="socialLinks.github" target="_blank" rel="noopener" class="hover:text-text">GitHub ↗</a>
          <a :href="socialLinks.linkedin" target="_blank" rel="noopener" class="hover:text-text">LinkedIn ↗</a>
          <span class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            Available for opportunities
          </span>
        </div>
      </div>

      <div class="hidden lg:flex items-center justify-center" aria-hidden="true">
        <div class="geometric-spin w-[340px] h-[340px] rounded-full border border-border relative">
          <div class="absolute inset-8 rounded-full border border-border" />
          <div class="absolute inset-16 rounded-full border border-accent/40" />
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  </section>
</template>