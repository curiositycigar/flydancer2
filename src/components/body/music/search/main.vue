<template>
  <div class="music-search">
    <div class="search-fields">
      <el-input
        autofocus
        placeholder="输入内容进行搜索"
        icon="search"
        v-model="search"
        :on-icon-click="handleSearch">
      </el-input>
      <el-row class="search-filter">
        <el-col :span="4" :offset="4">过滤条件:</el-col>
        <el-col :span="14">
          <el-radio-group v-model="filterCurrent">
            <el-radio label="songs">音乐</el-radio>
            <el-radio label="artists">歌手</el-radio>
            <el-radio label="albums">专辑</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20" class="search-result">
      <el-col :span="8">
        <el-table
          :data="wangyi[filterCurrent]"
          style="width: 100%">
          <el-table-column
            :label="`网易云音乐:${label}`">
            <template scope="scope">
              <div class="search-result-songs" v-if="filterCurrent === 'songs'">
                <a class="search-result-songs-song" :href="`http://music.163.com/song/${scope.row.id}`" target="_blank">
                  {{ scope.row.name }}
                </a>
                <span class="search-result-songs-artists">
                  <a v-for="item in scope.row.artists" class="search-result-songs-artist"
                     :href="`http://music.163.com/artist/${item.id}`" target="_blank">
                    {{ item.name }}
                  </a>
                </span>
              </div>
              <div v-if="filterCurrent === 'artists'" class="search-result-artists">
                <img class="search-result-artists-pic" :src="scope.row.picUrl" alt="">
                <a :href="`http://music.163.com/artist/${scope.row.id}`" class="search-result-artists-artist"
                   target="_blank">
                  {{ scope.row.name }}
                </a>
              </div>
              <div class="search-result-albums" v-if="filterCurrent === 'albums'">
                <img class="search-result-albums-pic" :src="scope.row.blurPicUrl" alt="">
                <a :href="`http://music.163.com/album/${scope.row.id}`" class="search-result-albums-album"
                   target="_blank">
                  {{ scope.row.name }}
                </a>
                <a :href="`http://music.163.com/artist/${scope.row.artist.id}`" class="search-result-albums-artist"
                   target="_blank">
                  {{ scope.row.artist.name }}
                </a>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <el-table
          :data="baidu[filterCurrent]"
          style="width: 100%">
          <el-table-column
            prop="music_album"
            :label="`百度音乐:${label}`">
            <template scope="scope">
              <div class="search-result-songs" v-if="filterCurrent === 'songs'">
                <a class="search-result-songs-song" :href="`http://music.baidu.com/song/${scope.row.songid}`"
                   target="_blank">
                  {{ scope.row.songname }}
                </a>
                <span class="search-result-songs-artists">
                  <a class="search-result-songs-artist"
                     href="javascript:;" target="_blank">
                    {{ scope.row.artistname }}
                  </a>
                </span>
              </div>
              <div v-if="filterCurrent === 'artists'" class="search-result-artists">
                <img class="search-result-artists-pic" :src="scope.row.artistpic" alt="">
                <a :href="`http://music.baidu.com/artist/${scope.row.artistid}`" class="search-result-artists-artist"
                   target="_blank">
                  {{ scope.row.artistname }}
                </a>
              </div>
              <div class="search-result-albums" v-if="filterCurrent === 'albums'">
                <img class="search-result-albums-pic" :src="scope.row.artistpic" alt="">
                <a :href="`http://music.baidu.com/album/${scope.row.albumid}`" class="search-result-albums-album"
                   target="_blank">
                  {{ scope.row.albumname }}
                </a>
                <a href="javascript:;" class="search-result-albums-artist" target="_blank">
                  {{ scope.row.artistname }}
                </a>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <el-table
          :data="kugou[filterCurrent]"
          style="width: 100%">
          <el-table-column
            prop="music_album"
            :label="`酷狗音乐:${label}`">
            <template scope="scope">
              <div class="search-result-songs" v-if="filterCurrent === 'songs'">
                <a class="search-result-songs-song" :href="`http://music.baidu.com/song/${scope.row.hash}`"
                   target="_blank">
                  {{ scope.row.filename }}
                </a>
                <span class="search-result-songs-artists">
                  <a class="search-result-songs-artist"
                     href="javascript:;" target="_blank">
                    {{ scope.row.singername }}
                  </a>
                </span>
              </div>
              <!--<div v-if="filterCurrent === 'artists'" class="search-result-artists">-->
              <!--<img class="search-result-artists-pic" :src="scope.row.artistpic" alt="">-->
              <!--<a :href="`http://music.baidu.com/artist/${scope.row.artistid}`" class="search-result-artists-artist"-->
              <!--target="_blank">-->
              <!--{{ scope.row.artistname }}-->
              <!--</a>-->
              <!--</div>-->
              <div class="search-result-albums" v-if="filterCurrent === 'albums'">
                <img class="search-result-albums-pic" :src="scope.row.imgurl" alt="">
                <a :href="`http://music.baidu.com/album/${scope.row.albumid}`" class="search-result-albums-album"
                   target="_blank">
                  {{ scope.row.albumname }}
                </a>
                <a href="javascript:;" class="search-result-albums-artist" target="_blank">
                  {{ scope.row.singername }}
                </a>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        search: '',
        wangyi: {
          songs: [],
          artists: [],
          albums: []
        },
        kugou: {
          songs: [],
          artists: [],
          albums: []
        },
        baidu: {
          songs: [],
          artists: [],
          albums: []
        },
        label: '音乐',
        // songs artists albums
        filterCurrent: 'songs',
        searchFieldsHeight: 400
      }
    },
    mounted () {
    },
    watch: {
      filterCurrent (val, oldVal) {
        if (val === 'songs') {
          this.label = '音乐'
        } else if (val === 'artists') {
          this.label = ' 歌手'
        } else {
          this.label = '专辑'
        }
      }
    },
    methods: {
      handleSearch () {
        let that = this
        let url = {
          songs: {
            wangyi: 'http://222.24.63.118/search/api/wangyiyunmusic/',
            baidu: 'http://222.24.63.118/search/api/baidu/',
            kugou: 'http://222.24.63.118/search/api/kugoumusic/'
          },
          artists: {
            wangyi: 'http://222.24.63.118/search/api/wangyiyunsinger/',
            baidu: 'http://222.24.63.118/search/api/baidu/',
            kugou: 'http://222.24.63.118/search/api/kugoumusic/'
          },
          albums: {
            wangyi: 'http://222.24.63.118/search/api/wangyiyunalbum/',
            baidu: 'http://222.24.63.118/search/api/baidu/',
            kugou: 'http://222.24.63.118/search/api/kugoualbum/'
          }
        }
        this.$http.get(url[that.filterCurrent].wangyi + this.search).then(function (res) {
          if (res.status === 200) {
            if (res.data.code === 200) {
              that.wangyi[that.filterCurrent] = res.data.result[that.filterCurrent]
            }
          }
        })
        this.$http.get(url[that.filterCurrent].baidu + this.search).then(function (res) {
          if (res.status === 200) {
            console.log(res.data[that.filterCurrent.substring(0, that.filterCurrent.length - 1)])
            that.baidu[that.filterCurrent] = res.data[that.filterCurrent.substring(0, that.filterCurrent.length - 1)]
          }
        })
        if (that.filterCurrent !== 'artists') {
          this.$http.get(url[that.filterCurrent].kugou + this.search).then(function (res) {
            if (res.status === 200) {
              if (res.data.status === 1) {
                that.kugou[that.filterCurrent] = res.data.data.info
              }
            }
          })
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .music-search
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    margin: 30px 0
    .search-fields
      width: 500px
      padding: 20px
      .el-input
        input
          border-radius: 0
          border-width: 0 0 3px 0
          border-color: #cccccc
          &:focus
            border-color: #ea1717
      .search-filter
        margin: 20px 0
        font-size: 14px
        color: #55a532
    .search-result
      width: 1200px
      .el-col
        .el-table
          border-color: transparent
          &:before
            background-color: transparent
          &:after
            background-color: transparent
          .el-table__header-wrapper
            th
              background: transparent
              border-bottom: solid 2px #55a532
              & > div
                background: transparent
          .el-table__body-wrapper
            .cell
              a
                cursor: pointer
              .search-result-songs
                display: flex
                align-items: center
                justify-content: space-between
                height: 100%
                a
                  color: #333333
                span
                  a
                    margin-left: 10px
                    color: #55a532
              .search-result-artists
                display: flex
                align-items: center
                justify-content: flex-start
                height: 100%
                img
                  width: 30px
                  height: 30px
                  margin-right: 20px
                a
                  color: #55a532
              .search-result-albums
                display: flex
                align-items: center
                justify-content: space-between
                height: 100%
                img
                  width: 30px
                  height: 30px
                  margin-right: 20px
                a
                  color: #969896
</style>
