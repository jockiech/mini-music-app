<template>
  <view>
    <page>
      <home v-if="current === 'home'" />
      <category v-else-if="current === 'category'" />
      <mine v-else-if="current === 'mine'" />
    </page>
    <i-tab-bar v-model="current" color="#609344" fixed>
      <i-tab-bar-item item-key="home" icon="homepage" current-icon="homepage_fill" title="首页" />
      <i-tab-bar-item item-key="category" icon="createtask" current-icon="createtask_fill" title="分类" />
      <i-tab-bar-item item-key="mine" icon="mine" current-icon="mine_fill" title="我的" />
    </i-tab-bar>
  </view>
</template>

<script>
import iTabBar from 'iview-mpvue/dist/components/tab-bar/tab-bar'
import iTabBarItem from 'iview-mpvue/dist/components/tab-bar-item/tab-bar-item'
import home from '@/components/pages/home'
import category from '@/components/pages/category'
import mine from '@/components/pages/mine'

export default {
  data () {
    return {
      current: 'home'
    }
  },
  components: {
    home,
    category,
    mine,
    'i-tab-bar': iTabBar,
    'i-tab-bar-item': iTabBarItem
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/tab-bar/style/tab-bar.css';
@import '~iview-mpvue/dist/components/tab-bar-item/style/tab-bar-item.css';
</style>
