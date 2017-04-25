<template>
  <div class="fd-classify-item">
    <div class="img-box">
      <a :href="data.href">
        <img :src="data.src" alt="songImage">
      </a>
    </div>
    <h3><a :href="data.href">{{ data.name }}</a></h3>
    <span class="singer"><a :href="data.singerHref">{{ data.singer }}</a></span>
    <span class="des">{{ data.des }}</span>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
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
  .fd-classify-item
    box-sizing: border-box
    width: 240px
    padding: 10px
    .img-box
      width: 220px
      height: 220px
      overflow: hidden
      img
        width: 100%
        height: 100%
        transition: all 0.3s
        &:hover
          transform: scale(1.1, 1.1)
    h3
      height: 30px
      line-height: 30px
      font-size: 14px
      font-weight: 400
      a
        color: #133131
        &:hover
          color: #ff9494
    span
      display: block
      height: 30px
      line-height: 30px
      color: #499494
      font-size: 12px
      font-weight: 400
      a
        color: #499494
</style>
