<template>
  <div class="community">
    <div class="redBar"></div>
    <div class="community-body">
      <!-- 收藏最多(歌单) -->
      <div class="community-item hot">
        <div class="community-item-header">
          最热歌单
        </div>
        <div class="community-hot-body"></div>
      </div>
      <!-- 最新发布(歌曲) -->
      <div class="community-item new">
        <div class="community-item-header">
          最新歌单
        </div>
        <div class="community-new-body"></div>
      </div>
      <!-- 按粉丝数排行(用户) -->
      <div class="community-item fans">
        <div class="community-item-header">
          用户排行
        </div>
        <div class="community-fans-body"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .community
    .community-body
      width: 1200px
      margin: 0 auto
      display: flex
      .community-item
        padding: 20px
        flex-grow: 1
        .community-item-header
          height: 35px
          line-height: 35px
          font-size: 16px
          color: #333333
          border-bottom: solid 2px #55a532
</style>
