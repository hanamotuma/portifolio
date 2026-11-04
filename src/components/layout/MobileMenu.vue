<script setup lang="ts">
import { navLinks } from '@/data/navigation'
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ 'update:open': [boolean] }>()
</script>

<template>
  <Transition name="slide">
    <div
      v-if="open"
      id="mobile-menu"
      class="md:hidden border-t border-border bg-surface"
    >
      <nav class="container-content flex flex-col py-4" aria-label="Mobile">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="py-3 text-sm text-muted hover:text-text"
          @click="emit('update:open', false)"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 200ms ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>