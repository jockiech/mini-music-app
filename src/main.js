import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import App from './App'

// import VueRouter from 'mpvue-router-patch'
// Vue.use(VueRouter)

// import IviewUI from 'iview-mpvue'
// Vue.use(IviewUI)

// const baseUrl =
//   process.env.NODE_ENV === 'development' ?
//   'https://www.baidu.com' :
//     'https://www.baidu.com'

const baseUrl = 'http://localhost:3000'

axios.defaults.timeout = 30000
axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    const data =
      config.method === 'get' ? config.params : qs.stringify(config.data)
    // wx小程序 发起请求相应
    wx.request({
      url: config.url,
      method: config.method,
      data: data,
      success: res => {
        return resolve(res)
      },
      fail: err => {
        return reject(err)
      }
    })
  })
}

// 请求拦截器
axios.interceptors.request.use(
  function (request) {
    return request
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

Vue.axios = axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  router,
  ...App
})
app.$mount()
