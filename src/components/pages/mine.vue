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
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iPanel from 'iview-mpvue/dist/components/panel/panel'
import iCell from 'iview-mpvue/dist/components/cell/cell'
import iAvatar from 'iview-mpvue/dist/components/avatar/avatar'
export default {
  created () {
    // let app = getApp()
  },
  components: {
    'i-icon': icon,
    'i-panel': iPanel,
    'i-cell': iCell,
    'i-avatar': iAvatar
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
@import '~iview-mpvue/dist/components/panel/style/panel.css';
@import '~iview-mpvue/dist/components/cell/style/cell.css';
@import '~iview-mpvue/dist/components/avatar/style/avatar.css';
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
}
</style>
