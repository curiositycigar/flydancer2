<template>
  <div class="home-me">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="上传头像">
        <el-col :span="20">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-form-item>
      <el-form-item label="昵称">
        <el-col :span="20">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="20">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-col :span="20">
          <el-radio class="radio" v-model="form.sex" label="male">男</el-radio>
          <el-radio class="radio" v-model="form.sex" label="female">女</el-radio>
          <el-radio class="radio" v-model="form.sex" label="null">保密</el-radio>
        </el-col>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="信息公开">
        <el-radio class="radio" v-model="form.meOpen" label="all">所有人</el-radio>
        <el-radio class="radio" v-model="form.meOpen" label="fans">仅粉丝</el-radio>
        <el-radio class="radio" v-model="form.meOpen" label="null">不公开</el-radio>
      </el-form-item>
      <el-form-item label="歌单公开">
        <el-switch
          v-model="form.listOpen">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button>取消修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        form: {
          id: 123123,
          name: 'Cigar',
          sex: 'male',
          date: '1994-11-24',
          desc: '没有简介',
          meOpen: 'all',
          listOpen: true
        },
        imageUrl: null
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
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
