<template>
  <view class="wrap-box">
    <swiper
      indicator-dots="true"
      circular="true"
      skip-hidden-item-layout="true"
    >
      <swiper-item v-for="(banner, index) in bannerList" :key="index">
        <img mode="aspectFill" :src="banner.imageUrl" />
      </swiper-item>
    </swiper>
    <view class="all">
      <text>全部歌单</text>
      <view>
        <i-tag :key="index" :inner-text="tag.name" v-for="(tag, index) in tagList" color="green" />
      </view>
    </view>
  </view>
</template>

<script>
import iTag from 'iview-mpvue/dist/components/tag/tag'
import songApi from '@/api/song'
export default {
  data () {
    return {
      bannerList: [],
      tagList: []
    }
  },
  created () {
    this.getBannerList()
    this.getHotPlayList()
  },
  methods: {
    getBannerList () {
      const _self = this
      songApi
        .fetchBanner()
        .then(response => {
          _self.bannerList = response.data.banners
        })
        .catch(error => {
          console.log(error)
        })
    },
    getHotPlayList () {
      const randomColor = function () {
        return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
      }
      const _self = this
      songApi
        .fetchHotPlayList()
        .then(response => {
          _self.tagList = response.data.tags.map(tag => {
            return {
              ...tag,
              ...{ color: randomColor() }
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    'i-tag': iTag
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/tag/style/tag.css';
.wrap-box {
  swiper {
    swiper-item {
      image {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
  .all {
    padding: 16px;
    text {
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
    view {
      padding: 8px;
      /deep/ .i-tag {
        margin: 8px;
      }
    }
  }
}
</style>
