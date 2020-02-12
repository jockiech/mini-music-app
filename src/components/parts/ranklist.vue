<template>
  <view class="wrap-box">
    <text>热度排行</text>
    <scroll-view>
      <view :key="index"
            v-for="(item, index) in topList"
            @click="toMvDetail(item.id)">
        <i-card :thumb="item.cover"
                :title="`${item.name} · ${item.artistName}`"
                :extra="`▶️\n${item.playCount.toLocaleString()}`" />
      </view>
    </scroll-view>
  </view>
</template>

<script>
import iCard from 'iview-mpvue/dist/components/card/card'
import songApi from '@/api/song'
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
      songApi
        .fetchTopMvList({
          limit: 100
        })
        .then(response => {
          _self.topList = response.data.data
            .sort(
              (property => {
                return (a, b) => {
                  return b[property] - a[property]
                }
              })('playCount')
            )
            .map((item, index) => {
              if (index === 0) {
                return {
                  ...item,
                  ...{
                    name: `🥇${item.name}`
                  }
                }
              } else if (index === 1) {
                return {
                  ...item,
                  ...{
                    name: `🥈${item.name}`
                  }
                }
              } else if (index === 2) {
                return {
                  ...item,
                  ...{
                    name: `🥉${item.name}`
                  }
                }
              } else {
                return item
              }
            })
        })
        .catch(error => {
          console.error(error)
        })
    },
    toMvDetail (id) {
      this.$router.push({ path: '/pages/mediaplayer', query: { id } })
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
  text {
    display: block;
    margin: 16px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: bold;
  }
  text:before {
    content: '';
    display: inline-block;
    // vertical-align: middle;
    vertical-align: -0.125em;
    margin-right: 0.75em;
    width: 2.5px;
    height: 1em;
    background-color: #609344;
    border-radius: 2.5px;
  }
  /deep/ .i-card {
    margin: 16px;
    border: none;
    box-shadow: 0px 0px 5px 5px rgba(128, 128, 128, 0.1);
    .i-card-header {
      padding: 16px;
      .i-card-header-content {
        line-height: 1.5;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: no-wrap;
        color: #888;
        .i-card-header-thumb {
          display: block;
          margin: 0;
          margin-bottom: 8px;
        }
      }
      .i-card-header-extra {
        font-size: 12px;
        white-space: pre-line;
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
