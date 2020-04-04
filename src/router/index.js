import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('../views/project.vue'),
    children:[
      {
        path: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: 'category',
        component: () => import('../views/category/index.vue'),
        meta: {
          title: '分类',
        },
      },
      {
        path: 'discover',
        component: () => import('../views/discover/index.vue'),
        meta: {
          title: '发现',
        },
      },
      {
        path: 'shopcar',
        component: () => import('../views/shopCar/index.vue'),
        meta: {
          title: '购物车',
        },
      },
      {
        path: 'mine',
        component: () => import('../views/mine/index.vue'),
        meta: {
          title: '我的',
        },
      }
    ]

  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: '404错误页',
    },
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
