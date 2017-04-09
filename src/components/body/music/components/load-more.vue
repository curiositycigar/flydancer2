<template>
  <div class="load-more">
    <a href="javascript:;" @click="load()">{{ loadText }}</a>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        loading: false,
        loadText: '加载更多'
      }
    },
    methods: {
      load () {
        if (!this.loading) {
          this.loadText = '加载中...'
          this.loading = !this.loading
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .load-more
    padding: 30px 0
    a
      display: block
      width: 200px
      height: 40px
      line-height: 40px
      text-align: center
      margin: 0 auto
      border: solid 1px #ff9494
      border-radius: 4px
      color: #133131
      &:hover
        color: #ff9494
</style>
