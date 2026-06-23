<script setup lang="ts">
import type { Component, CSSProperties } from 'vue'

const props = defineProps<{
  title?: {
    title?: string
    color?: string
    fontSize?: string
    style?: CSSProperties
  }
  onClose?: CallableFunction
  comp?: Component
}>()
</script>

<template>
  <div class="fore-panel">
    <div class="fore-hd">
      <h1 :style="{ color: props.title?.color, ...props.title?.style }">
        {{ props.title?.title }}
      </h1>
      <button class="close-btn click-effect" @click="() => onClose?.()">X</button>
    </div>
    <component :is="comp"></component>
  </div>
</template>

<style lang="css" scoped>
.fore-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: var(--bg-panel);
  border-start-end-radius: 3rem;
  border-start-start-radius: 3rem;
  height: 95%;
  padding: 2rem 1rem;
  border-block-start: 1px solid orange;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 1rem;
}

.close-btn {
  border-radius: 5rem;
  padding: 1rem;
  background: var(--bg-close-btn);
  color: var(--button-text-cl);
  border: 1px solid orange;
}

.fore-hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
}
</style>
