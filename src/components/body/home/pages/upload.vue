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
            <el-input name="upload_music_name" v-model="form.upload_music_name"></el-input>
          </el-form-item>
          <el-form-item label="歌曲文件">
            <el-upload
              class="upload-demo"
              ref="upload"
              name="upload_music_file_url"
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList"
              :on-change="handleChange"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传mp3文件，且不超过5000kb</div>
            </el-upload>
            <!--<input name="upload_music_file_url" type="file" :value="form.upload_music_file_url">-->
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
      <!--<el-table-column-->
        <!--label="是否公开"-->
        <!--width="180">-->
        <!--<template scope="scope">-->
          <!--<el-switch-->
            <!--v-model="scope.row.upload_open"-->
            <!--on-text=""-->
            <!--off-text="">-->
          <!--</el-switch>-->
        <!--</template>-->
      <!--</el-table-column>-->
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
          <el-button type="text" size="small" @click="onDeleteUpload(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/babel">
  import {mapState} from 'vuex'
  import ajax from './components/ajax'
  export default {
    data () {
      return {
        uploadData: [],
        uploadWindowVisible: false,
        uploadAction: 'http://222.24.63.118/post/upload',
        fileList: [],
        form: {
          upload_music_name: '8888888',
          upload_user_name: ''
        }
      }
    },
    mounted () {
      this.form.upload_user_name = this.$store.state.userData.user_name
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
        ajax({
          file: this.fileList[0].raw,
          data: this.form,
          filename: 'upload_music_file_url',
          action: this.uploadAction,
          onProgress: e => {
            console.log(e)
          },
          onSuccess: res => {
            this.$message('上传成功')
            this.$store.commit('uploadSong', res)
            this.uploadWindowVisible = false
          },
          onError: err => {
            console.log(err)
          }
        })
      },
      onDeleteUpload (row) {
        let that = this
        this.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/delete/upload',
          params: {
            id: row.upload_id,
            upload_user_name: this.$store.state.userData.user_name
          }
        }).then(function (res) {
          that.$store.commit('deleteUploadSong', row)
          that.$message('删除成功')
        }).catch(function (err) {
          console.log(err)
          that.$message.error('删除失败')
        })
      },
      handleSuccess () {
        console.log('success')
      },
      handleError () {
        console.log('error')
      },
      handleChange (file, fileList) {
        console.log('change:', file)
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
