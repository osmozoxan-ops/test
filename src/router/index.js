import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ProgressBar',
      name: 'progress_bar',
      component: () => import('../views/ProgressBar.vue'),
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      component: () => import('../views/PieChart.vue'),
    } 
  ],
})

export default router