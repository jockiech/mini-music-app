<template>
  <view class="wrap-box">
    <i-panel i-class="top-bar" hide-top hide-border>
      <i-icon type="translation" size="24" />
      <view>首页</view>
      <i-icon type="search" size="20" />
    </i-panel>
    <i-tabs color="#609344" v-model="current">
      <i-tab item-key="recommend" title="推荐"></i-tab>
      <i-tab item-key="songsheet" title="歌单"></i-tab>
      <i-tab item-key="catelist" title="分类榜单"></i-tab>
      <i-tab item-key="ranklist" title="MV排行"></i-tab>
    </i-tabs>
    <recommend v-if="current === 'recommend'" />
    <songsheet v-else-if="current === 'songsheet'" />
    <catelist v-else-if="current === 'catelist'" />
    <ranklist v-else-if="current === 'ranklist'" />
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iPanel from 'iview-mpvue/dist/components/panel/panel'
import iTabs from 'iview-mpvue/dist/components/tabs/tabs'
import iTab from 'iview-mpvue/dist/components/tab/tab'
import recommend from '@/components/parts/recommend'
import songsheet from '@/components/parts/songsheet'
import catelist from '@/components/parts/catelist'
import ranklist from '@/components/parts/ranklist'
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
    recommend,
    songsheet,
    catelist,
    ranklist,
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
      background-color: #609344;
      color: #fff;
    }
  }
  /deep/ .i-tabs {
    .i-tabs-tab-current {
      .i-tabs-tab-content {
        .i-tabs-tab-title-current {
          color: #609344;
        }
      }
    }
  }
}
</style>
