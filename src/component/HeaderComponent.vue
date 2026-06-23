<script setup lang="ts">
import { setSettingPanel } from '@/context/genral'
</script>

<template>
  <header class="header">
    <div class="hd-div">
      <div class="logo"></div>
      <h1 class="app-name">Reminders</h1>
    </div>

    <div class="hd-div">
      <button @click="() => setSettingPanel(true)" class="settings-btn click-effect">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
          />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-block-start: 1rem;
  z-index: 1;
}

.hd-div {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.logo {
  width: 30px;
  height: 30px;
  border: var(--border-icon);
  border-radius: 4rem;
}

.app-name {
  font-size: 1.5rem;

  background: linear-gradient(gray, orangered 80%);

  padding: 0.5rem;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.settings-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4rem;
  padding: 0.5rem;
  background: none;
  border: 1px solid var(--border-b);
  color: var(--text-secondary);
  cursor: pointer;
  text-decoration: none;
}

.settings-btn svg {
  width: 24px;
  height: 24px;
}
</style>
