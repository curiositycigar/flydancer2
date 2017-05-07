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
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import api from './api'
  export default {
    components: {},
    data () {
      let data = []
      Object.assign(data, api)
      return {
        lists: data
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
      this.lists = data
    },
    methods: {
      handlerChange (query) {
        console.log(query)
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

</style>
