<script lang="ts" setup>
import { stats } from '@/data/general'
</script>
<template>
  <section>
    <h2>Overview</h2>

    <div class="stat-cnt">
      <div class="card" v-for="(stat, idx) in stats" :key="idx">
        <div>
          <h3>{{ stat.title }}</h3>
        </div>

        <div class="value-cnt">
          <span>{{ stat.value }}</span>
        </div>

        <div v-if="idx === 0">
          <span>keep on pressing</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
section {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
}

h2 {
  color: var(--text-secondary);
}

.stat-cnt {
  display: grid;
  grid-template-columns: 2fr 0.8fr;
  grid-template-rows: repeat(3, 80px);
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--stat-card-bg);
  border: 1px solid var(--border-b);
  border-radius: 1rem;
  padding: 1rem;
  justify-content: space-between;
  box-shadow: var(--shadow-card);
  color: var(--text-primary);
}

.card:nth-child(1) {
  grid-row: span 3;
  border-radius: 3rem;
  padding: 1rem;
  padding-block: 2rem;
  flex: 0 0 auto;
}

.card:nth-child(1) .value-cnt {
  align-self: center;
  width: 100px;
  height: 100px;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--border-cl);
}

.card:nth-child(1) .value-cnt span {
  font-size: 1.9rem;
  font-weight: bolder;
}

.card > * {
  width: 100%;
}
.card:not(:nth-child(1)) h3 {
  font-size: 0.7rem;
  line-height: 100%;
}

.card:not(:nth-child(1)) span {
  font-size: 0.8rem;
  font-weight: bolder;
}
.card:not(:nth-child(1)) {
  justify-content: unset;
  gap: 0.5rem;
}
</style>
