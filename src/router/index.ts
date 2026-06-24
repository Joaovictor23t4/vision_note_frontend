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
        },
        {
          path: '/note/:id',
          component: () => import("@/views/EditorView.vue")
        }
      ],
      component: () => import("@/layout/DefaultLayout.vue")
    }
  ],
});

router.beforeEach(async (to, from) => {
  if (to.path == "/") {
    return "/home";
  }
  return true;
});

export default router
