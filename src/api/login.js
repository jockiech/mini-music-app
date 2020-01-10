import Vue from 'vue'

export default {
  login (data) {
    return Vue.axios.get('/login/cellphone', { params: data })
  }
}
