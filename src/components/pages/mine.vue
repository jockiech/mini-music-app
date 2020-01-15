<template>
  <view class="wrap-box">
    <i-panel i-class="top-bar" hide-top hide-border>
      <view>个人中心</view>
      <i-icon type="remind_fill" size="18" />
    </i-panel>
    <i-panel i-class="personal-info" hide-top hide-border>
      <i-cell is-link>
        <view>
          <i-avatar :src="userMeta.avatarUrl" size="large"></i-avatar>
          <view>
            <text>{{ userMeta }}</text>
            <text>{{ userMeta }}</text>
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
    <i-collapse>
      <i-collapse-item title="创建的歌单" name="name1">
        <div slot="content">
          <i-cell>
            <view>
              <image src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <view>
                <text class="title">最美电视剧插曲</text>
                <text class="desc">88首</text>
              </view>
            </view>
            <i-icon type="switch" size="18" />
          </i-cell>
        </div>
      </i-collapse-item>
      <i-collapse-item title="收藏的歌单" name="name2">
        <div slot="content">
          <i-cell>
            <view>
              <image src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <view>
                <text class="title">我喜欢的歌</text>
                <text class="desc">122首</text>
              </view>
            </view>
            <i-icon type="switch" size="18" />
          </i-cell>
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userMeta'])
  },
  components: {
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
  /deep/ .i-panel.top-bar {
    .i-panel-content {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 10px;
      height: 40px;
      font-size: 16px;
      background-color: #609344;;
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
        background-color: #609344;
        color: #fff;
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
      .i-collapse-item-content {
        .i-cell {
          padding: 12px 0;
          font-size: 14px;
          .i-cell-bd {
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > view {
              display: flex;
              align-items: center;
              image {
                width: 40px;
                height: 40px;
              }
              & > view:last-child {
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text {
                  margin-left: 16px;
                }
                .title {
                  font-size: 14px;
                }
                .desc {
                  font-size: 12px;
                  color: #80848f;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
