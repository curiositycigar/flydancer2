<template>
  <div class="home-password">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="旧密码">
        <el-col :span="20">
          <el-input v-model="form.oldPassword"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="新密码">
        <el-col :span="20">
          <el-input v-model="form.password1"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-col :span="20">
          <el-input v-model="form.password2"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        form: {
          oldPassword: '',
          password1: '',
          password2: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log(this.$store.state.userData.user_password)
        if (this.$store.state.userData.user_password === this.form.oldPassword) {
          if (/^[a-zA-Z0-9_]{6,14}$/.test(this.form.password1)) {
            // 提交数据
            if (this.form.password1 === this.form.password2) {
            } else {
              console.log('两次输入密码不一致')
            }
          } else {
            console.log('新密码必须为字母数字加下划线的组合,长度在6-14之间')
          }
        } else {
          console.log('旧密码错误')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-password
    width: 400px
    margin: 0 auto
</style>
