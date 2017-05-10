<template>
  <div id="app">
    <div class="stick-footer-wrapper">
      <fd-header></fd-header>
      <router-view></router-view>
    </div>
    <fd-footer></fd-footer>
    <fd-player></fd-player>
  </div>
</template>

<script>
  import header from './components/header/main.vue'
  import footer from './components/footer/footer.vue'
  import player from './components/player.vue'
  export default {
    name: 'app',
    components: {
      'fd-header': header,
      'fd-footer': footer,
      'fd-player': player
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body, h1, h2, h3, ul, li
    margin: 0
    padding: 0

  a
    text-decoration: none

  html, body
    height: 100%

  .body
    width: 1200px
    margin: 0 auto

  #app
    min-width: 1200px
    height: 100%

  .stick-footer-wrapper
    box-sizing: border-box
    min-height: 100%
    padding-bottom: 200px
    margin-bottom: -200px
    background: #f5f5f5
    overflow: hidden

  .redBar
    height: 10px
    width: 100%
    border-bottom: solid 1px #000000
    background: linear-gradient(180deg, #c70c0c 20%, #980808 80%)
</style>
