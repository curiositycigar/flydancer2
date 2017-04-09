/*
create by YOU
*/
// sub-nav

<template>
  <div class="sub-nav">
    <ul>
      <li>
        <router-link to="/music/home">主页</router-link>
      </li>
      <li>
        <router-link to="/music/artists-list">歌手</router-link>
      </li>
      <li>
        <router-link to="/music/top-list">排行</router-link>
      </li>
      <li>
        <router-link to="/music/classify">分类</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  sub-color = #133131
  sub-color-active = #ff9494
  sub-color-bg = #ffffff
  .sub-nav
    width: 1200px
    margin: 0 auto
    ul
      margin-left: 200px
      padding: 0
      li
        list-style: none
        margin: 0
        padding: 15px 20px
        display: inline-block
        vertical-align: top
        height: header-height
        line-height: header-height
        a
          color: sub-color
          font-size: 16px
          text-decoration: none
          transition: all 0.3s
          &:hover
            color: sub-color-active
          &.active
            color: sub-color-active
</style>
