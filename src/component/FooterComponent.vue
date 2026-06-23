<script setup lang="ts">
import { setAddPanel } from '@/context/genral'
</script>

<template>
  <footer>
    <nav class="click-effect">
      <RouterLink to="/app/reminder" class="links">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <span>Reminder</span>
      </RouterLink>

      <button @click="() => setAddPanel(true)" class="links">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      </button>

      <RouterLink to="/app/quote" class="links">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 21c3 0 7-1 7-8" />
          <path d="M3 21c3 0 7-1 7-8" />
          <path d="M10 13H4" />
          <path d="M21 12c0-4.5-4-8-9-8" />
          <path d="M21 12v3a2 2 0 0 1-2 2h-3" />
          <path d="M12 20v.01" />
          <path d="M18 10h.01" />
          <path d="M6 10h.01" />
          <path d="M12 4V2" />
        </svg>
        <span>Quote</span>
      </RouterLink>
    </nav>
  </footer>
</template>

<style scoped lang="css">
footer {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
}

nav {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-radius: 4rem;
  border: var(--border-secondary-b);

  backdrop-filter: blur(4px);
  box-shadow: var(--shadow-footer);
  background: var(--bg-panel);
}
.links {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
}

.links:nth-child(2) {
  color: var(--button-text-cl);
  border: 1px solid var(--border-cl);
  border-radius: 4rem;
  padding: 1rem;
  background: var(--border-cl);
  filter: blur(0.2px);
}

.links:nth-child(2) svg {
  color: var(--button-text-cl);
}
</style>
