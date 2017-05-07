/*
create by YOU
*/

<template>
  <div class="music">
    <fd-sub-nav></fd-sub-nav>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import subNav from './sub-nav'
  export default {
    name: 'fdMusic',
    components: {
      'fd-sub-nav': subNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .music
    width: 100%
    > div
      transition: all 0.3s

</style>
