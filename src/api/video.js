import Vue from 'vue'

export default {
  fetchMvUrl (data) {
    return Vue.axios.get('/mv/url', {
      params: data
    })
  },
  fetchMvDetail (data) {
    return Vue.axios.get('/mv/detail', {
      params: data
    })
  }
}
