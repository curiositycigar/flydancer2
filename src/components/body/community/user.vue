<template>
  <div class="community-user">
    <div class="community-user-header">
      <div class="community-user-avatar">
        <img :src="data.user_info[0].user_avatar" alt="">
      </div>
      <div class="community-user-info">
        <div>
          <span class="c-h">关注:</span>
          <span class="c-d">{{ data.user_info[0].follow_count }}</span><br>
        </div>
        <div>
          <span class="c-h">粉丝:</span>
          <span class="c-d">{{ data.user_info[0].fans_count }}</span><br>
        </div>
        <div>
          <span class="c-h">歌单数:</span>
          <span class="c-d">{{ data.user_info[0].list_count }}</span><br>
        </div>
      </div>
    </div>
    <div class="community-user-body">
      <div class="community-user-item">
        <div class="community-user-item-header">
          歌单
        </div>
        <div class="community-user-item-body">
          <el-table
            :data="data.my_music_list"
            style="width: 100%">
            <el-table-column
              prop="my_list_name"
              label="歌单名">
            </el-table-column>
            <el-table-column
              prop="my_list_user_name"
              label="创建者"
              width="180">
            </el-table-column>
            <el-table-column
              prop="my_list_count"
              label="歌曲数"
              width="120">
            </el-table-column>
            <el-table-column
              prop="create_date"
              width="200"
              label="创建日期">
            </el-table-column>
            <el-table-column
              prop="collection"
              width="120"
              label="收藏数">
            </el-table-column>
            <el-table-column
              width="120"
              label="操作">
              <template scope="scope">
                <el-button type="text" @click="openLookWindow(scope.row)">查看</el-button>
                <el-button type="text">收藏</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="community-user-item">
        <div class="community-user-item-header">
          上传歌曲
        </div>
        <div class="community-user-item-body">
          <el-table
            :data="data.upload_info"
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
            <el-table-column
              prop="upload_date"
              width="200"
              label="上传日期">
            </el-table-column>
            <el-table-column
              width="120"
              label="操作">
              <template scope="scope">
                <el-button type="text">查看</el-button>
                <el-button type="text" @click="handleCollection(scope.row)">收藏</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog
      class="dialog-look"
      v-if="lookIndex !== -1"
      title="歌单"
      :visible.sync="lookDialog"
      :before-close="lookClose">
      <div class="songs-item-header">{{ data.my_music_list[lookIndex].my_list_name }}</div>
      <div class="songs-item-des">
        <span class="s-h">作者:</span><span class="s-d">{{ data.my_music_list[lookIndex].my_list_user_name }}</span>
        <span class="s-h">曲目数:</span><span class="s-d">{{ data.my_music_list[lookIndex].my_list_count }}</span>
      </div>
      <el-table
        :data="data.my_music_list[lookIndex].music"
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
  export default {
    data () {
      return {
        data: {},
        lookIndex: -1,
        lookDialog: false
      }
    },
    created () {
      let that = this
      console.log(this.$route.params.id)
      this.$http.get('http://222.24.63.118/v3/userinfo/' + this.$route.params.id).then(function (res) {
        that.data = Object.assign({}, res.data)
        console.log(that.data)
      }).catch(function (err) {
        console.log(err)
      })
      console.log(this.$store.state.login)
    },
    methods: {
      openLookWindow (row) {
        // 刷新数据
        this.lookIndex = this.data.my_music_list.indexOf(row)
        this.lookDialog = true
        console.log(this.data)
      },
      handleLook () {
        this.lookDialog = false
      },
      lookClose () {
        this.lookDialog = false
      },
      handleCollection (row) {
        let that = this
        if (this.$store.state.login) {
          this.$http({
            method: 'post',
            url: 'http://222.24.63.118/post/create/collection',
            params: {
              user_name: that.$store.state.userData.user_name,
              my_list_id: row.upload_id
            }
          }).then(function (res) {
            that.$message('收藏成功')
            that.$store.commit('LOGIN', {
              username: that.$store.state.userData.user_name,
              password: that.$store.state.userData.user_password
            })
          }).catch(function (err) {
            that.$message.error('收藏失败')
            console.log(err)
          })
        } else {
          this.$message.error('请登录')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .community-user
    width: 1200px
    margin: 0 auto
    padding: 30px 0
    .community-user-header
      display: flex
      justify-content: flex-start
      height: 100px
      padding: 20px
      background: #ffffff
      border: solid 1px #cccccc
      .community-user-avatar
        box-sizing: border-box
        width: 100px
        height: 100px
        border-radius: 50px
        overflow: hidden
        border: solid 1px #55a532
        margin-right: 100px
        img
          width: 100%
          height: 100%
      .community-user-info
        height: 100px
        display; flex
        flex-direction: column
        justify-content: center
        & > div
          height: 30px
          line-height: 30px
        .c-h
          color: #000000
          font-weight: 600
        .c-d
          color: #333333

    .community-user-body
      .community-user-item
        .community-user-item-header
          height: 50px
          line-height: 50px
          border-bottom: solid 2px #55a532
          font-size: 14px
          font-weight: 600

  .cell
    text-overflow: ellipsis
</style>
