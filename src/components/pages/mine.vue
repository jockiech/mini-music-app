<template>
  <view class="wrap-box">
    <view
      class="person-wrap"
      :style="{
        backgroundImage: bgStyle
      }"
    >
      <i-panel i-class="top-bar" hide-top hide-border>
        <view>
          <text>个人中心</text>
        </view>
        <i-icon type="remind_fill" size="18" />
      </i-panel>
      <i-panel i-class="personal-info" hide-top hide-border>
        <i-avatar :src="userMeta.avatarUrl" size="large" />
        <i-cell :title="userMeta.nickname" :label="userMeta.signature" is-link>
          <!-- <i-avatar slot="icon" :src="userMeta.avatarUrl" size="large" /> -->
        </i-cell>
      </i-panel>
    </view>
    <i-card>
      <view slot="content">
        <view>
          <view class="bendiziyuan">
            <text class="iconfont iconbendiziyuan"></text>
          </view>
          <text>本地</text>
        </view>
        <view>
          <view class="xiazai">
            <text class="iconfont iconxiazai"></text>
          </view>
          <text>下载</text>
        </view>
        <view>
          <view class="gedan">
            <text class="iconfont iconSongListgedan"></text>
          </view>
          <text>歌单</text>
        </view>
        <view>
          <view class="xihuan">
            <text class="iconfont iconxihuan"></text>
          </view>
          <text>喜欢</text>
        </view>
      </view>
    </i-card>
    <i-collapse>
      <i-collapse-item title="创建的歌单" name="new">
        <div slot="content">
          <songlist :list="playNewList" />
        </div>
      </i-collapse-item>
      <i-collapse-item title="收藏的歌单" name="star">
        <div slot="content">
          <songlist :list="playStarList" />
        </div>
      </i-collapse-item>
    </i-collapse>
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iPanel from 'iview-mpvue/dist/components/panel/panel'
import iCell from 'iview-mpvue/dist/components/cell/cell'
import iAvatar from 'iview-mpvue/dist/components/avatar/avatar'
import iCard from 'iview-mpvue/dist/components/card/card'
import iCollapse from 'iview-mpvue/dist/components/collapse/collapse'
import iCollapseItem from 'iview-mpvue/dist/components/collapse-item/collapse-item'
import songlist from '@/components/parts/songlist'
import { mapGetters } from 'vuex'
import userApi from '@/api/user'

export default {
  data () {
    return {
      playStarList: [],
      playNewList: []
    }
  },
  created () {
    this.getPlayList()
  },
  computed: {
    ...mapGetters(['userMeta']),
    bgStyle () {
      return `url(${this.userMeta.backgroundUrl})`
    }
  },
  methods: {
    getPlayList () {
      const _self = this
      userApi
        .fetchUserPlaylist({
          uid: _self.userMeta.userId
        })
        .then(response => {
          _self.playStarList = response.data.playlist.filter(
            item => item.subscribed
          )
          _self.playNewList = response.data.playlist.filter(
            item => !item.subscribed
          )
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    songlist,
    'i-icon': icon,
    'i-panel': iPanel,
    'i-cell': iCell,
    'i-avatar': iAvatar,
    'i-card': iCard,
    'i-collapse': iCollapse,
    'i-collapse-item': iCollapseItem
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
@import '~iview-mpvue/dist/components/panel/style/panel.css';
@import '~iview-mpvue/dist/components/cell/style/cell.css';
@import '~iview-mpvue/dist/components/avatar/style/avatar.css';
@import '~iview-mpvue/dist/components/card/style/card.css';
@import '~iview-mpvue/dist/components/collapse/style/collapse.css';
@import '~iview-mpvue/dist/components/collapse-item/style/collapse-item.css';
.wrap-box {
  .person-wrap {
    background-size: cover;
    width: 100%;
    /deep/ .i-panel.top-bar {
      .i-panel-content {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 10px;
        height: 40px;
        font-size: 16px;
        background: #609344;
        color: #fff;
        & > view:not(.i-icon) {
          position: absolute;
          width: calc(100% - 20px);
          text-align: center;
        }
      }
    }
    /deep/ .i-panel.personal-info {
      .i-panel-content {
        padding: 15px;
        display: flex;
        align-items: center;
        background: transparent;
        .i-cell {
          padding: 0;
          padding-left: 15px;
          height: 80px;
          font-size: 16px;
          color: #fff;
          background: transparent;
          flex: auto;
          .i-cell-bd {
            & > view {
              display: flex;
              align-items: center;
              & > view:last-child {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text {
                  margin-left: 16px;
                }
              }
            }
          }
        }
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      & > view {
        .bendiziyuan {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background: #00c2f0;
          color: #fff;
        }
        .xiazai {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background: #ed378c;
          color: #fff;
        }
        .gedan {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background: #6357ff;
          color: #fff;
        }
        .xihuan {
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          background: #fd8500;
          color: #fff;
        }
        .iconfont {
          font-size: 24px;
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
  /deep/ .i-collapse {
    margin-top: 24px;
    .i-collapse-item {
      padding: 8px;
      border-top: none;
      .i-collapse-item-title-wrap {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text {
          -webkit-box-ordinal-group: 1;
          -moz-box-ordinal-group: 1;
          -ms-flex-order: 1;
          -webkit-order: 1;
          order: 1;
          font-size: 16px;
          font-weight: bold;
        }
        text:before {
          content: '';
          display: inline-block;
          vertical-align: middle;
          margin-right: 0.5em;
          width: 2px;
          height: 1em;
          background-color: #609344;
          border-radius: 2px;
        }
        .i-collapse-item-arrow {
          -webkit-box-ordinal-group: 2;
          -moz-box-ordinal-group: 2;
          -ms-flex-order: 2;
          -webkit-order: 2;
          order: 2;
          transform: rotate(90deg);
        }
        .i-collapse-item-arrow-show {
          -webkit-box-ordinal-group: 2;
          -moz-box-ordinal-group: 2;
          -ms-flex-order: 2;
          -webkit-order: 2;
          order: 2;
          transform: rotate(-90deg);
        }
      }
    }
  }
}
</style>
