import { ref, watch } from 'vue'

type Theme = 'dark' | 'light'
const stored = (localStorage.getItem('theme') as Theme) || 'dark'
const theme = ref<Theme>(stored)

const apply = (t: Theme) => {
  document.documentElement.setAttribute('data-theme', t)
  localStorage.setItem('theme', t)
}
apply(theme.value)

export function useTheme() {
  const toggle = () => { theme.value = theme.value === 'dark' ? 'light' : 'dark' }
  watch(theme, apply)
  return { theme, toggle }
}