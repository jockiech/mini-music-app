<template>
  <view>
    <i-panel>
      <i-input v-model.lazy="phone"
               type="text" placeholder="请输入电话号码" />
      <i-input v-model.lazy="password"
               type="password" placeholder="请输入密码" />
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
