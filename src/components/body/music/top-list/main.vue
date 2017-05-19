<template>
  <div class="top-list">
    <div class="top-list-wrapper">
      <div v-for="(item, index) in lists" class="top-list-item" :key="index">
        <div class="top-list-name"><i class="el-icon-menu" style="padding-right: 10px; color: #c10d0c;"></i>{{ item.name
          }}
        </div>
        <el-row class="top-list-platform" :gutter="20">
          <el-col v-for="(platform, index) in item.platforms" :span="8" :key="index">
            <div class="platform-header">{{ platform.name }}</div>
            <div class="platform-body">
              <el-table
                v-loading.body="platform.menu.loading"
                :data="platform.data"
                style="width: 100%">
                <el-table-column
                  type="index"
                  label="排行"
                  width="80">
                </el-table-column>
                <el-table-column
                  label="歌名">
                  <template scope="scope">
                    <a target="_blank" :href="scope.row.music_url">
                      {{ scope.row.music_name }}
                    </a>
                  </template>
                </el-table-column>
                <el-table-column
                  v-if="platform.menu.artist"
                  label="歌手"
                  width="100">
                  <template scope="scope">
                    <a target="_blank" :href="scope.row.music_artist_url">
                      {{ scope.row.music_artist }}
                    </a>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="70">
                  <template scope="scope">
                    <el-button type="text" @click="handleCollection(scope.row)">收藏</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog
      title="请选择歌单"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.my_list_id"
          :label="item.my_list_name"
          :value="item.my_list_id">
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
  import {mapMutations, mapState} from 'vuex'
  import api from './api'
  export default {
    components: {},
    data () {
      let data = []
      Object.assign(data, api)
      return {
        lists: data,
        dialogVisible: false,
        value: '',
        sendData: {},
        options: []
      }
    },
    created () {
      let config = {
        Origin: 'http://222.24.63.118'
      }
      let that = this
      let data = []
      Object.assign(data, api)
      data.forEach(function (item) {
        item.platforms.forEach(function (item) {
          that.$http.get(item.url, config).then(function (res) {
            let data = res.data
            item.menu.loading = false
            item.data = data.data
          })
        })
      })
      if (this.$store.state.login) {
        let that = this
        let list = this.$store.state.mySongs
        that.options = list.map(function (item) {
          return {
            my_list_id: item.my_list_id,
            my_list_name: item.my_list_name
          }
        })
      }
      this.lists = data
    },
    computed: {
      ...mapState({
        my_list: 'mySongs'
      })
    },
    watch: {
      my_list () {
        let that = this
        let list = this.$store.state.mySongs
        that.options = list.map(function (item) {
          return {
            my_list_id: item.my_list_id,
            my_list_name: item.my_list_name
          }
        })
      }
    },
    methods: {
      handlerChange (query) {
        console.log(query)
      },
      ...mapMutations({
        collection: 'collectionOutside'
      }),
      handleCollection (row) {
        if (this.$store.state.login) {
          this.dialogVisible = true
          // 收藏操作
          this.sendData.upload_music_name = row.music_name
          this.sendData.upload_user_name = row.music_artist ? row.music_artist : '未知'
          this.sendData.upload_music_file_url = row.music_url
          this.sendData.from_self = '0'
          this.sendData.user_name = this.$store.state.userData.user_name
        } else {
          this.$message.error('请登录')
        }
      },
      submit () {
        let that = this
        if (this.value !== '') {
          this.sendData.my_list_id = this.value
          this.collection({
            message: that.$message,
            data: this.sendData
          })
          this.dialogVisible = false
        } else {
          this.$message.error('请选择歌单!')
        }
      },
      handleClose () {
        this.dialogVisible = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-list
    width: 1200px
    padding: 30px 0
    margin: 0 auto
    .top-list-wrapper
      .top-list-item
        .top-list-name
          height: 40px
          line-height: 40px
          padding-left: 10px
          font-size: 20px
          font-weight: 500
          border-bottom: solid 2px #c10d0c
        .top-list-platform
          .platform-header
            height: 30px
            line-height: 30px
            padding-top: 20px
            font-size: 14px
            border-bottom: solid 1px #cccccc
    .el-dialog
      .el-dialog__body
        display: flex
        justify-content: center

</style>
