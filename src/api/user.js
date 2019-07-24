import axios from './index'

export const getUserinfo = ({ userId }) => {
  return axios.request({
    url: '/index/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}
