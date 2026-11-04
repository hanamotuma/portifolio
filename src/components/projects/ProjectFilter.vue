<script setup lang="ts">
import type { ProjectCategory } from '@/types/project'
defineProps<{ modelValue: ProjectCategory | 'all'; query: string }>()
const emit = defineEmits<{
  'update:modelValue': [ProjectCategory | 'all']
  'update:query': [string]
}>()

const categories: Array<{ value: ProjectCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'full-stack', label: 'Full-stack' },
  { value: 'data', label: 'Data' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' }
]
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 justify-between mb-8">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="px-3 py-1.5 text-xs uppercase tracking-wider rounded border transition-colors"
        :class="modelValue === cat.value
          ? 'bg-accent text-white border-accent'
          : 'border-border text-muted hover:text-text'"
        @click="emit('update:modelValue', cat.value)"
      >
        {{ cat.label }}
      </button>
    </div>
    <input
      :value="query"
      type="search"
      placeholder="Search projects…"
      class="bg-surface border border-border rounded px-3 py-2 text-sm w-full sm:w-64 focus:border-accent outline-none"
      @input="emit('update:query', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>