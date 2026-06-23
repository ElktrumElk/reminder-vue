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
    <RouterView />
    <FooterComponent />
    <Transition mode="in-out" name="fade" type="transition" :duration="{ enter: 1, leave: 1 }">
      <AddGoalComponent v-if="isAddPanel" />
    </Transition>
    <SubGaolsPanel v-if="isForepanel" />
  </div>
</template>

<style scoped></style>
