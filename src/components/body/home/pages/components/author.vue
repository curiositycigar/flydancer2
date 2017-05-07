<template>
  <div class="author-item">
    <div class="author-avatar">
      <img :src="data.src" alt="">
    </div>
    <div class="author-right">
      <div class="author-name">
        <router-link :to="pre + data.id">{{ data.name }}</router-link>
      </div>
      <div class="author-middle">
        <span>歌单:{{ data.lists }}</span><span class="vertical-line">|</span>
        <span>关注:{{ data.follows }}</span><span class="vertical-line">|</span>
        <span>粉丝:{{ data.fans }}</span>
      </div>
      <div class="author-bottom">
        <el-button v-if="data.follow" type="text" class="button">取消关注</el-button>
        <el-button v-if="!data.follow" type="text" class="button">关注</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        pre: '/music/author/'
      }
    },
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .author-item
    display: flex
    width: 48%
    min-width: 300px
    height: 100px
    margin:0 1% 1% 0
    border: solid 1px #cccccc
    .author-avatar
      width: 80px
      height: 80px
      margin: 10px
      overflow: hidden
      img
        width: 100%
        height: 100%
    .author-right
      display: flex
      flex-direction: column
      justify-content: center
      .author-name
        height: 30px
        font-size: 16px
        a
          color: #000000
          &:hover
            color: #63a35c
      .author-middle
        display: flex
        justify-content: center
        align-items: center
        height: 25px
        font-size: 14px
        .vertical-line
          font-size: 12px
          padding: 0 3px
      .author-bottom
        height: 25px
</style>
