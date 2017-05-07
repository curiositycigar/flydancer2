<template>
  <div class="home-upload">
    <div class="upload-btns">
      <el-button>上传新歌</el-button>
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
            date: '2017-05-05 11:11:11'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-upload
    .upload-btns
      padding: 10px 0
</style>
