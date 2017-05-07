<template>
  <div class="home-list">
    <el-table
      :data="listData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="歌单">
      </el-table-column>
      <el-table-column
        prop="count"
        label="曲目数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="love"
        label="收藏"
        width="180">
      </el-table-column>
      <el-table-column
        label="公开"
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
        label="操作"
        width="180">
        <template scope="scope">
          <el-button type="text" size="small">查看</el-button>
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
        listData: [
          {
            name: '我喜欢的',
            count: 5,
            open: true,
            author: 'LitCigar',
            love: 10
          },
          {
            name: '我喜欢的',
            count: 5,
            open: false,
            author: 'LitCigar',
            love: 10
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
