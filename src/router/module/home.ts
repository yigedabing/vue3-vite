import { RouteRecordRaw } from 'vue-router';

export const routerHome: RouteRecordRaw = {
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
};
