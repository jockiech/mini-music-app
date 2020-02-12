import Vue from 'vue'

export default {
  login (data) {
    return Vue.axios.get('/login/cellphone', { params: data })
  },
  fetchUserInfo () {
    return Vue.axios.get('/user/subcount')
  },
  fetchUserPlaylist (data) {
    return Vue.axios.get('/user/playlist', { params: data })
  }
}
