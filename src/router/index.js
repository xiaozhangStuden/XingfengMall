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
      title: '首页',
      Animation: false
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/index.vue'),
    meta: {
      title: '分类',
      Animation: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
      Animation: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/index.vue'),
    meta: {
      title: '注册',
      Animation: true
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import('@/views/ShopCart/index.vue'),
    meta: {
      title: '购物车',
      Animation: false
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile/index.vue'),
    meta: {
      title: '我的',
      Animation: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
