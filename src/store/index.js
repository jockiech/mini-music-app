// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: wx.getStorageSync('token'),
    userMeta: wx.getStorageSync('userMeta')
  },
  getters: {
    token: state => state.token,
    userMeta: state => state.userMeta
  },
  mutations: {
    setToken: (state, data) => {
      state.token = data
      wx.setStorageSync('token', data)
    },
    setUserMeta: (state, data) => {
      state.user = data
      wx.setStorageSync('userMeta', data)
    }
  }
})

export default store
