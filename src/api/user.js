import Vue from 'vue'

export default {
  fetchUserInfo () {
    return Vue.axios.get('/user/subcount')
  },
  fetchUserPlaylist (data) {
    return Vue.axios.get('/user/playlist', { params: data })
  }
}
