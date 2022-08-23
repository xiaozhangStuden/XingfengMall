import router from '@/router'
import { getCache, setCache } from '@/utils/Cache'
import axios from 'axios'
import { Toast } from 'vant'
const services = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

services.interceptors.request.use((config) => {
  config.headers.token = `${getCache('token')}` || ''
  // 成功的请求
  return config
}, (err) => {
  return Promise.reject(err)
})

services.interceptors.response.use((response) => {
  ErrorCatch(response)
  return response.data
}, err => {
  return Promise.reject(err)
})

const ErrorCatch = (response) => {
  if (response.data && response.data.resultCode === 416) {
    setCache('token', '')
    router.push('/login')
    Toast.fail('用户身份过期请重新登录')
  }
}

export default services
