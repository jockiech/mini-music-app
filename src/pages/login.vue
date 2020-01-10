<template>
  <view class="wrap-box">
    <img mode="widthFix" src="../assets/images/logo.png" />
    <i-panel>
      <i-input
        v-model.lazy="phone"
        type="number"
        title="📱手机号"
        placeholder="请输入手机号码"
      />
      <i-input
        v-model.lazy="password"
        type="password"
        title="🔐密码"
        placeholder="请输入密码"
      />
      <i-button inline @click="toRegister()">注册</i-button>
      <i-button type="primary">登录</i-button>
    </i-panel>
  </view>
</template>

<script>
import iInput from 'iview-mpvue/dist/components/input/input'
import iButton from 'iview-mpvue/dist/components/button/button'
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push({ path: '/pages/register' })
    }
  },
  components: {
    'i-input': iInput,
    'i-button': iButton
  }
}
</script>

<style lang="less" scoped>
@import '~iview-mpvue/dist/components/input/style/input.css';
@import '~iview-mpvue/dist/components/button/style/button.css';
@import '../assets/css/form.css';
.wrap-box {
  height: 100%;
  img {
    width: 100%;
  }
  /deep/ i-panel {
    & > view:last-of-type {
      margin-bottom: 0;
    }
    .i-input {
      border-bottom: 1px solid #609344;
      margin: 25px;
      padding: 0;
      background: transparent;
      input {
        color: #609344;
      }
      .i-input-placeholder {
        color: #609344;
      }
      .i-input-title {
        color: #609344;
      }
    }
    .i-btn-inline {
      float: right;
      margin: 5px 25px 10px !important;
      box-shadow: none !important;
      border: none !important;
      padding: 0 !important;
      height: auto;
      line-height: normal;
      background-color: transparent !important;
      color: #609344 !important;
    }
    .i-btn:not(.i-btn-inline) {
      clear: both;
      margin: 25px;
      background-color: #609344 !important;
    }
  }
}
</style>
