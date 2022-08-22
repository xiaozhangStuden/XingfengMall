import { getCache } from '@/utils/Cache'
import axios from 'axios'
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
  return response.data
}, err => {
  return Promise.reject(err)
})

export default services
