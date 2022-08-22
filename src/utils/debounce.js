// 防抖 操作
export function debounce (fn, awaitTime) {
  let timer = null
  return function (...args) {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, awaitTime)
  }
}
