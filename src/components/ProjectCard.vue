<script setup>
import { ArrowUpRight, Github } from 'lucide-vue-next';

defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
    <!-- Image Container -->
    <div class="aspect-video overflow-hidden bg-zinc-800">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="flex justify-between items-start mb-4">
        <div>
          <p class="text-sm text-zinc-400 font-medium mb-1">{{ project.category }}</p>
          <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
        </div>
        <div class="flex gap-3">
          <a :href="project.link" target="_blank" class="text-zinc-400 hover:text-white transition-colors">
            <Github class="w-5 h-5" />
          </a>
          <a :href="project.link" target="_blank" class="text-zinc-400 hover:text-white transition-colors">
            <ArrowUpRight class="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <p class="text-zinc-400 mb-6 line-clamp-2">{{ project.description }}</p>
      
      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in project.techStack" 
          :key="tech"
          class="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>