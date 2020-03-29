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
          title: '综合看板',
        },
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
