<script setup lang="ts">
import { computed } from 'vue'
import {
  handleSubgoalScoped,
  reminders,
  setReminders,
  setSubGoalData,
  setStats,
  stats,
  subGoalData,
  setGoalTitle,
  filter,
  setFilter,
  completedIds,
  setCompletedIds,
  editData,
  setEditData,
} from '@/data/general'
import StatisticComponent from './StatisticComponent.vue'
import { useRerender } from '@/lib/render-vue.ts'
import { setAddPanel, setForePanel } from '@/context/genral.ts'

const [isGoalSet, setGoal] = useRerender<number[]>([])

const filteredReminders = computed(() => {
  return reminders.value.filter((r) => {
    if (filter.value === 'all') return true
    if (filter.value === 'onset') return isGoalSet.value?.includes(r.id) ?? false
    if (filter.value === 'unactive') return !(isGoalSet.value?.includes(r.id) ?? false)
    if (filter.value === 'completed') return completedIds.value.includes(r.id)
    return true
  })
})

const deleteGoal = (id: number) => {
  const idx = reminders.value.findIndex((r) => r.id === id)
  if (idx === -1) return
  setReminders(reminders.value, (prev) => {
    prev.splice(idx, 1)
  })
  const key = `c${id}`
  if (subGoalData.value[key]) {
    setSubGoalData(subGoalData.value, (prev) => {
      delete prev[key]
    })
  }
  setStats(stats.value, (prev) => {
    const setStat = prev.find((s) => s.title === 'Goals Set')
    if (setStat) setStat.value = Math.max(0, (setStat.value as number) - 1)
  })
  setCompletedIds(completedIds.value, (prev) => {
    const i = prev.indexOf(id)
    if (i !== -1) prev.splice(i, 1)
  })
}

const editGoal = (id: number) => {
  const reminder = reminders.value.find((r) => r.id === id)
  if (!reminder) return
  setEditData(editData.value, () => ({
    id: reminder.id,
    title: reminder.title,
    description: reminder.description,
    remindTime: reminder.remindTime,
    setTime: reminder.setTime,
  }))
  setAddPanel(true)
}

const toggleComplete = (id: number) => {
  setCompletedIds(completedIds.value, (prev) => {
    const idx = prev.indexOf(id)
    if (idx === -1) prev.push(id)
    else prev.splice(idx, 1)
  })
}

const handleOnset = (id: number) => {
  setGoal(
    isGoalSet.value.includes(id)
      ? isGoalSet.value.filter((x) => x != id)
      : [...isGoalSet.value, id],
  )
}

</script>

<template>
  <main>
    <StatisticComponent />
    <div class="btns-cnt">
      <button :class="{ active: filter === 'all' }" @click="setFilter('all', () => {})">All</button>
      <button :class="{ active: filter === 'onset' }" @click="setFilter('onset', () => {})">
        Onset
      </button>
      <button :class="{ active: filter === 'unactive' }" @click="setFilter('unactive', () => {})">
        Unactive
      </button>
      <button :class="{ active: filter === 'completed' }" @click="setFilter('completed', () => {})">
        Completed
      </button>
    </div>

    <section class="r-section">
      <TransitionGroup name="card-stagger" tag="div" class="r-div">
        <div
          class="card"
          :class="{ 'is-completed': completedIds.includes(reminder.id) }"
          v-for="(reminder, idx) in filteredReminders"
          :key="reminder.id"
          :style="{ '--i': idx }"
        >
          <div class="cd-header">
            <div class="cd-div-1">
              <button
                @click="() => handleOnset(reminder.id)"
                :class="isGoalSet?.includes(reminder.id) ? 'onset-btn active' : 'onset-btn'"
              ></button>
              <h3 class="title">{{ reminder.title }}</h3>
            </div>

            <div class="cd-actions">
              <span class="date">{{ reminder.remindTime }}</span>
              <button class="edit-btn click-effect" @click="editGoal(reminder.id)">✎</button>
              <button class="delete-btn click-effect" @click="deleteGoal(reminder.id)">✕</button>
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
                  setGoalTitle(reminder.title)
                }
              "
            >
              <span>Sub Goal</span>
            </button>

            <button @click="toggleComplete(reminder.id)">
              <span>{{ completedIds.includes(reminder.id) ? 'Undo' : 'Complete' }}</span>
            </button>
          </div>
        </div>
      </TransitionGroup>
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

.btns-cnt button.active {
  background: orangered;
  color: white;
  border-color: orangered;
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

.cd-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.delete-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 0.3rem;
  line-height: 1;
}
.delete-btn:hover {
  color: #e74c3c;
}

.edit-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 0.3rem;
  line-height: 1;
}
.edit-btn:hover {
  color: #3498db;
}

.is-completed {
  opacity: 0.6;
  filter: grayscale(0.5);
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
