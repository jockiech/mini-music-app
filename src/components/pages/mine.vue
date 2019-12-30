<template>
  <view class="wrap-box">
    <i-panel i-class="top-bar" hide-top hide-border>
      <view>个人中心</view>
      <i-icon type="remind_fill" size="18" />
    </i-panel>
    <i-panel i-class="personal-info" hide-top hide-border>
      <i-cell is-link>
        <view>
          <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar>
          <view>
            <p>Sunshine</p>
            <p>我有孤独和烈酒 你是否愿意跟我走</p>
          </view>
        </view>
      </i-cell>
    </i-panel>
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
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iPanel from 'iview-mpvue/dist/components/panel/panel'
import iCell from 'iview-mpvue/dist/components/cell/cell'
import iAvatar from 'iview-mpvue/dist/components/avatar/avatar'
import iCard from 'iview-mpvue/dist/components/card/card'

export default {
  created () {
    // let app = getApp()
  },
  components: {
    'i-icon': icon,
    'i-panel': iPanel,
    'i-cell': iCell,
    'i-avatar': iAvatar,
    'i-card': iCard
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
@import '~iview-mpvue/dist/components/panel/style/panel.css';
@import '~iview-mpvue/dist/components/cell/style/cell.css';
@import '~iview-mpvue/dist/components/avatar/style/avatar.css';
@import '~iview-mpvue/dist/components/card/style/card.css';
.wrap-box {
  /deep/ .i-panel.top-bar {
    .i-panel-content {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 10px;
      height: 40px;
      font-size: 16px;
      background-color: #5c90ff;
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
      .i-cell {
        height: 80px;
        font-size: 16px;
        background-color: #5c90ff;
        color: #fff;
        .i-cell-bd {
          & > view {
            display: flex;
            align-items: center;
            & > view:last-child {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              p {
                margin-left: 16px;
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
}
</style>
