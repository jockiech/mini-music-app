<template>
  <view class="wrap-box">
    <i-panel i-class="top-bar" hide-top hide-border>
      <i-icon type="translation" size="24" />
      <view>首页</view>
      <i-icon type="search" size="20" />
    </i-panel>
    <i-tabs color="#5c90ff" v-model="current">
      <i-tab item-key="recommend" title="推荐"></i-tab>
      <i-tab item-key="songsheet" title="歌单"></i-tab>
      <i-tab item-key="category" title="分类"></i-tab>
      <i-tab item-key="ranklist" title="排行榜"></i-tab>
    </i-tabs>
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iPanel from 'iview-mpvue/dist/components/panel/panel'
import iTabs from 'iview-mpvue/dist/components/tabs/tabs'
import iTab from 'iview-mpvue/dist/components/tab/tab'
export default {
  data () {
    return {
      current: 'recommend'
    }
  },
  created () {
    // let app = getApp()
  },
  components: {
    'i-icon': icon,
    'i-panel': iPanel,
    'i-tabs': iTabs,
    'i-tab': iTab
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
@import '~iview-mpvue/dist/components/panel/style/panel.css';
@import '~iview-mpvue/dist/components/tabs/style/tabs.css';
@import '~iview-mpvue/dist/components/tab/style/tab.css';
.wrap-box {
  /deep/ .i-panel.top-bar {
    .i-panel-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      height: 40px;
      font-size: 16px;
      background-color: #5c90ff;
      color: #fff;
    }
  }
}
</style>
