<template>
  <div class="singer-item-wrapper">
    <div class="singer-item">
      <a :href="data.href">
        <img src="./image/1.jpg" alt="">
      </a>
      <h4 class="singer-name">
        <a :href="data.href">{{ data.name }}</a>
      </h4>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        data: {
          name: '许嵩',
          href: 'javascript:;'
        }
      }
    },
    props: {
//      data: {
//        type: 'Array'
//      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .singer-item-wrapper
    padding: 20px 10px 0 10px
    .singer-item
      box-sizing: border-box
      width: 220px
      height: 240px
      padding: 40px
      background: #fbfbfb
      transition: all 0.3s
      img
        height: 140px
        width: 140px
        border-radius: 70px
      .singer-name
        margin: 10px 0 0 0
        padding: 0
        width: 140px
        text-align: center
        a
          color: #133131
          font-size: 14px
          font-weight: 400
</style>
