import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import successStoriesView from '@/views/successStoriesView.vue';
import NotFound from '@/components/NotFound.vue';
import SuccessDetailsView from '@/views/SuccessDetailsView.vue';

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
      path: '/success/:id',
      name: 'SuccessDetails',
      component: SuccessDetailsView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: NotFound,
    }
  ],
})

export default router
