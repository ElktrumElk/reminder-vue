<script setup lang="ts">
import { setForePanel } from '@/context/genral.ts'
import ForegroungPanel from './ForegroungPanel.vue'

import SubGoalsComponents from './SubGoalsComponents.vue'
</script>

<template>
  <ForegroungPanel
    :title="{ title: 'SubGoal', style: { fontSize: '1.4rem', color: 'var(--text-primary)' } }"
    v-on:close="() => setForePanel(false)"
    :comp="SubGoalsComponents"
  />
</template>
