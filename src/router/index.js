import Vue from 'vue'
import VueRouter from 'vue-router-mp'
Vue.use(VueRouter)

const routes = [
  {
    path: '/pages/login'
    // isTab: true // 标志当前路由是一个 Tab
  },
  {
    path: '/pages/main'
  }
]

export default new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
