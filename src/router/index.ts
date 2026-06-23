import ReminderComponent from '@/component/ReminderComponent.vue'
import QuoteComponent from '@/component/QuoteComponent.vue'
import SettingsComponent from '@/component/SettingsComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app/reminder',
      name: 'Reminder',
      component: ReminderComponent,
    },
    {
      path: '/app/quote',
      name: 'Quote',
      component: QuoteComponent,
    },
    {
      path: '/app/settings',
      name: 'Settings',
      component: SettingsComponent,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/app/reminder',
    },
  ],
})

export default router
