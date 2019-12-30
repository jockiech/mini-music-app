import Vue from 'vue'
import App from './App'
import VueRouter from 'mpvue-router-patch'
// import VueRouter from 'vue-router-mp'
// import IviewUI from 'iview-mpvue'

Vue.use(VueRouter)
// Vue.use(IviewUI)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
