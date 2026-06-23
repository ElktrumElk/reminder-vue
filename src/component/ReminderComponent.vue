<script setup lang="ts">
import { handleSubgoalScoped, reminders } from '@/data/general'
import StatisticComponent from './StatisticComponent.vue'
import { useRerender } from '@/lib/render-vue.ts'
import { setForePanel } from '@/context/genral.ts'

const [isGoalSet, setGoal] = useRerender<number[]>([])

const removeGoal = (idx: number) => {
  console.log(isGoalSet.value, idx)
}
</script>

<template>
  <main>
    <StatisticComponent />
    <div class="btns-cnt">
      <button>All</button>
      <button>Onset</button>
      <button>Completed</button>
    </div>

    <section class="r-section">
      <div class="r-div">
        <div class="card" v-for="(reminder, idx) in reminders" :key="idx">
          <div class="cd-header">
            <div class="cd-div-1">
              <button
                @click="
                  () => {
                    setGoal(isGoalSet, (prev) =>
                      isGoalSet?.includes(idx) ? prev?.filter((x) => x !== idx) : prev?.push(idx),
                    )
                    removeGoal(idx)
                  }
                "
                :class="isGoalSet?.includes(idx) ? 'onset-btn active' : 'onset-btn'"
              ></button>
              <h3 class="title">{{ reminder.title }}</h3>
            </div>

            <div>
              <span class="date">{{ reminder.remindTime }}</span>
              <img />
            </div>
          </div>

          <div class="desc-cnt">
            <p class="desc">{{ reminder.description }}</p>
          </div>

          <div class="goal-btn">
            <button
              @click="
                () => {
                  setForePanel(true)
                  handleSubgoalScoped(reminder.id)
                }
              "
            >
              <span>Sub Goal</span>
            </button>

            <button>
              <span>Complete</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped>
main {
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
  padding-block-start: 1rem;
  padding-block-end: 10rem;
}

.btns-cnt {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.btns-cnt button {
  padding: 0.5rem;
  border-radius: 4rem;
  background: var(--btns-cnt-bg);
  border: 1px solid var(--border-b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--text-primary);
}

.cd-div-1 {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--text-primary);
}

.onset-btn {
  width: 30px;
  height: 30px;
  background: none;
  border: 2px solid gray;
  border-radius: 4rem;
  cursor: pointer;
}

.onset-btn.active {
  background: radial-gradient(circle, orangered 20%, transparent 30%, orangered 90%);
  border: 1px solid orangered;
}

.r-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem;
}

.r-div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--bg-section);
  border-radius: 2rem;
  padding: 0.5rem;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--bg-card);
  gap: 1.5rem;
  line-height: 1rem !important;
  border: var(--border-secondary);
}

.cd-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  line-height: 100%;
  color: var(--text-primary);
}

.date {
  color: var(--text-muted);
}

.desc-cnt {
  font-size: 1rem;
  line-height: 20px !important;
  color: var(--text-primary);
}

.desc {
  line-height: 100%;
  color: var(--text-primary);
}

.goal-btn {
  width: 100%;
  display: flex;
  padding: 0.4rem;
  align-items: center;
  justify-content: space-between;
}

.goal-btn button {
  padding: 1rem 1rem;
  border-radius: 4rem;
  border: 1px solid rgba(197, 193, 193, 0.556);
  background: none;
  color: var(--text-btn);
}
</style>
