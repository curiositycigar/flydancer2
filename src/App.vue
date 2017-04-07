<template>
  <div id="app">
    <fd-header></fd-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/main.vue'
  export default {
    name: 'app',
    components: {
      'fd-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body, h1, h2, h3, ul, li
    margin: 0
    padding: 0

  a
    text-decoration: none

  .body
    width: 1200px
    margin: 0 auto
</style>
