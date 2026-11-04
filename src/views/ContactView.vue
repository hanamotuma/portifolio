<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue'
import { socialLinks } from '@/data/navigation'
import { ref } from 'vue'
const copied = ref(false)
const copyEmail = async () => {
  await navigator.clipboard.writeText(socialLinks.email)
  copied.value = true
  setTimeout(() => (copied.value = false), 1800)
}
</script>

<template>
  <section class="section">
    <div class="container-content grid lg:grid-cols-2 gap-12 max-w-5xl">
      <div>
        <p class="technical-label mb-4">05 — Contact</p>
        <h1 class="hero-title text-4xl md:text-5xl mb-6">Let's work together</h1>
        <p class="text-muted leading-relaxed mb-8">
          Open to opportunities in software engineering, full-stack development
          and data-focused work. Reach out — I reply to every message.
        </p>
        <div class="space-y-4">
          <div>
            <p class="technical-label mb-1">Email</p>
            <button class="text-text hover:text-accent text-lg" @click="copyEmail">
              {{ socialLinks.email }} <span class="text-xs text-muted">({{ copied ? 'copied!' : 'click to copy' }})</span>
            </button>
          </div>
          <div>
            <p class="technical-label mb-1">GitHub</p>
            <a :href="socialLinks.github" target="_blank" rel="noopener" class="hover:text-accent">{{ socialLinks.github }}</a>
          </div>
          <div>
            <p class="technical-label mb-1">LinkedIn</p>
            <a :href="socialLinks.linkedin" target="_blank" rel="noopener" class="hover:text-accent">{{ socialLinks.linkedin }}</a>
          </div>
        </div>
      </div>
      <div class="card p-6">
        <ContactForm />
      </div>
    </div>
  </section>
</template>