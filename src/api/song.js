import Vue from 'vue'

export default {
  fetchBanner () {
    return Vue.axios.get('/banner')
  },
  fetchHotPlayList () {
    return Vue.axios.get('/playlist/hot')
  },
  fetchTopDetailList () {
    return Vue.axios.get('/toplist/detail')
  },
  fetchNewestAlbums () {
    return Vue.axios.get('/album/newest')
  },
  fetchTopMvList (data) {
    return Vue.axios.get('/top/mv', {
      params: data
    })
  },
  fetchAlbumDetail (data) {
    return Vue.axios.get('/album', {
      params: data
    })
  },
  fetchSongUrl (data) {
    return Vue.axios.get('/song/url', {
      params: data
    })
  }
}
