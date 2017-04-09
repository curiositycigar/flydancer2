/*
create by YOU
*/


<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
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
    <div class="header-search">
      <div class="header-search-border">
        <input type="text" placeholder="搜索">
        <span>&gt;</span>
      </div>
    </div>
    <div class="header-login">
      <fd-login></fd-login>
    </div>
  </div>
</template>

<script type="text/babel">
  import Login from './login.vue'
  export default {
    components: {
      'fd-login': Login
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header-height = 70px
  header-color = #133131
  header-color-active = #ff9494
  header-color-bg = #ffffff
  .header
    width: 1200px
    margin: 0 auto
    height: header-height
    border-bottom: solid 1px #efefef
    > div
      float: left
    .logo
      height: header-height
      width: 200px
      img
        height: 100%
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
      .header-search-border
        position: relative
        box-sizing: border-box
        width: 180px
        height: 40px
        margin-top: 15px
        border: solid 1px #ff9494
        border-radius: 3px
        input
          box-sizing: border-box
          outline: none
          height: 30px
          width: 150px
          margin: 5px 0 5px 10px
          border: none
          color: #ff9494
        span
          position: absolute
          right: 0
          top: 0
          display: block
          height: 38px
          line-height: 38px
          width: 30px
          color: #133131
          font-size: 20px
          text-align: center
          cursor: pointer
          transition: all 0.2s
          &:hover
            font-size: 24px
            color: #ff9494
    .header-login
      height: header-height
      width: 200px
</style>
