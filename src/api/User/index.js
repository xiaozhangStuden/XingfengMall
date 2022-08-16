import request from '@/utils/request'

/**
 *
 * @returns 返回用户注册信息
 */
export function UserRegister (data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
