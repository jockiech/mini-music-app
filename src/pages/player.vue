<template>
  <div class="wrap-box">
    <audio-player :task="task" />
  </div>
</template>

<script>
import AudioPlayer from 'mpvue-audio'
import songApi from '@/api/song'

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
      songApi
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
