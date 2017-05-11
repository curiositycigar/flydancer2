<template>
  <div class="home-upload">
    <div class="upload-btns">
      <el-button @click="showUploadWindow">上传新歌</el-button>
      <el-dialog
        title="上传歌曲"
        :visible.sync="uploadWindowVisible"
        :before-close="handleClose">
        <el-form ref="form" :model="form"
                 method="post"
                 label-width="80px"
                 enctype="multipart/form-data"
                 action="http://222.24.63.118/post/upload">
          <el-form-item label="歌曲名称">
            <el-input name="upload_music_name" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="歌曲文件">
            <input name="upload_music_file_url" type="file" :value="form.file">
            <input name="upload_user_name" type="hidden" :value="form.userName">
          </el-form-item>
          <el-form-item style="display: flex; justify-content: flex-end;">
            <el-button type="primary" @click="onSubmit">立即提交</el-button>
            <el-button @click="uploadWindowVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
        <iframe name="iframe" src="" ref="iframe" frameborder="0" style="display:none;"></iframe>
      </el-dialog>
    </div>
    <el-table
      :data="uploadData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="upload_music_name"
        label="歌名">
      </el-table-column>
      <el-table-column
        prop="upload_user_name"
        label="上传者"
        width="180">
      </el-table-column>
      <el-table-column
        label="是否公开"
        width="180">
        <template scope="scope">
          <el-switch
            v-model="scope.row.upload_open"
            on-text=""
            off-text="">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="upload_date"
        label="上传日期"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">播放</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/babel">
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        uploadData: [],
        uploadWindowVisible: false,
        uploadAction: 'http://222.24.63.118/post/upload',
        fileList: [],
        form: {
          name: '8888888',
          file: '',
          userName: ''
        }
      }
    },
    mounted () {
      this.form.userName = this.$store.state.userData.user_name
      this.uploadData = this.$_.cloneDeep(this.upload)
      for (let i = 0; i < this.uploadData.length; i++) {
        this.uploadData[i].upload_open = !!parseInt(this.uploadData[i].upload_open)
      }
    },
    watch: {
      upload () {
        this.uploadData = this.$_.cloneDeep(this.upload)
        for (let i = 0; i < this.uploadData.length; i++) {
          this.uploadData[i].upload_open = !!parseInt(this.uploadData[i].upload_open)
        }
      }
    },
    computed: {
      ...mapState([
        'upload'
      ])
    },
    methods: {
      showUploadWindow () {
        this.uploadWindowVisible = true
      },
      handleClose () {
        this.uploadWindowVisible = false
      },
      onSubmit () {
        // 草
        let form = this.$refs.form.$el.cloneNode(true)
        window.frames['iframe'].document.body.appendChild(form)
        form.submit()
        ;(function check () {
          if (!window.frames['iframe'].document.body.querySelector('pre')) {
            setTimeout(check, 100)
          } else {
            console.log(window.frames['iframe'].document.body)
          }
        })()
      },
      handleChange (file, fileList) {
        if (file.raw.type !== 'audio/mp3') {
          this.$message.error('文件类型必须是mp3')
          this.fileList = []
        } else if (fileList.length > 1) {
          this.$refs.upload.clearFiles()
          this.fileList = [file]
        } else {
          this.fileList = [file]
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-upload
    .upload-btns
      padding: 10px 0
</style>
