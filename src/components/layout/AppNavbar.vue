<script setup lang="ts">
import { ref } from 'vue'
import { navLinks } from '@/data/navigation'
import MobileMenu from './MobileMenu.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
    <div class="container-content flex items-center justify-between h-16">
      <RouterLink to="/" class="font-heading font-bold uppercase tracking-widest text-sm">
        Hana<span class="text-accent">.</span>Motuma
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8" aria-label="Main">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm text-muted hover:text-text transition-colors"
          active-class="text-text"
        >
          {{ link.label }}
        </RouterLink>
        <ThemeToggle />
      </nav>

      <button
        class="md:hidden p-2 text-text"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!open" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <MobileMenu v-model:open="open" />
  </header>
</template>