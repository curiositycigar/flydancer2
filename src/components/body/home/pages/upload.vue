<template>
  <div class="home-upload">
    <div class="upload-btns">
      <el-button @click="showUploadWindow">上传新歌</el-button>
      <el-dialog
        title="上传歌曲"
        :visible.sync="uploadWindowVisible"
        :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="歌曲名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="歌曲文件">
            <el-upload
              ref="upload"
              class="upload-demo"
              :action="uploadAction"
              :file-list="fileList"
              :auto-upload="false"
              :multiple="false"
              :on-change="handleChange">
              <el-button size="small" type="primary">选择文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item style="display: flex; justify-content: flex-end;">
            <el-button type="primary" @click="onSubmit">立即提交</el-button>
            <el-button @click="uploadWindowVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <el-table
      :data="uploadData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="歌名">
      </el-table-column>
      <el-table-column
        prop="duration"
        label="时长"
        width="180">
      </el-table-column>
      <el-table-column
        label="是否公开"
        width="180">
        <template scope="scope">
          <el-switch
            v-model="scope.row.open"
            on-text=""
            off-text="">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
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
  export default {
    data () {
      return {
        uploadData: [
          {
            id: 123123,
            name: '我是革命',
            duration: '05:13',
            open: false,
            date: '2017-05-05 11:11:11'
          }
        ],
        uploadWindowVisible: false,
        uploadAction: '',
        fileList: [],
        form: {
          name: ''
        }
      }
    },
    methods: {
      showUploadWindow () {
        this.uploadWindowVisible = true
      },
      handleClose () {
        this.uploadWindowVisible = false
      },
      onSubmit () {
        console.log('submit!')
      },
      handleChange (file, fileList) {
        if (fileList.length > 1) {
          this.$refs.upload.clearFiles()
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
