<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/SkillsSection.vue'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline.vue'

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <FeaturedProjects />
    <SkillsSection />
    <ExperienceTimeline />
  </div>
</template>