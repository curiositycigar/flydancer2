/*
create by YOU
*/



<template>
  <div class="header">
    <div class="logo">
    </div>
    <div class="main-nav">
      <ul>
        <li>
          <router-link to="/music">音乐馆</router-link>
        </li>
        <li>
          <router-link to="/home">我的音乐</router-link>
        </li>
        <li>
          <router-link to="/community">分享社区</router-link>
        </li>
      </ul>
    </div>
    <div class="header-search"></div>
    <div class="header-login">

    </div>
  </div>
</template>

<script type="text/babel">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header-height = 100px
  header-color = #133131
  header-color-active = #ff9494
  header-color-bg = #ffffff
  .header
    width: 1200px
    margin: 0 auto
    height: header-height
    border-bottom: solid 1px #efefef
    >div
      float: left
    .logo
      height: header-height
      width: 200px
    .main-nav
      height: header-height
      width: 600px
      ul
        margin: 0
        padding: 0
        li
          list-style: none
          margin: 0
          padding: 0
          display: inline-block
          vertical-align: top
          a
            box-sizing: border-box
            display: block
            width: 100%
            height: header-height
            line-height: header-height
            padding: 0 15px
            color: header-color
            font-size: 20px
            text-decoration: none
            transition: all 0.3s
            &:hover
              color: header-color-active
            &.active
              color: header-color-bg
              background: header-color-active
    .header-search
      height: header-height
      width: 200px
    .header-login
      height: header-height
      width: 200px
</style>
