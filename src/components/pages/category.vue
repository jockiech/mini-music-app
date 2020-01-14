<template>
  <view class="wrap-box">
    <i-panel i-class="top-bar" hide-top hide-border>
      <view>分类</view>
      <i-icon type="search" size="20" />
    </i-panel>
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iPanel from 'iview-mpvue/dist/components/panel/panel'
export default {
  created () {
    // let app = getApp()
  },
  components: {
    'i-icon': icon,
    'i-panel': iPanel
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
@import '~iview-mpvue/dist/components/panel/style/panel.css';
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
      background-color: #609344;
      color: #fff;
      & > view:not(.i-icon) {
        position: absolute;
        width: calc(100% - 20px);
        text-align: center;
      }
    }
  }
}
</style>
