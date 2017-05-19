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
          <el-button type="text" size="small" @click="openLookWindow(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="openDeleteWindow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      class="dialog-delete"
      v-if="deleteIndex !== -1"
      title="警告"
      :visible.sync="deleteDialog"
      size="tiny"
      :before-close="deleteClose">
      <span>确定要删除《{{loveData[deleteIndex].my_list_name}}》歌单？删除后不可恢复</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDelete">确 定</el-button>
        <el-button @click="deleteDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="dialog-look"
      v-if="lookIndex !== -1"
      title="歌单"
      :visible.sync="lookDialog"
      :before-close="lookClose">
      <div class="songs-item-header">{{ loveData[lookIndex].my_list_name }}</div>
      <div class="songs-item-des">
        <span class="s-h">作者:</span><span class="s-d">{{ loveData[lookIndex].my_list_user_name }}</span>
        <span class="s-h">曲目数:</span><span class="s-d">{{ loveData[lookIndex].my_list_count }}</span>
      </div>
      <el-table
        :data="loveData[lookIndex].music"
        stripe
        style="width: 100%">
        <el-table-column
          prop="upload_music_name"
          label="歌名">
        </el-table-column>
        <el-table-column
          prop="upload_user_name"
          label="歌手/上传者">
        </el-table-column>
        <el-table-column
          label="操作">
          <template scope="scope">
            <a :href="scope.row.upload_music_file_url" target="_blank">查看</a>
            <!-- 站内音乐才可以播放和下载 -->
            <el-button v-if="false" type="text">播放</el-button>
            <el-button v-if="false" type="text">下载</el-button>
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
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        loveData: [],
        lookIndex: -1,
        deleteIndex: -1,
        deleteDialog: false,
        lookDialog: false,
        addDialog: false
      }
    },
    mounted () {
      this.loveData = this.$_.cloneDeep(this.collection)
    },
    computed: {
      ...mapState([
        'collection'
      ])
    },
    watch: {
      collection () {
        this.loveData = this.$_.cloneDeep(this.collection)
      }
    },
    methods: {
      openLookWindow (row) {
        // 刷新数据
        this.lookIndex = this.loveData.indexOf(row)
        this.lookDialog = true
      },
      handleLook () {
        this.lookDialog = false
      },
      openDeleteWindow (row) {
        // 删除并关闭dialog
        this.deleteIndex = this.loveData.indexOf(row)
        this.deleteDialog = true
      },
      handleDelete () {
        let that = this
        this.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/delete/collection',
          params: {
            my_list_id: that.loveData[that.deleteIndex].my_list_id,
            user_name: that.$store.state.userData.user_name
          }
        }).then(function (res) {
          that.$message('删除成功')
          that.$store.commit('LOGIN', {
            username: that.$store.state.userData.user_name,
            password: that.$store.state.userData.user_password
          })
          console.log(res)
        }).catch(function (err) {
          that.$message.error('删除失败')
          console.log(err)
        })
        this.deleteIndex = -1
        this.deleteDialog = false
      },
      deleteClose () {
        this.deleteDialog = false
      },
      lookClose () {
        this.lookDialog = false
      },
      addClose () {
        this.addDialog = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
