<script setup lang="ts">
import { reactive } from 'vue'
import { socialLinks } from '@/data/navigation'

const form = reactive({ name: '', email: '', message: '' })

function onSubmit() {
  const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
  const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)
  window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="section">
    <div class="container-content grid gap-12 md:grid-cols-2">
      <div>
        <p class="technical-label">Contact</p>
        <h1 class="mt-3 font-heading text-4xl font-bold md:text-5xl">Get in touch</h1>
        <p class="mt-4 max-w-md text-muted">
          Have a project, role or collaboration in mind? Send a message and I'll get back to you.
        </p>

        <div class="mt-8 space-y-3 text-sm">
          <a :href="`mailto:${socialLinks.email}`" class="block text-accent hover:underline">
            {{ socialLinks.email }}
          </a>
          <a :href="socialLinks.github" target="_blank" rel="noopener" class="block text-muted hover:text-text">
            GitHub
          </a>
          <a :href="socialLinks.linkedin" target="_blank" rel="noopener" class="block text-muted hover:text-text">
            LinkedIn
          </a>
        </div>
      </div>

      <form class="card space-y-4 p-6" @submit.prevent="onSubmit">
        <div>
          <label for="name" class="mb-1 block text-sm text-muted">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-md border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent"
          />
        </div>
        <div>
          <label for="email" class="mb-1 block text-sm text-muted">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-md border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent"
          />
        </div>
        <div>
          <label for="message" class="mb-1 block text-sm text-muted">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full rounded-md border border-border bg-bg px-3 py-2 text-text outline-none focus:border-accent"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full justify-center">Send message</button>
      </form>
    </div>
  </section>
</template>
