/*
create by YOU
*/

<template>
  <div class="music">
    <fd-sub-nav></fd-sub-nav>
    <transition name="sub-page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/babel">
  import subNav from './sub-nav'
  export default {
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

  .sub-page-enter
    transition: opacity transform .3s

  .sub-page-enter-active
    opacity: 0.4

  .sub-page-leave
    transition: opacity transform .3s

  .sub-page-leave-active
    opacity: 0.4
</style>
