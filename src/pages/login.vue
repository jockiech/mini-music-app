<template>
  <view>
    <img src="../assets/image/logo.png" />
    <i-panel>
      <i-input v-model.lazy="phone" type="text" title="账号" placeholder="请输入手机号码" />
      <i-input
        v-model.lazy="password"
        type="password"
        title="密码"
        placeholder="请输入密码"
      />
    </i-panel>
  </view>
</template>

<script>
import iInput from 'iview-mpvue/dist/components/input/input'
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  components: {
    'i-input': iInput
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/input/style/input.css';
</style>
