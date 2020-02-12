<template>
  <div class="wrap-box">
    <video :src="videoUrl" :poster="videoInfo.cover" />
    <div class="title">
      <span class="main-name">
        <span class="symbol">MV</span>
        <span>{{ videoInfo.name }}</span>
      </span>
      <i-icon
        :type="descFolded ? 'unfold' : 'packup'"
        @click="descFolded = !descFolded"
      />
    </div>
    <div v-if="!descFolded" class="desc">
      <p class="time">{{ videoInfo.publishTime }} 发布</p>
      <p class="content">{{ videoInfo.desc }}</p>
    </div>
    <div class="action-btns">
      <i-icon
        :type="isThumbup ? 'like_fill' : 'like'"
        @click="isThumbup = !isThumbup"
        size="25"
      />
      <i-icon
        :type="isCollection ? 'collection_fill' : 'collection'"
        @click="isCollection = !isCollection"
        size="25"
      />
      <i-icon
        :type="isComment ? 'message_fill' : 'message'"
        @click="isComment = !isComment"
        size="25"
      />
      <i-icon
        :type="isShare ? 'share_fill' : 'share'"
        @click="isShare = !isShare"
        size="25"
      />
      <i-icon type="more" size="25" />
    </div>
  </div>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import videoApi from '@/api/video'
export default {
  data () {
    return {
      videoUrl: '',
      videoInfo: {},
      descFolded: true,
      isThumbup: false,
      isCollection: false,
      isComment: false,
      isShare: false
    }
  },
  mounted () {
    this.initPlayer()
  },
  methods: {
    initPlayer () {
      const _self = this
      const init = async () => {
        await _self.getMvDetail()
        _self.getMvUrl()
      }
      init()
    },
    getMvDetail () {
      const _self = this
      return new Promise((resolve, reject) => {
        videoApi
          .fetchMvDetail({ mvid: _self.$route.query.id })
          .then(response => {
            _self.videoInfo = response.data.data
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getMvUrl () {
      const _self = this
      videoApi
        .fetchMvUrl({ id: _self.$route.query.id })
        .then(response => {
          _self.videoUrl = response.data.data.url
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  components: {
    'i-icon': icon
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
.wrap-box {
  video {
    width: 100%;
  }
  .title {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 0 20px;
    width: 100%;
    line-height: 1.5;
    font-size: 16px;
    font-weight: bold;
    .main-name {
      max-width: 80%;
      .symbol {
        border-radius: 4px;
        border: 1px solid #609344;
        margin-right: 8px;
        padding: 2px;
        font-size: 14px;
        color: #609344;
      }
    }
  }
  .desc {
    box-sizing: border-box;
    margin-top: 10px;
    padding: 0 20px;
    width: 100%;
    line-height: 1.5;
    font-size: 12px;
    .time {
      color: #666;
    }
    .content {
      color: #333;
    }
  }
  .action-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 0 20px;
    width: 100%;
  }
}
</style>
