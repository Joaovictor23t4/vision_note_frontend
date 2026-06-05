import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/home',
          component: () => import("@/views/HomeView.vue")
        }
      ],
      component: () => import("@/layout/DefaultLayout.vue")
    }
  ],
})

export default router
