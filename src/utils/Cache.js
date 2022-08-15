import Cookies from 'js-cookie'

export const setCache = (key, value) => Cookies.set(key, value)

export const getCache = (key) => Cookies.get(key)

export const ClearCache = (key) => Cookies.remove(key)
