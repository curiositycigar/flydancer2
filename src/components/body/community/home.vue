<template>
  <div class="community">
    <div class="community-body">
      <!-- 收藏最多(歌单) -->
      <div class="community-item hot">
        <div class="community-item-header">
          最热歌单
        </div>
        <div class="community-item-body">
          <el-table
            v-loading.body="loading.a"
            :data="hot"
            style="width: 100%">
            <el-table-column
              prop="my_list_name"
              label="歌单名">
            </el-table-column>
            <el-table-column
              label="创建者"
              width="180">
              <template scope="scope">
                <router-link :to="`/community/user/${scope.row.my_list_user_name}`">{{ scope.row.my_list_user_name }}
                </router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="my_list_count"
              label="歌曲数"
              width="120">
            </el-table-column>
            <el-table-column
              width="200"
              label="创建日期">
              <template scope="scope">
                {{ scope.row.create_date.replace('.000000','') }}
              </template>
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
                <el-button type="text" @click="openLookWindow(scope.row, 'hot')">查看
                </el-button>
                <el-button v-if="notCollectionList(scope.row)" type="text" @click="collectionList(scope.row)">收藏
                </el-button>
                <el-button type="text" v-else>已收藏</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 最新发布(歌曲) -->
      <div class="community-item new">
        <div class="community-item-header">
          最新歌单
        </div>
        <div class="community-item-body">
          <el-table
            v-loading.body="loading.b"
            :data="newlist"
            style="width: 100%">
            <el-table-column
              prop="my_list_name"
              label="歌单名">
            </el-table-column>
            <el-table-column
              label="创建者"
              width="180">
              <template scope="scope">
                <router-link :to="`/community/user/${scope.row.my_list_user_name}`">{{ scope.row.my_list_user_name }}
                </router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="my_list_count"
              label="歌曲数"
              width="120">
            </el-table-column>
            <el-table-column
              width="200"
              label="创建日期">
              <template scope="scope">
                {{ scope.row.create_date.replace('.000000','') }}
              </template>
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
                <el-button type="text" @click="openLookWindow(scope.row, 'newlist')">查看
                </el-button>
                <el-button v-if="notCollectionList(scope.row)" type="text" @click="collectionList(scope.row)">收藏
                </el-button>
                <el-button type="text" v-else>已收藏</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 按粉丝数排行(用户) -->
      <div class="community-item fans">
        <div class="community-item-header">
          用户排行
        </div>
        <div class="community-item-body">
          <el-table
            v-loading.body="loading.c"
            :data="user"
            style="width: 100%">
            <el-table-column
              label="用户名">
              <template scope="scope">
                <router-link :to="`/community/user/${scope.row.user_name}`">{{ scope.row.user_name }}</router-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="list_count"
              label="歌单数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="fans_count"
              label="粉丝数"
              width="180">
            </el-table-column>
            <el-table-column
              prop="follow_count"
              label="关注数"
              width="180">
            </el-table-column>
            <el-table-column
              width="180"
              label="操作">
              <template scope="scope">
                <router-link v-if="scope.row.user_name !== $store.state.userData.user_name" :to="`/community/user/${scope.row.user_name}`">查看</router-link>
                <router-link v-if="scope.row.user_name === $store.state.userData.user_name" :to="`/home/me`">查看</router-link>
                <el-button v-if="notFollow(scope.row) && scope.row.user_name !== $store.state.userData.user_name" type="text" @click="onFollow(scope.row)">关注</el-button>
                <el-button v-if="!notFollow(scope.row)" type="text" @click="onCancelFollow(scope.row)">取消关注</el-button>
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
      <div class="songs-item-header">{{ list[lookIndex].my_list_name }}</div>
      <div class="songs-item-des">
        <span class="s-h">作者:</span><span class="s-d">{{ list[lookIndex].my_list_user_name }}</span>
        <span class="s-h">曲目数:</span><span class="s-d">{{ list[lookIndex].my_list_count }}</span>
      </div>
      <el-table
        :data="list[lookIndex].music"
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
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        hot: [],
        newlist: [],
        user: [],
        lookIndex: -1,
        lookDialog: false,
        list: [],
        loading: {
          a: true,
          b: true,
          c: true
        }
      }
    },
    created () {
      let that = this
      this.$http.get('http://222.24.63.118/v3/hotlist').then(function (res) {
        console.log('hot', res)
        that.hot = res.data.my_music_list
        that.loading.a = false
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get('http://222.24.63.118/v3/newlist').then(function (res) {
        console.log('new', res)
        that.newlist = res.data.my_music_list
        that.loading.b = false
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get('http://222.24.63.118/v3/popularuser').then(function (res) {
        console.log('user', res)
        that.user = res.data.userlist
        that.loading.c = false
      }).catch(function (err) {
        console.log(err)
      })
    },
    computed: {},
    methods: {
      ...mapMutations({
        collection: 'collectionInside',
        refresh: 'LOGIN'
      }),
      refreshC () {
        let that = this
        this.$http.get('http://222.24.63.118/v3/hotlist').then(function (res) {
          console.log('hot', res)
          that.hot = res.data.my_music_list
          that.loading.a = false
        }).catch(function (err) {
          console.log(err)
        })
        this.$http.get('http://222.24.63.118/v3/newlist').then(function (res) {
          console.log('new', res)
          that.newlist = res.data.my_music_list
          that.loading.b = false
        }).catch(function (err) {
          console.log(err)
        })
        this.$http.get('http://222.24.63.118/v3/popularuser').then(function (res) {
          console.log('user', res)
          that.user = res.data.userlist
          that.loading.c = false
        }).catch(function (err) {
          console.log(err)
        })
      },
      notFollow (row) {
        let follows = this.$store.state.follow
        if (follows) {
          for (let i = 0; i < follows.length; i++) {
            if (follows[i].user_name === row.user_name) {
              return false
            }
          }
        }
        return true
      },
      onFollow (row) {
        let that = this
        if (this.$store.state.login) {
          that.$http({
            method: 'post',
            url: 'http://222.24.63.118/post/create/follow',
            params: {
              user_name: that.$store.state.userData.user_name,
              follow_user_name: row.user_name
            }
          }).then(function (res) {
            that.$message('关注成功')
            that.refresh({
              username: that.$store.state.userData.user_name,
              password: that.$store.state.userData.user_password
            })
            that.refreshC()
            console.log(res)
          }).catch(function (err) {
            that.$message.error('关注失败')
            console.log(err)
          })
        } else {
          that.$message.error('请登录')
        }
      },
      onCancelFollow (row) {
        let that = this
        if (this.$store.state.login) {
          that.$http({
            method: 'post',
            url: 'http://222.24.63.118/post/delete/follow',
            params: {
              user_name: that.$store.state.userData.user_name,
              follow_user_name: row.user_name
            }
          }).then(function (res) {
            that.$message('取消关注成功')
            that.refresh({
              username: that.$store.state.userData.user_name,
              password: that.$store.state.userData.user_password
            })
            console.log(res)
          }).catch(function (err) {
            that.$message.error('取消关注失败')
            console.log(err)
          })
        } else {
          that.$message.error('请登录')
        }
      },
      notCollectionList (row) {
        let collectionList = this.$store.state.collection
        if (collectionList) {
          for (let i = 0; i < collectionList.length; i++) {
            if (collectionList[i].my_list_id === row.my_list_id) {
              return false
            }
          }
        }
        return true
      },
      collectionList (row) {
        let that = this
        if (this.$store.state.login) {
          this.$http({
            method: 'post',
            url: 'http://222.24.63.118/post/create/collectionlist',
            params: {
              user_name: this.$store.state.userData.user_name,
              my_list_id: row.my_list_id
            }
          }).then(function (res) {
            console.log(res)
            that.$message('收藏成功')
            that.refresh({
              username: that.$store.state.userData.user_name,
              password: that.$store.state.userData.user_password
            })
            that.refreshC()
          }).catch(function (err) {
            that.$message.error('收藏失败')
            console.log(err)
          })
        } else {
          that.$message.error('请登录')
        }
      },
      openLookWindow (row, value) {
        // 刷新数据
        this.lookIndex = this[value].indexOf(row)
        this.list = this[value]
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
            that.refreshC()
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

<style lang="stylus" rel="stylesheet/stylus">
  .community
    .community-body
      width: 1200px
      margin: 0 auto
      .community-item
        padding: 20px
        flex-grow: 1
        .community-item-header
          height: 35px
          line-height: 35px
          font-size: 16px
          color: #333333
          border-bottom: solid 2px #55a532
        .community-item-body
          .cell
            a
              margin-right: 10px
</style>
