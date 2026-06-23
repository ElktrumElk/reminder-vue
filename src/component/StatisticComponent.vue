<script lang="ts" setup>
import { ref, watch } from 'vue'
import { stats } from '@/data/general'

const animated = ref<number[]>(stats.value.map(() => 0))

const animateValue = (from: number, to: number, idx: number) => {
  const duration = 500
  const start = performance.now()
  const diff = to - from
  const frame = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    animated.value[idx] = Math.round(from + diff * eased)
    if (t < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

watch(
  stats,
  (s) => {
    s.forEach((stat, i) => {
      const target = stat.value as number
      const current = animated.value[i] ?? 0
      animateValue(current, target, i)
    })
  },
  { immediate: true },
)
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
          <span class="num">{{ animated[idx] }}</span>
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
