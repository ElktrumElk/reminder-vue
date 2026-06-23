<script setup lang="ts">
import { setAddPanel } from '@/context/genral'
import {
  reminders,
  setReminders,
  setSubGoal,
  setSubGoalData,
  subGoals,
  subGoalData,
  type subgoaldata,
} from '@/data/general'
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const remindeme = ref('')
const time = ref('')
const sbg = ref<string[]>([])

const handleReminder = () => {
  if (
    (title.value.length === 0 || description.value.length === 0 || remindeme.value.length === 0,
    time.value.length === 0)
  ) {
    alert('Please fill in all info')
    return
  }
  const last = reminders.value[reminders.value.length - 1]
  const newId = last ? last.id + 1 : 1
  const data = {
    id: newId,
    title: title.value.toString(),
    description: description.value.toString(),
    remindTime: `${time.value}`,
    setTime: '1:46 PM',
  }
  setReminders(reminders.value, (prev) => prev.push(data))
  setAddPanel(false)

  const name = 'c' + newId
  const a: Record<string, subgoaldata[]> = { ...subGoalData.value }
  const goalList: subgoaldata[] = []

  sbg.value.forEach((value) => {
    goalList.push({ id: goalList.length, title: value, isCompleted: false })
  })

  a[name] = goalList

  setSubGoalData(a)
}
</script>

<template>
  <div class="add-panel">
    <div class="goal-hd">
      <h1>Add Goal</h1>
      <button
        class="close-btn click-effect"
        @click="
          () => {
            setAddPanel(false)
            setSubGoal([])
          }
        "
      >
        X
      </button>
    </div>

    <div class="form">
      <div>
        <label for="title">Title</label>
        <input id="title" placeholder="Goal Title" v-model="title" />
      </div>

      <div>
        <label for="des">Description</label>
        <input id="des" placeholder="Description..." v-model="description" />
      </div>
    </div>

    <div class="sub-goal">
      <button
        class="click-effect"
        @click="() => setSubGoal(subGoals, (prev) => prev.push(`${subGoals.length + 1}`))"
      >
        <span>Add Subgoal</span>
      </button>
    </div>

    <div class="sub-goal-sec">
      <ol>
        <li v-for="(subgoal, idx) in subGoals" :key="idx">
          <input type="text" :placeholder="'Goal ' + subgoal" v-model="sbg[idx]" />
        </li>
      </ol>
      <span v-if="subGoals.length === 0" class="no-sub">No Subgoal</span>
    </div>

    <div class="remind-time">
      <div>
        <h3>Remind Me</h3>
        <input class="date" type="date" v-model="remindeme" />
      </div>
      <div>
        <h3>Time</h3>
        <input class="date" type="time" v-model="time" />
      </div>
    </div>

    <div class="add-btn-cnt">
      <button
        @click="
          () => {
            handleReminder()
          }
        "
        class="click-effect"
      >
        Add
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.add-btn-cnt {
  display: flex;
  align-items: center;
  width: 100%;
  margin-block-start: auto;
  margin-block-end: auto;
}

.add-btn-cnt button {
  border-radius: 4rem;
  padding: 1rem;
  margin-inline: auto;
  width: 80%;
  border: none;
  background: var(--border-cl);
  border: 1px solid var(--border-cl);
  color: var(--button-text-cl);
}
.remind-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-remind);
  border-radius: 2rem;
}
.remind-time > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.remind-time > div:nth-child(2) {
  align-items: flex-end;
}

.remind-time > div input {
  border-radius: 4rem;
  border: none;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  background: var(--bg-remind-input);
  color: var(--text-input);
}

.sub-goal-sec {
  width: 100%;
  background: var(--bg-subgoal);
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.sub-goal-sec ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  padding: 0;
}

.sub-goal-sec ol li {
  display: flex;
  width: 100%;
  gap: 1rem;
  color: var(--text-primary);
}

.sub-goal-sec ol li input {
  display: flex;
  background: none;
  border: none;
  width: 100%;
  outline: none;
  border-block-end: 1px solid var(--border-cl);
  color: var(--text-primary);
}

.no-sub {
  color: var(--text-secondary);
}
.add-panel {
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
  color: var(--text-primary);
}

.close-btn {
  border-radius: 5rem;
  padding: 1rem;
  background: var(--bg-close-btn);
  color: var(--button-text-cl);
  border: 1px solid orange;
}

.goal-hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  gap: 2rem;
  border-radius: 1rem;
  background: var(--bg-form);
}

.form > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form > div > input {
  display: flex;
  border: none;
  border-bottom: 1px solid var(--border-cl);
  outline: none;
  background: none;
}
.sub-goal {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.sub-goal button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid var(--border-cl);
  border-radius: 4rem;
  background: none;
  color: var(--text-primary);
}
</style>
