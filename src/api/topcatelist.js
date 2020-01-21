import Vue from 'vue'

export default {
  fetchToplist () {
    return Vue.axios.get('/toplist/detail')
  }
}
