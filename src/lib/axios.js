import axios from 'axios'

// 定义一个请求的类
class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  // 获取在外部的配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      header: {

      }
    }
    return config
  }

  // 移除 url
  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      
    }
  }

  // 获取 token
  getCookie(name) {
    var arr = document.cookie.split(';')
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr[i].split('=');
      if (newArr[0] == name) {
        return newArr[1]
      }
    }
    return ''
  }

  // 拦截
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading
      console.log(config)
      // 请求头添加token
      let token = this.getCookie('token')
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      if (!Object.keys(this.queue).length) {
        
      }
      this.queue[url] = true
      return config
    }, error =>{
      return Promise.reject(error)
    })

    // 响应拦截
    instance.interceptors.response.use(response => {
      this.destroy(url)
      return response
    }, error => {
      return Promise.reject(error)
    })
  }

  // 请求调用
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    // 调用
    this.interceptors(instance, options.url)

    return instance(options)
  }
}

export default HttpRequest