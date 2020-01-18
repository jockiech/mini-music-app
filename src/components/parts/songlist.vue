<template>
  <view>
    <!-- <i-cell-group>
      <i-cell v-for="(item,index) in list" :title="item.name" :label="`${item.trackCount}首`" :key="index">
        <image slot="footer" :src="item.coverImgUrl" />
        <i-icon slot="icon" type="switch" size="18" />
        <i-icon type="switch" size="18" />
      </i-cell>
    </i-cell-group> -->
    <view class="i-cell-wrap" v-for="(item, index) in list" :key="index">
      <image :src="item.coverImgUrl" />
      <i-cell :title="item.name" :label="`${item.trackCount}首`" />
      <i-icon type="switch" size="18" />
    </view>
  </view>
</template>

<script>
import icon from 'iview-mpvue/dist/components/icon/icon'
import iCellGroup from 'iview-mpvue/dist/components/cell-group/cell-group'
import iCell from 'iview-mpvue/dist/components/cell/cell'
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  components: {
    'i-icon': icon,
    'i-cell-group': iCellGroup,
    'i-cell': iCell
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/icon/style/icon.css';
@import '~iview-mpvue/dist/components/cell-group/style/cell-group.css';
@import '~iview-mpvue/dist/components/cell/style/cell.css';
.i-cell-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  image {
    width: 40px;
    height: 40px;
  }
  /deep/ .i-cell {
    display: flex;
    align-items: center;
    flex: auto;
    padding: 12px;
    font-size: 14px;
    .i-cell-bd {
      .i-cell-text {
        line-height: normal;
        font-size: 14px;
      }
      .i-cell-desc {
        font-size: 12px;
      }
    }
  }
  /deep/ .i-cell::after {
    border: none;
  }
}
</style>
