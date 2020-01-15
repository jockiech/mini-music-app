<template>
  <view class="wrap-box">
    <swiper
      indicator-dots="true"
      circular="true"
      skip-hidden-item-layout="true"
    >
      <swiper-item v-for="(item, index) in albums" :key="index">
        <img
          mode="aspectFill"
          :src="item.picUrl"
          @click="getAlbumDetail(item.id)"
        />
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
        })
        .catch(error => {
          console.error(error)
        })
    },
    getAlbumDetail (id) {
      const _self = this
      recommendApi
        .fetchAlbumDetail({ id })
        .then(response => {
          if (response.data.songs && response.data.songs.length) {
            _self.$router.push({
              path: '/pages/player',
              query: {
                id: response.data.songs[0].id,
                name: response.data.songs[0].name,
                picUrl: encodeURIComponent(response.data.songs[0].al.picUrl)
              }
            })
          }
        })
        .then(error => {
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
