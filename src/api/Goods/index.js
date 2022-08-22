import request from '@/utils/request'

export function SearchGoodsList (keyword) {
  return request({
    url: '/search',
    method: 'get',
    params: {
      pageNumber: 1,
      keyword
    }
  })
}
