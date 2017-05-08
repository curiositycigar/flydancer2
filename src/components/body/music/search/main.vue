<template>
  <div class="music-search">
    <div class="search-fields">
      <el-input
        autofocus
        placeholder="输入歌手名或歌曲名"
        icon="search"
        v-model="search"
        :on-icon-click="handleSearch">
      </el-input>
    </div>
    <el-row class="search-result">
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        search: ''
      }
    },
    methods: {
      handleSearch () {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .music-search
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    .search-fields
      width: 500px
      padding: 20px
      .el-input
        input
          border-radius: 0
          border-width: 0 0 3px 0
          border-color: #cccccc
          &:focus
            border-color: #ea1717
    .search-result
      width: 1200px
</style>
