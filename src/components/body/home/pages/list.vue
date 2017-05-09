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
          <el-button type="text" size="small" @click="openLookWindow(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="openDeleteWindow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="警告"
      :visible.sync="deleteDialog"
      size="tiny"
      :before-close="deleteClose">
      <span>确定要删除此歌单？删除后不可恢复</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDelete">确 定</el-button>
        <el-button @click="deleteDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      v-if="lookIndex !== -1"
      title="歌单"
      :visible.sync="lookDialog"
      :before-close="lookClose">
      <span>{{ listData[lookIndex].name }}</span>
      <span>{{ listData[lookIndex].count }}</span>
      <span>{{ listData[lookIndex].author }}</span>
      <el-table
        :data="listData[lookIndex].songs"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="歌单">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作">
          <template scope="scope">
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleLook">确 定</el-button>
        <el-button @click="lookDialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        listData: [],
        lookIndex: -1,
        deleteIndex: -1,
        deleteDialog: false,
        lookDialog: false
      }
    },
    mounted () {
      let that = this
      that.mySongs.then(function (data) {
        that.listData = data
      })
    },
    watch: {
      mySongs (val) {
        let that = this
        val.then(function (data) {
          that.listData = data
        })
      }
    },
    computed: {
      ...mapGetters({
        mySongs: 'getMySongs'
      })
    },
    methods: {
      openLookWindow (row) {
        // 刷新数据
        this.lookIndex = this.listData.indexOf(row)
        this.lookDialog = true
      },
      openDeleteWindow (row) {
        // 删除并关闭dialog
        this.deleteIndex = this.listData.indexOf(row)
        this.deleteDialog = true
      },
      handleLook () {
        this.lookDialog = false
      },
      handleDelete () {
        this.$store.commit('deleteMySongs', this.lookIndex)
        this.deleteDialog = false
      },
      deleteClose () {
        this.deleteDialog = false
      },
      lookClose () {
        this.lookDialog = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-dialog__wrapper
    .el-dialog
      .el-dialog__header
        border-bottom: solid 1px #000000
</style>
