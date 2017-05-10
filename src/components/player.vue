/*
create by YOU
*/
<template>
  <div class="player">
    <div class="player-left"></div>
    <div class="player-middle"></div>
    <div class="player-right"></div>
    <div class="player-toggle hidden"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'fdPlayer'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .player
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 50px
    background: #0a0a0a
    border-top: solid 2px #55a532
    z-index: 9999
    transition: all 0.2s
    .player-toggle
      position: absolute
      top: -20px
      left: 50%
      transform: translateX(-50%)
      width: 40px
      height: 20px
      border-radius: 20px 20px 0 0
      background: #55a532
</style>
