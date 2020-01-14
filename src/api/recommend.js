import Vue from 'vue'

export default {
  fetchNewestAlbums () {
    return Vue.axios.get('/album/newest')
  },
  fetchAlbumDetail (data) {
    return Vue.axios.get('/album', { params: data })
  }
}
