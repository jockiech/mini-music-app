import Vue from 'vue'

export default {
  fetchNewestAlbums () {
    return Vue.axios.get('/album/newest')
  }
}
