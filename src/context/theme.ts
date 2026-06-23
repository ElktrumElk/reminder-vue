import { useRerender } from '@/lib/render-vue'

const getInitialTheme = (): string => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const savedTheme = getInitialTheme()
document.documentElement.setAttribute('data-theme', savedTheme)

export const [theme, setTheme] = useRerender<string>(savedTheme)

export const toggleTheme = () => {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
  setTheme(next)
}
