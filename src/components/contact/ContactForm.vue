<script setup lang="ts">
import { reactive, ref } from 'vue'

// Replace with your own Formspree form ID
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errors = reactive<Record<string, string>>({})

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Valid email required'
  if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return Object.keys(errors).length === 0
}

async function submit() {
  if (!validate()) return
  status.value = 'sending'
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form)
    })
    if (!res.ok) throw new Error('Request failed')
    status.value = 'success'
    form.name = form.email = form.message = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form class="space-y-4" novalidate @submit.prevent="submit">
    <div>
      <label for="name" class="technical-label block mb-1">Name</label>
      <input
        id="name" v-model="form.name" type="text"
        class="w-full bg-surface border border-border rounded px-3 py-2 text-sm focus:border-accent outline-none"
        :aria-invalid="!!errors.name"
      />
      <p v-if="errors.name" class="text-accent text-xs mt-1">{{ errors.name }}</p>
    </div>
    <div>
      <label for="email" class="technical-label block mb-1">Email</label>
      <input
        id="email" v-model="form.email" type="email"
        class="w-full bg-surface border border-border rounded px-3 py-2 text-sm focus:border-accent outline-none"
        :aria-invalid="!!errors.email"
      />
      <p v-if="errors.email" class="text-accent text-xs mt-1">{{ errors.email }}</p>
    </div>
    <div>
      <label for="message" class="technical-label block mb-1">Message</label>
      <textarea
        id="message" v-model="form.message" rows="5"
        class="w-full bg-surface border border-border rounded px-3 py-2 text-sm focus:border-accent outline-none resize-y"
        :aria-invalid="!!errors.message"
      />
      <p v-if="errors.message" class="text-accent text-xs mt-1">{{ errors.message }}</p>
    </div>
    <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
      {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
    </button>
    <p v-if="status === 'success'" class="text-green-500 text-sm">Message sent. Thank you!</p>
    <p v-if="status === 'error'" class="text-accent text-sm">Something went wrong. Please email me directly.</p>
  </form>
</template>