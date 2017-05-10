<template>
  <div class="home-love">
    <el-table
      :data="loveData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="my_list_name"
        label="歌单">
      </el-table-column>
      <el-table-column
        prop="my_list_count"
        label="曲目数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="my_list_user_name"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="love"
        label="收藏"
        width="180">
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
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        loveData: []
      }
    },
    mounted () {
      this.loveData = Object.assign({}, this.collection)
      for (let i = 0; i < this.loveData.length; i++) {
        this.loveData[i] = Object.assign(this.loveData[i], this.loveData[i].collection_list[0])
      }
      console.log(this.loveData[0])
    },
    computed: {
      ...mapState([
        'collection'
      ])
    },
    method: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
