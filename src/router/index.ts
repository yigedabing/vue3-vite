import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { homeRoute } from './module/home-route';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('@/views/login/login.vue') },
  homeRoute,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  sensitive: true,
});

export { router };
