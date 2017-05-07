<template>
  <div class="artist">
    <div class="artist-header">
      <div class="artist-header-left">
        <img src="./artist.jpg" alt="">
      </div>
      <div class="artist-header-right">
        <div class="artist-name">林俊杰</div>
        <div class="artist-data">
          <span class="h">单曲:</span><span class="d">253</span>
          <span class="h">专辑:</span><span class="d">253</span>
        </div>
        <div class="artist-btn">
          <el-button>播放全部歌曲</el-button>
          <el-button>关注 <span class="artist-follows">123213人</span></el-button>
        </div>
      </div>
    </div>
    <div class="artist-body">
      <div class="artist-songs">

      </div>
      <div class="artist-des"></div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
        >div
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
</style>
