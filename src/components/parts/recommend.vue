<template>
  <view class="wrap-box">
    <swiper circular="true" skip-hidden-item-layout="true">
      <swiper-item v-for="(item,index) in albums" :key="index">
        <img mode="aspectFill" :src="item.picUrl" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import recommendApi from '@/api/recommend'
export default {
  data () {
    return {
      albums: null
    }
  },
  created () {
    this.getNewestAlbums()
  },
  methods: {
    getNewestAlbums () {
      const _self = this
      recommendApi
        .fetchNewestAlbums()
        .then(response => {
          _self.albums = response.data.albums
          console.log(_self.albums)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.wrap-box {
  swiper {
    swiper-item {
      image {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
}
</style>
