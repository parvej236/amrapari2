import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import successStoriesView from '@/views/successStoriesView.vue';
import NotFound from '@/components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/success-stories',
      name: 'success-stories',
      component: successStoriesView,
      props: true
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: NotFound,
    }
  ],
})

export default router
