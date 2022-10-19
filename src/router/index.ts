import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue'),
    children: [
      {
        name: 'StoreManager',
        path: '/store-manager',
        component: () => import('@/views/sys/StoreManager.vue'),
      },
      {
        name: 'UserLst',
        path: '/user-list',
        component: () => import('../views/sys/UserLst.vue'),
      },
      {
        name: 'DynamicComponent',
        path: '/dynamic-component',
        component: () => import('../views/sys/DynamicComponent.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  sensitive: true,
});

export { router };
