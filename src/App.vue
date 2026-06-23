<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './component/HeaderComponent.vue'
import FooterComponent from './component/FooterComponent.vue'
import AddGoalComponent from './component/AddGoalComponent.vue'
import { isAddPanel, isForepanel } from './context/genral.ts'
import SubGaolsPanel from './component/SubGaolsPanel.vue'
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
  </div>
</template>

<style scoped></style>
