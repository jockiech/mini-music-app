import Vue from 'vue'

export default {
  fetchUserInfo () {
    return Vue.axios.get('/user/subcount')
  }
}
