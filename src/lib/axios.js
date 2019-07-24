import axios from 'axios'
import { baseURL } from '@/config'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      console.log('config', config)
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) console.log('Spin.show()')// 开始请求
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      console.log('instance.interceptors.response res', res)
      const { data, status } = res
      return { data, status }
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
