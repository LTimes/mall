import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../router'
import {
  Message
} from 'element-ui';


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
            if (newArr[0].trim() == name) {
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
            console.log(this)
                // 请求头添加tokenthis
            let token = this.getCookie('token')
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            if (!Object.keys(this.queue).length) {

            }
            this.queue[url] = true
            return config
        }, error => {
            
            return Promise.reject(error)
        })

        // 响应拦截
        instance.interceptors.response.use(response => {
            this.destroy(url)
            return response
        }, error => {
            if (error.response.status) {
              switch (error.response.status) {
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。 
                case 401:
                  router.replace({
                    path: '/index',
                    query: {
                      redirect: router.currentRoute.fullPath
                    }
                  })
                  Message({
                    message: '登录过期，请重新登录',
                    duration: 2000,
                    showIcon: false
                  })
                  Cookies.remove('token');
                  Cookies.remove('userName');
                  Cookies.remove('userId');
                  Cookies.remove('avatorImg');
                  break;
                  // 403 token过期                
                  // 登录过期对用户进行提示                
                  // 清除本地token和清空vuex中token对象                
                  // 跳转登录页面   
                case 403:
                  //   Message({
                  //     message: '登录过期，请重新登录',
                  //     duration: 2000,
                  //     showIcon: false
                  //   })
                  // 删除 token
                  Cookies.remove('token');
                  setTimeout(() => {
                    router.replace({
                      path: '/login',
                      query: {
                        redirect: router.currentRoute.fullPath
                      }
                    })
                  }, 1000);
                  break;
                  // 404请求不存在
                case 404:
                  Message({
                    message: '网络请求不存在',
                    duration: 2000,
                  })
                  break;

                default:
                  Message({
                    message: error.response.data.message,
                    duration: 2000,
                  })
                  break;
              }
            }
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