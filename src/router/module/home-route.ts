import { RouteRecordRaw } from 'vue-router';

export const homeRoute: RouteRecordRaw = {
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
      // 路由组件传参数 布尔模式、对象模式、函数模式
      props: (route) => ({ userInfo: route.query }),
    },
    {
      name: 'UserDetail',
      path: 'user-detail/:id',
      component: () => import('@/views/sys/UserDetail.vue'),
      // 路由组件传参数 （布尔模式，route.params 将被设置为组件的 props）
      props: true,
    },
    {
      name: 'DynamicComponent',
      path: 'dynamic-component',
      component: () => import('@/views/sys/DynamicComponent.vue'),
      props: { staticData: '对象模式，静态数据' },
    },
    {
      name: 'NamedView',
      path: 'named-view',
      meta: { des: '命名视图' },
      components: {
        namedView: () => import('@/views/sys/NamedView.vue'),
      },
      // component: () => import('@/views/sys/NamedView.vue'),
    },
  ],
};
