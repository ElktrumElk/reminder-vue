<script setup lang="ts">
import { subgoalScoped } from '@/data/general'
</script>

<template>
  <div class="x">
    <h1>Task 1</h1>

    <ol>
      <li v-for="(data, idx) in subgoalScoped" :key="idx">
        <div
          class="tog"
          :style="{
            background: data.isCompleted
              ? 'radial-gradient(circle, orangered 20%, transparent 30%, orangered 90%);'
              : 'none',
          }"
        ></div>
        <span>{{ data.title }}</span>
      </li>
    </ol>
  </div>
</template>

<style lang="css" scoped>
.x {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
}

.x * {
  width: 100%;
}


.x ol {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: var(--bg-subgoal);
  padding: 1rem;
  list-style: none;
}

.x ol li {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: var(--bg-tog);
  padding: 1rem;
  border-radius: 4rem;
}

.tog {
  content: '';
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-radius: 4rem;
  border: 1px solid gray;
  align-self: center;
}
</style>
