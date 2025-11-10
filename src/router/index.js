import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SuccessStoriesView from '@/views/successStoriesView.vue';
import NotFound from '@/components/NotFound.vue';
import SuccessDetailsView from '@/views/SuccessDetailsView.vue';
import TutorialsView from '@/views/TutorialsView.vue';
import TutorialDetailsView from '@/views/TutorialDetailsView.vue';
import ActivitiesView from '@/views/ActivitiesView.vue';
import CampusView from '@/views/CampusView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/success-stories',
    name: 'success-stories',
    component: SuccessStoriesView,
    props: true
  },
  {
    path: '/success/:id',
    name: 'SuccessDetails',
    component: SuccessDetailsView
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: TutorialsView
  },
  {
    path: '/tutorials/:id',
    name: 'TutorialDetails',
    component: TutorialDetailsView
  },
  {
    path: '/activities',
    name: 'Activities',
    component: ActivitiesView
  },
  {
    path: '/campus',
    name: 'Campus',
    component: CampusView
  },
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // restore scroll position when using browser back/forward
      return {...savedPosition, behavior: 'smooth' };
    } else {
      // smooth scroll to top for new navigation
      return { top: 0, behavior: 'smooth' };
    }
  }
});

export default router;
