import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
          bottomsflags:true,
        },
      },
      {
        path: 'discover',
        component: () => import('../views/discover/index.vue'),
        meta: {
          title: '发现',
          bottomsflags:true,
        },
      },
      {
        path: 'shopcar',
        component: () => import('../views/shopCar/index.vue'),
        meta: {
          title: '购物车',
          bottomsflags:true,
        },
      },
      {
        path: 'mine',
        component: () => import('../views/mine/index.vue'),
        meta: {
          title: '我的',
          bottomsflags:true,
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
router.beforeEach((to,from,next)=>{
   next();
   //将当前切换页面的状态bottomsflags属性记录，供给判断底部导航栏的隐藏和显示
   if(to.meta.bottomsflags){
     let bottomsflags=true;
     store.commit('bottomshow',bottomsflags)
   }else{
     let bottomsflags=false;
     store.commit('bottomshow',bottomsflags)
   }
})
export default router
