<template>
  <div class="top-list-section">
    <h2>巅峰榜:热歌</h2>
    <div class="top-list-section-operation">
      <a href="javascript:;">播放全部</a>
      <a href="javascript:;">添加到</a>
      <a href="javascript:;">下载</a>
      <a href="javascript:;">批量操作</a>
    </div>
    <div>
      <fd-song-table :data="data" :title="title"></fd-song-table>
    </div>
  </div>
</template>

<script type="text/babel">
  import SongItem from '../components/song-table.vue'
  export default {
    data () {
      return {}
    },
    components: {
      'fd-song-table': SongItem
    },
    props: {
      data: {
        type: Array
      },
      title: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-list-section
    box-sizing: border-box
    width: 100%
    padding-left: 40px
    h2
      padding: 20px 0
      font-size: 24px
      font-weight: 400
    .top-list-section-operation
      a
        display: inline-block
        height: 25px
        line-height: 25px
        padding: 5px 15px
        margin: 10px 10px 10px 0
        border: solid 1px #ff9494
        border-radius: 3px
        font-size: 14px
        color: #133131
        &:hover
          color: #ff9494
        &:active
          background: #ff9494
          color: #ffffff
</style>
