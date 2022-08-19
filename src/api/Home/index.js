import request from '@/utils/request'

/**
 *
 * @returns 返回轮播图数据
 */
export function getHomeInfo () {
  return request({
    url: '/index-infos',
    method: 'get'
  })
}

// export function getGoodsList () {
//   return request({
//     url: '/'
//   })
// }
