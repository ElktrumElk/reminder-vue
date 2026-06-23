<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Quote {
  content: string
  author: string
}

const quote = ref<Quote | null>(null)
const loading = ref(true)
const error = ref('')

const fetchQuote = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://api.quotable.io/random')
    if (!res.ok) throw new Error('Failed to fetch quote')
    const data = await res.json()
    quote.value = { content: data.content, author: data.author }
  } catch {
    error.value = 'Could not load quote. Try again.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchQuote)
</script>

<template>
  <main class="quote-page">
    <div class="quote-card">
      <div v-if="loading" class="state-msg">Loading...</div>
      <div v-else-if="error" class="state-msg error">{{ error }}</div>
      <template v-else-if="quote">
        <blockquote class="quote-text">{{ quote.content }}</blockquote>
        <p class="quote-author">&mdash; {{ quote.author }}</p>
      </template>
      <button class="refresh-btn click-effect" @click="fetchQuote">New Quote</button>
    </div>
  </main>
</template>

<style scoped lang="css">
.quote-page {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  padding-block-end: 10rem;
}

.quote-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  border-radius: 2rem;
  background: var(--bg-card);
  border: var(--border-secondary);
  max-width: 400px;
  width: 100%;
  box-shadow: var(--shadow-card);
}

.state-msg {
  color: var(--text-secondary);
  font-size: 1rem;
}

.state-msg.error {
  color: var(--border-cl);
}

.quote-text {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  color: var(--text-primary);
  font-style: italic;
}

.quote-author {
  font-size: 1rem;
  color: var(--text-muted);
  align-self: flex-end;
}

.refresh-btn {
  padding: 0.8rem 2rem;
  border-radius: 4rem;
  border: 1px solid var(--border-cl);
  background: var(--border-cl);
  color: var(--button-text-cl);
  cursor: pointer;
  font-size: 1rem;
}
</style>
