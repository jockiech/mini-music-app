<template>
  <view class="wrap-box"> </view>
</template>

<script>
import topApi from '@/api/topcatelist'
export default {
  created () {
    this.getTopList()
  },
  methods: {
    getTopList () {
      topApi
        .fetchToplist()
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="less" scoped></style>
