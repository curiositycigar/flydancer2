<template>
  <div class="home-me">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="上传头像">
        <el-col :span="20">
          <el-upload
            class="avatar-uploader"
            action=""
            :file-list="fileList"
            :show-file-list="false"
            :on-change="handleChange"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-form-item>
      <el-form-item label="昵称">
        <el-col :span="20">
          <el-input v-model="form.user_nick_name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="20">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.user_birth"
                          style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-col :span="20">
          <el-radio class="radio" v-model="form.user_sex" label="1">男</el-radio>
          <el-radio class="radio" v-model="form.user_sex" label="-1">女</el-radio>
          <el-radio class="radio" v-model="form.user_sex" label="0">保密</el-radio>
        </el-col>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input type="textarea" v-model="form.user_intro"></el-input>
      </el-form-item>
      <el-form-item label="信息公开">
        <el-radio class="radio" v-model="form.user_open" label="1">所有人</el-radio>
        <el-radio class="radio" v-model="form.user_open" label="-1">仅粉丝</el-radio>
        <el-radio class="radio" v-model="form.user_open" label="0">不公开</el-radio>
      </el-form-item>
      <el-form-item label="歌单公开">
        <el-switch
          v-model="form.user_list_open">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button @click="onReset">取消修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script type="text/babel">
  import ajax from './components/ajax'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        form: {},
        imageUrl: null,
        fileList: [],
        birth: '1994-11-24'
      }
    },
    created () {
      this.form = this.$_.cloneDeep(this.userData)
      this.form.user_list_open = !!parseInt(this.form.user_list_open)
    },
    computed: {
      ...mapState(['userData'])
    },
    methods: {
      onSubmit () {
        let that = this
        let data = this.$_.cloneDeep(that.form)
        data.user_list_open = data.user_list_open ? '1' : '0'
        delete data.user_avatar
        console.log(data)
        let config = {
          data: data,
          action: 'http://222.24.63.118/post/modifyuser',
          onProgress: e => {
            console.log(e)
          },
          onSuccess: res => {
            console.log(res)
            this.$message('修改成功')
            that.$store.commit('LOGIN', {
              username: that.$store.state.userData.user_name,
              password: that.$store.state.userData.user_password
            })
            this.uploadWindowVisible = false
          },
          onError: err => {
            console.log('Error', err)
          }
        }
        if (this.fileList[0]) {
          config.file = this.fileList[0].raw
          config.filename = 'user_avatar'
        }

        ajax(config)
        console.log('submit!')
      },
      onReset () {
        this.form = this.$_.cloneDeep(this.userData)
        this.form.user_list_open = !!parseInt(this.form.user_list_open)
      },
      handleChange (file) {
        this.fileList = [file]
      },
      beforeAvatarUpload (file) {
        let that = this
        // 图像预览
        let reader = new FileReader()
        reader.onload = function (e) {
          that.imageUrl = e.target.result
        }
        reader.readAsDataURL(file)
        return false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-me
    display: flex
    align-items: center
    justify-content: center
    > form
      width: 500px

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px !important;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
