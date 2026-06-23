<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './component/HeaderComponent.vue'
import FooterComponent from './component/FooterComponent.vue'
import AddGoalComponent from './component/AddGoalComponent.vue'
import { isAddPanel, isForepanel, isSettingPanel, setSettingPanel } from './context/genral.ts'
import SubGaolsPanel from './component/SubGaolsPanel.vue'
import SettingsComponent from './component/SettingsComponent.vue'
import ForegroungPanel from './component/ForegroungPanel.vue'
</script>

<template>
  <div class="app">
    <HeaderComponent />
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    <FooterComponent />
    <Transition name="slide-up">
      <AddGoalComponent v-if="isAddPanel" />
    </Transition>
    <Transition name="slide-up">
      <SubGaolsPanel v-if="isForepanel" />
    </Transition>
    <Transition name="slide-up">
      <ForegroungPanel
        v-if="isSettingPanel"
        :title="{
          title: 'Settings',
          style: { fontSize: '1.5rem', color: 'var(--text-primary)' },
        }"
        :comp="SettingsComponent"
        v-on:close="() => setSettingPanel(false)"
      />
    </Transition>
  </div>
</template>

<style scoped></style>
