import router from './router'
import { getCache } from './utils/Cache'
const whiteList = ['/login', '/register', '/404', '/home', '/category']
router.beforeEach((to, form, next) => {
  const token = getCache('token')
  if (token) {
    if (to.path === '/login') {
      next('/home')
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})
