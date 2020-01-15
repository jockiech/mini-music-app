<template>
  <div class="wrap-box">
    <audio-player :task="task"></audio-player>
  </div>
</template>

<script>
import AudioPlayer from 'mpvue-audio'
import playApi from '@/api/play'

export default {
  data () {
    return {
      task: {}
    }
  },
  mounted () {
    this.initTask()
  },
  methods: {
    initTask () {
      const _self = this
      playApi
        .fetchSongUrl({ id: _self.$route.query.id })
        .then(response => {
          _self.task.content_url = response.data.data[0].url
          _self.task.content_cover_url = decodeURIComponent(_self.$route.query.picUrl)
          _self.task.title = _self.$route.query.name
        })
    }
  },
  components: {
    'audio-player': AudioPlayer
  }
}
</script>

<style lang="less" scoped>
.wrap-box {
  /deep/ .audio {
    position: absolute;
  }
}
</style>
