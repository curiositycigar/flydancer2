<template>
  <div class="artist">
    <div class="artist-header">
      <div class="artist-header-left">
        <img :src="data.singer_pic" alt="">
      </div>
      <div class="artist-header-right">
        <div class="artist-name">{{ data.singer_name }}</div>
        <div class="artist-data">
          <span class="h">单曲:</span><span class="d">{{ song }}</span>
          <span class="h">专辑:</span><span class="d">{{ album }}</span>
        </div>
        <div class="artist-btn">
          <el-button>关注 <span class="artist-follows">123213人</span></el-button>
        </div>
      </div>
    </div>
    <div class="artist-body">
      <div class="artist-songs">
        <div class="artist-songs-header">
          <el-input v-model="search" placeholder="点击并输入内容进行筛选"></el-input>
        </div>
        <div class="artist-songs-body">
          <el-table
            v-loading.body="loading"
            :data="filterArtists"
            style="width: 100%">
            <el-table-column
              type="index"
              label="排行"
              width="100">
            </el-table-column>
            <el-table-column
              label="歌名"
              width="200">
              <template scope="scope">
                <a :href="scope.row.music_url" target="_blank">
                  {{ scope.row.music_name }}
                </a>
              </template>
            </el-table-column>
            <el-table-column
              prop="music_artist"
              label="歌手"
              width="200">
            </el-table-column>
            <el-table-column
              label="MV"
              width="200">
              <template scope="scope">
                <a :href="scope.row.music_mv" target="_blank">
                  {{ scope.row.music_name }}:MV
                </a>
              </template>
            </el-table-column>
            <el-table-column
              prop="music_album"
              label="所属专辑">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        data: {},
        search: '',
        filterArtists: [],
        loading: false,
        song: Math.floor(Math.random() * 100 + 200),
        album: Math.floor(Math.random() * 30 + 20)
      }
    },
    mounted () {
      let that = this
      let id = this.$route.params.id
      let url = 'http://222.24.63.118/v2/api/music/' + this.$route.params.id
      that.$http.get(url).then(function (res) {
        if (res.status === 200) {
          that.data.songs = res.data.data
          that.artists.then(function (data) {
            for (let i = 0; i < data.length; i++) {
              if (data[i].singer_id === id) {
                that.$set(that.data, 'singer_name', data[i].singer_name)
                that.$set(that.data, 'singer_pic', data[i].singer_pic)
                break
              }
            }
            that.filterArtists = that.data.songs.filter(function (item) {
              return item
            })
          })
        }
      })
    },
    watch: {
      search (val, oldVal) {
        let that = this
        let query = val.trim().toLowerCase()
        that.filterArtists = that.data.songs.filter(function (item) {
          if (item.music_name.toLowerCase().indexOf(query) !== -1 || item.music_album.toLowerCase().indexOf(query) !== -1) {
            return item
          }
        })
      }
    },
    computed: {
      ...mapGetters({
        artists: 'getArtists'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .artist
    width: 1200px
    padding: 50px 0
    margin: 0 auto
    .artist-header
      display: flex
      .artist-header-left
        width: 240px
        border-radius: 150px
        overflow: hidden
        img
          width: 100%
          height: 100%
      .artist-header-right
        display: flex
        justify-content: center
        flex-direction: column
        margin-left: 100px
        > div
          height: 50px
          line-height: 50px
        .artist-name
          font-size: 30px
          font-weight: 400
        .artist-data
          .h
            padding-right: 10px
            font-size: 20px
          .d
            padding-right: 30px
            font-size: 20px
        .artist-btn
          .artist-follows
            color: #55a532
    .artist-body
      .artist-songs
        .artist-songs-header
          margin-top: 50px
          font-size: 20px
          .el-input
            input
              border-radius: 0
              border-width: 0 0 3px 0
              border-color: #cccccc
              &:focus
                border-color: #ea1717
</style>
