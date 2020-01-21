<template>
  <scroll-view class="wrap-box">
    <view class="rank-card-wrap" :key="index" v-for="(item, index) in topList">
      <i-card
        :thumb="item.coverImgUrl"
        :title="item.name"
        :extra="`🎧${item.playCount.toLocaleString()}`"
      >
        <!-- <view slot="content">
          <text :key="key" v-for="(track, key) in item.tracks">
            {{ key + 1 }}. {{ key.first }} · {{ key.second }}
          </text>
        </view> -->
      </i-card>
      <view v-if="item.tracks && item.tracks.length">
        <text :key="key" v-for="(track, key) in item.tracks">
          {{ key + 1 }}. {{ track.first }} · {{ track.second }}
        </text>
      </view> 
    </view>
  </scroll-view>
</template>

<script>
import iCard from 'iview-mpvue/dist/components/card/card'
import topApi from '@/api/topcatelist'
export default {
  data () {
    return {
      topList: []
    }
  },
  created () {
    this.getTopList()
  },
  methods: {
    getTopList () {
      const _self = this
      topApi
        .fetchToplist()
        .then(response => {
          _self.topList = response.data.list
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  components: {
    'i-card': iCard
  }
}
</script>

<style lang="less" scoped>
.wrap-box {
  font-size: 12px;
  .rank-card-wrap {
    margin: 16px;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 5px rgba(128, 128, 128, 0.1);
  }
  /deep/ .i-card {
    margin: 0;
    border-radius: 0;
    border: none;
    // box-shadow: 0px 0px 5px 5px rgba(128, 128, 128, 0.1);
    .i-card-header {
      padding: 0;
      .i-card-header-content {
        flex: auto;
        font-size: 12px;
      }
      .i-card-header-extra {
        flex: 0.5;
        font-size: 12px;
      }
    }
    .i-card-body {
      padding: 0;
    }
    .i-card-body::before {
      border-top-width: 0;
    }
    .i-card-footer {
      padding: 0;
    }
  }
}
</style>
