/*
create by YOU
*/

<template>
  <div class="login">
    <a href="javascript:;" @click="toggleLogin">登录</a>
    <div class="login-background" v-show="showLogin">
      <div class="login-wrapper">
        <div class="login-tabs">
          <div :class="loginFields ? 'active' : ''" @click="showLoginFields">登錄</div>
          <div :class="loginFields ? '' : 'active'" @click="showRegisterFields">註冊</div>
        </div>
        <div class="login-fields" v-show="loginFields">
          <el-form ref="login" label-position="left" :model="login" label-width="80px">
            <el-form-item label="用户名:">
              <el-input v-model="login.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input v-model="login.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmitLogin">登录</el-button>
              <el-button @click="toggleLogin">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="register-fields" v-show="!loginFields">
          <el-form ref="login" label-position="left" :model="login" label-width="80px">
            <el-form-item label="用户名:">
              <el-input v-model="register.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input v-model="register.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:">
              <el-input v-model="register.password1"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmitRegister">注册</el-button>
              <el-button @click="toggleLogin">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'fdLogin',
    data () {
      return {
        username: '',
        password: '',
        showLogin: false,
        loginFields: true,
        login: {
          username: '18829291269',
          password: 'feilei123'
        },
        register: {
          username: '',
          password: '',
          password1: ''
        }
      }
    },
    methods: {
      toggleLogin () {
        this.showLogin = !this.showLogin
      },
      showLoginFields () {
        this.loginFields = true
      },
      showRegisterFields () {
        this.loginFields = false
      },
      onSubmitLogin () {
        let that = this
        this.$store.commit('LOGIN', {
          ...this.login,
          message: that.$message
        })
      },
      onSubmitRegister () {
        let that = this
        let right = true
        let message = ''
        if (!/^[a-zA-Z][a-z0-9A-Z_]{5,14}/.test(this.register.username)) {
          message += '用户名为字母开头，6-15位数字字母下划线组合 '
          right = false
        }
        if (!/^[a-z0-9A-Z_]{6,15}/.test(this.register.password)) {
          message += '密码为6-15位数字字母下划线组合 '
          right = false
        }
        if (this.register.password !== this.register.password1) {
          message += '两次输入密码必须相同'
          right = false
        }
        if (!right) {
          this.$message.error(message)
        } else {
          this.$store.commit('REGISTER', {
            message: that.$message,
            username: that.register.username,
            password: that.register.password
          })
          this.$message.error('正确')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 100%
    line-height: 100%
    text-align: center
    a
      color: #cccccc
      &:hover
        color: #ffffff
    .login-background
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.5)
      z-index: 9999
      .login-wrapper
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        width: 400px
        background: #ffffff
        .login-tabs
          display: flex
          width: 100%
          > div
            box-sizing: border-box
            width: 50%
            height: 50px
            line-height: 50px
            border-bottom: solid 1px #e7e1cd
            cursor: pointer
            background: rgb(255, 255, 255)
            transition: all 0.1s
            &.active
              color: #55a532
              border-bottom: solid 1px #55a532
        .login-fields, .register-fields
          box-sizing: border-box
          padding: 50px
</style>
