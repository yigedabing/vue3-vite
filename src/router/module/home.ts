import { RouteRecordRaw } from 'vue-router';

export const routerHome: RouteRecordRaw = {
  path: '/home',
  component: () => import('@/views/home/home.vue'),
  children: [
    {
      name: 'StoreManager',
      path: 'store-manager',
      component: () => import('@/views/sys/StoreManager.vue'),
    },
    {
      name: 'UserList',
      path: 'user-list',
      component: () => import('@/views/sys/UserList.vue'),
    },
    {
      name: 'UserDetail',
      path: 'user-detail/:id',
      component: () => import('@/views/sys/UserDetail.vue'),
      // 路由组件传参数
      props: true,
    },
    {
      name: 'DynamicComponent',
      path: 'dynamic-component',
      component: () => import('@/views/sys/DynamicComponent.vue'),
    },
  ],
};
