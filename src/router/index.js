import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ComingSoon from '../views/ComingSoon.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/coming-soon',
    name: 'ComingSoon',
    component: ComingSoon,
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/terms-conditions',
    name: 'Terms',
    component: Terms,
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
