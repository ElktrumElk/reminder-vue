import { useRerender } from '@/lib/render-vue'

export const [reminders, setReminders] = useRerender([
  {
    id: 1,
    title: 'Get the Job done',
    description: 'Finnish the reminder app befor tomorrow',
    setTime: '1:47 PM',
    remindTime: '2:45',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Finnish the reminder app befor tomorrow',
    setTime: '1:47 PM',
    remindTime: '5:47 PM',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Finnish the reminder app befor tomorrow',
    setTime: '1:47 PM',
    remindTime: '2:45 PM',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Finnish the reminder app befor tomorrow',
    setTime: '1:47 PM',
    remindTime: '2:45 PM',
  },
])

export const [stats, setStats] = useRerender([
  {
    id: 1,
    title: 'Goals Completed',
    value: 2,
    rate: '50%',
  },

  {
    id: 2,
    title: 'Goals Set',
    value: 4,
  },

  {
    id: 3,
    title: 'onSet',
    value: 2,
    rate: '50%',
  },
  {
    id: 4,
    title: 'onHold',
    value: 0,
    rate: '100%',
  },
])

export interface subgoaldata {
  id?: number
  title?: string
  isCompleted?: boolean
}

export const [subGoals, setSubGoal] = useRerender<string[]>([])
export const [subGoalData, setSubGoalData] = useRerender<Record<string, subgoaldata[]>>({})
export const [subgoalScoped, setSubgoalScoped] = useRerender<subgoaldata[]>([])

export const handleSubgoalScoped = (id: number) => {
  const key = `c${id}`
  setSubgoalScoped(subGoalData.value[key] ?? [])
}
