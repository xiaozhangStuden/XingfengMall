import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '首页',
      // 页面级别
      PageLevel: 1
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category/index.vue'),
    meta: {
      title: '分类',
      PageLevel: 1
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
      PageLevel: 2
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/index.vue'),
    meta: {
      title: '注册',
      PageLevel: 2
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: () => import('@/views/ShopCart/index.vue'),
    meta: {
      title: '购物车',
      PageLevel: 1
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile/index.vue'),
    meta: {
      title: '我的',
      PageLevel: 1
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/SearchPage/index.vue'),
    meta: {
      title: '搜索',
      PageLevel: 2
    }
  }
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}
export default router
