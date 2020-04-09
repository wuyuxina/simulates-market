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
          bottomsflags:true,
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
      },
      {
        path: 'search',
        component: () => import('../views/search/index.vue'),
        meta: {
          title: '搜索',
        },
      }
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '登录页面',
    },
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
// 路由守卫开始
export default router
