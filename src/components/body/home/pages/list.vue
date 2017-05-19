<template>
  <div class="home-list">
    <div class="home-list-add">
      <el-button @click="addDialog = true">新建歌单</el-button>
    </div>
    <el-table
      :data="listData"
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
        label="公开"
        width="180">
        <template scope="scope">
          <el-switch
            v-model="scope.row.my_list_open"
            @change="handleToggle(scope.row)"
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
      class="dialog-delete"
      v-if="deleteIndex !== -1"
      title="警告"
      :visible.sync="deleteDialog"
      size="tiny"
      :before-close="deleteClose">
      <span>确定要删除《{{listData[deleteIndex].my_list_name}}》歌单？删除后不可恢复</span>
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
      <div class="songs-item-header">{{ listData[lookIndex].my_list_name }}</div>
      <div class="songs-item-des">
        <span class="s-h">作者:</span><span class="s-d">{{ listData[lookIndex].my_list_user_name }}</span>
        <span class="s-h">曲目数:</span><span class="s-d">{{ listData[lookIndex].my_list_count }}</span>
      </div>
      <el-table
        :data="listData[lookIndex].music"
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
            <a :href="scope.row.upload_music_file_url" target="_blank" style="margin-right: 10px">查看</a>
            <el-button type="text" @click="openDeleteSongWindow(scope.row)">删除</el-button>
            <!-- 站内音乐才可以播放和下载 -->
            <el-button v-if="scope.row.from_self === '1'" type="text">播放</el-button>
            <el-button v-if="scope.row.from_self === '1'" type="text">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleLook">确 定</el-button>
        <el-button @click="lookDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="dialog-add"
      title="新建歌单"
      :visible.sync="addDialog"
      size="tiny"
      :before-close="addClose">
      <el-row>
        <el-col :span="4" style="line-height: 35px">歌单名</el-col>
        <el-col :span="20">
          <el-input v-model="name"></el-input>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <span slot="footer">
        <el-button type="primary" @click="newList">确定创建</el-button>
        <el-button @click="addDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="删除歌曲"
      size="tiny"
      :visible.sync="deleteSongDialog"
      :before-close="deleteSongClose">
      确定删除?
      <span slot="footer">
        <el-button type="primary" @click="handleDeleteSong">确定删除</el-button>
        <el-button @click="deleteSongDialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        listData: [],
        lookIndex: -1,
        deleteIndex: -1,
        deleteSongIndex: -1,
        deleteDialog: false,
        lookDialog: false,
        addDialog: false,
        deleteSongDialog: false,
        name: ''
      }
    },
    mounted () {
      this.listData = this.$_.cloneDeep(this.mySongs)
      for (let i = 0; i < this.listData.length; i++) {
        this.listData[i].my_list_open = !!parseInt(this.listData[i].my_list_open)
      }
    },
    watch: {
      mySongs (val) {
        this.listData = this.$_.cloneDeep(this.mySongs)
        for (let i = 0; i < this.listData.length; i++) {
          this.listData[i].my_list_open = !!parseInt(this.listData[i].my_list_open)
        }
      }
    },
    computed: {
      ...mapState([
        'mySongs'
      ])
    },
    methods: {
      handleToggle (row) {
        this.$store.commit('toggleMysongs', row)
      },
      newList () {
        let that = this
        this.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/create/musiclist',
          params: {
            my_list_name: that.name,
            user_name: that.$store.state.userData.user_name
          }
        }).then(function (res) {
//          that.$store.commit('addMySongs', {
//            my_list_name: that.name,
//            my_list_user_name: that.$store.state.userData.user_name
//          })
          that.$store.commit('LOGIN', {
            username: that.$store.state.userData.user_name,
            password: that.$store.state.userData.user_password
          })
          that.$message('创建成功')
        }).catch(function (err) {
          console.log(err)
          that.$message.error('创建失败')
        })
        that.addDialog = false
      },
      // 查看
      openLookWindow (row) {
        // 刷新数据
        this.lookIndex = this.listData.indexOf(row)
        this.lookDialog = true
      },
      handleLook () {
        this.lookDialog = false
      },
      lookClose () {
        this.lookDialog = false
      },
      // 删除
      openDeleteWindow (row) {
        // 删除并关闭dialog
        this.deleteIndex = this.listData.indexOf(row)
        this.deleteDialog = true
      },
      deleteClose () {
        this.deleteDialog = false
      },
      handleDelete () {
        let that = this
        this.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/delete/musiclist',
          params: {
            id: that.listData[that.deleteIndex].my_list_id
          }
        }).then(function (res) {
          that.$message('删除成功')
          that.$store.commit('LOGIN', {
            username: that.$store.state.userData.user_name,
            password: that.$store.state.userData.user_password
          })
          that.deleteIndex = -1
          console.log(res)
        }).catch(function (err) {
          that.$message.error('删除失败')
          console.log(err)
        })
        this.deleteDialog = false
      },
      // 删除单曲
      openDeleteSongWindow (row) {
        this.deleteSongIndex = this.listData[this.lookIndex].music.indexOf(row)
        this.deleteSongDialog = true
      },
      deleteSongClose () {
        this.deleteSongDialog = false
      },
      handleDeleteSong () {
        let that = this
        let i = that.lookIndex
        let j = that.deleteSongIndex
        that.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/delete/upload',
          params: {
            id: that.listData[that.lookIndex].music[that.deleteSongIndex].upload_id
          }
        }).then(function (res) {
          console.log(res)
          that.$store.commit('deleteListItem', {
            i, j
          })
          that.$message('删除成功')
        }).catch(function (err) {
          console.log(err)
          that.$message.error('删除失败')
        })
        that.deleteSongDialog = false
      },
      addClose () {
        this.addDialog = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-dialog__wrapper
    .el-dialog
      .el-dialog__header
        padding: 10px 20px
        background: linear-gradient(180deg, #353535, #1a1919)
        border-bottom: solid 3px #ff0000
        font-size: 12px
        .el-dialog__title
          color: #cccccc

  .home-list
    .home-list-add
      padding: 20px 0
    .dialog-look
      .el-dialog
        .el-dialog__body
          .songs-item-header
            text-align: center
            color: #000000
            font-size: 20px
            font-weight: 600
          .songs-item-des
            padding-bottom: 20px
            font-size: 14px
            .s-h
              font-weight: 600
            .s-d
              font-weight: 400
              padding-right: 10px
</style>
