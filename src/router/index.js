import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/index.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
