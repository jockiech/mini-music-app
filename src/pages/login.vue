<template>
  <view class="wrap-box">
    <img mode="widthFix" src="../assets/images/logo.png" />
    <i-panel>
      <i-input
        :value="phone"
        @blur="(event) => { phone = event.target.value }"
        type="number"
        title="📱手机号"
        placeholder="请输入手机号码"
      />
      <i-input
        :value="password"
        @blur="(event) => { password = event.target.value }"
        type="password"
        title="🔐密码"
        placeholder="请输入密码"
      />
      <i-button type="primary" @click="loginSubmit">登录</i-button>
    </i-panel>
  </view>
</template>

<script>
import iInput from 'iview-mpvue/dist/components/input/input'
import iButton from 'iview-mpvue/dist/components/button/button'
import loginApi from '@/api/login'
export default {
  data () {
    return {
      phone: '15982824650',
      password: 'cyz199112121610'
    }
  },
  methods: {
    loginSubmit () {
      const _self = this
      loginApi.login({
        phone: _self.phone,
        password: _self.password
      }).then(response => {
        _self.$router.push({ path: '/pages/main' })
      }).catch(error => {
        console.error(error)
      })
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
    .i-btn {
      margin: 25px;
      background-color: #609344 !important;
    }
  }
}
</style>
