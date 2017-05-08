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
      <li>
        <router-link to="/music/search">搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  sub-color = #ffffff
  sub-color-active = #ffffff
  sub-color-bg = #ffffff
  .sub-nav
    width: 100%
    margin: 0 auto
    background: linear-gradient(180deg, #c70c0c 20%, #980808 80%)
    ul
      width: 1200px
      margin: 0 auto
      padding: 0 0 0 200px
      border-style: solid
      border-color: #ea1717 #000000 #000000 #030303
      border-width: 1px 0
      li
        list-style: none
        margin: 0
        padding: 5px 10px
        display: inline-block
        vertical-align: top
        height: header-height
        line-height: header-height
        a
          display: inline-block
          height: 22px
          line-height: 22px
          padding: 0 15px
          border-style: solid
          border-width: 1px
          border-color: transparent
          border-radius: 100px
          color: sub-color
          font-size: 12px
          text-decoration: none
          &:hover
            border-color: #b80a0a
            background: linear-gradient(180deg, #640000, #8e0403)
            color: sub-color-active
          &.active
            border-color: #b80a0a
            background: linear-gradient(180deg, #640000, #8e0403)
            color: sub-color-active
</style>
