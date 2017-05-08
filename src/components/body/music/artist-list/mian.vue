<template>
  <div class="artist-list">
    <fd-tags-group :data="tags" @change-active="changeActive"></fd-tags-group>
    <div class="artist-list-singers">
      <fd-singer-item v-for="(item,index) in data" :data="item" :key="index"></fd-singer-item>
    </div>
    <div class="artist-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20,30,40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/babel">
  import TagsGroup from '../components/tags-group.vue'
  import SingerItem from '../components/singer-item.vue'
  import HomeBox2 from '../components/home-box-2.vue'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        tags: [
          ['全部', '华语男', '华语女', '华语组合', '日韩男', '日韩女', '日韩组合', '欧美男', '欧美女', '欧美组合', '其他'],
          ['热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        ],
        currentPage: 1,
        data: []
      }
    },
    mounted () {
      let that = this
      this.artists.then(function (data) {
        that.data = data
      })
    },
    components: {
      'fd-tags-group': TagsGroup,
      'fd-singer-item': SingerItem,
      'fd-home-box-2': HomeBox2
    },
    computed: {
      ...mapGetters({
        artists: 'getArtists'
      })
    },
    methods: {
      changeActive (message) {
        console.log(message)
      },
      handleSizeChange () {
      },
      handleCurrentChange () {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .artist-list-singers
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    width: 1200px
    margin: 0 auto

  .artist-pagination
    .el-pagination
      display: flex
      justify-content: center
      align-items: center
      height: 100px
      .el-pagination__total
        margin: 0 30px
      .el-pagination__sizes
        margin: 0 30px
      .btn-prev
        margin: 0 0 0 30px
      .el-pager
        margin: 0 0 0 0
      .btn-next
        margin: 0 30px 0 0
      .el-pagination__jump
        margin: 0 30px
</style>
