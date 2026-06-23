<script setup lang="ts">
import { theme, toggleTheme } from '@/context/theme'
</script>

<template>
  <main class="settings-page">
    <h2 class="settings-title">Settings</h2>

    <div class="settings-card">
      <div class="setting-row">
        <div class="setting-info">
          <span class="setting-label">Dark Mode</span>
          <span class="setting-desc">Switch between light and dark theme</span>
        </div>
        <button
          class="toggle-btn"
          :class="{ active: theme === 'dark' }"
          @click="toggleTheme"
        >
          <div class="toggle-knob"></div>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="css">
.settings-page {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  padding-block-end: 10rem;
  gap: 1.5rem;
}

.settings-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  align-self: flex-start;
}

.settings-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: 1.5rem;
  padding: 0.5rem;
  border: var(--border-secondary);
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.setting-label {
  font-size: 1.1rem;
  color: var(--text-primary);
}

.setting-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.toggle-btn {
  width: 52px;
  height: 28px;
  border-radius: 4rem;
  border: none;
  background: var(--bg-tog);
  cursor: pointer;
  position: relative;
  transition: background 0.3s ease;
  padding: 0;
}

.toggle-btn.active {
  background: var(--border-cl);
}

.toggle-knob {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.3s ease;
}

.toggle-btn.active .toggle-knob {
  transform: translateX(24px);
}
</style>
