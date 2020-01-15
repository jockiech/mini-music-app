import Vue from 'vue'

export default {
  fetchSongUrl (data) {
    return Vue.axios.get('/song/url', {
      params: data
    })
  }
}
