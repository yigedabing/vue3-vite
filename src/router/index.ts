import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { routerHome } from './module/home';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/login/login.vue') },
  routerHome,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  sensitive: true,
});

export { router };
