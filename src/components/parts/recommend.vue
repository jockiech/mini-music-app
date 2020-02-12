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
          @click="toAlbumDetail(item.id)"
        />
      </swiper-item>
    </swiper>
    <i-card>
      <view slot="content">
        <view>
          <view>
            <view class="diantai">
              <text class="iconfont icondiantai"></text>
            </view>
          </view>
          <text>电台</text>
        </view>
        <view>
          <view>
            <view class="meirigedan">
              <text class="iconfont iconrili"></text>
            </view>
          </view>
          <text>每日歌单</text>
        </view>
        <view>
          <view>
            <view class="mv">
              <text class="iconfont iconbofang"></text>
            </view>
          </view>
          <text>精彩MV</text>
        </view>
        <view>
          <view>
            <view class="regebang">
              <text class="iconfont icondouyinbangdan"></text>
            </view>
          </view>
          <text>热歌榜</text>
        </view>
      </view>
    </i-card>
  </view>
</template>

<script>
import iCard from 'iview-mpvue/dist/components/card/card'
import songApi from '@/api/song'
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
      songApi
        .fetchNewestAlbums()
        .then(response => {
          _self.albums = response.data.albums
        })
        .catch(error => {
          console.error(error)
        })
    },
    toAlbumDetail (id) {
      const _self = this
      songApi
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
@import '~iview-mpvue/dist/components/card/style/card.css';
.wrap-box {
  swiper {
    swiper-item {
      image {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
  /deep/ .i-card {
    margin-top: 16px;
    border: none;
    box-shadow: 0px 0px 5px 5px rgba(128, 128, 128, 0.1);
    .i-card-footer {
      padding: 0;
    }
    .i-card-body {
      padding: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 16px;
      & > view {
        flex: 1;
        & > view {
          width: 100%;
          display: flex;
          justify-content: center;
          .diantai {
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background: #fb9c02;
            color: #fff;
          }
          .meirigedan {
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background: #5c90ff;
            color: #fff;
          }
          .mv {
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background: #c353f5;
            color: #fff;
          }
          .regebang {
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background: #fe5b51;
            color: #fff;
          }
          .iconfont {
            font-size: 24px;
          }
        }
        text {
          display: block;
          padding: 8px 0;
          width: 100%;
          text-align: center;
        }
      }
    }
    .i-card-body::before {
      border-top-width: 0;
    }
  }
}
</style>
