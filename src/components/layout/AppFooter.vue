<script setup lang="ts">
import { socialLinks } from '@/data/navigation'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border mt-16">
    <div class="container-content py-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted">
      <div>
        <p class="font-heading font-bold uppercase tracking-widest text-text">Hana Motuma</p>
        <p class="mt-1">Software Engineer · Ethiopia</p>
      </div>
      <div class="flex flex-col gap-2">
        <a :href="`mailto:${socialLinks.email}`" class="hover:text-text">{{ socialLinks.email }}</a>
        <div class="flex gap-4">
          <a :href="socialLinks.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="socialLinks.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <p class="self-end">© {{ year }} Hana Motuma</p>
    </div>
  </footer>
</template>