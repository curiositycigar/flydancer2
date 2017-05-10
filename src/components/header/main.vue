/*
create by YOU
*/
<template>
  <div class="header">
    <div class="logo">
      <!--<img src="../../assets/logo.png" alt="">-->
      飞舞音乐汇
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
      <el-input
        placeholder="输入歌手名或歌名"
        icon="search"
        v-model="searchData"
        :on-icon-click="handleSearch">
      </el-input>
    </div>
    <div v-if="!login" class="header-login">
      <fd-login></fd-login>
    </div>
    <div v-else class="header-username">
      欢迎您!
      <router-link to="">
        {{ userData.user_nick_name }}
      </router-link>
      <el-button type="text" style="font-size: 16px;color: #cccccc;" @click="LOGOUT">退出</el-button>
    </div>
  </div>
</template>

<script type="text/babel">
  import Login from './login.vue'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'fdHeader',
    data () {
      return {
        searchData: ''
      }
    },
    computed: {
      ...mapState([
        'login', 'userData'
      ])
    },
    methods: {
      handleSearch () {
      },
      ...mapMutations([
        'LOGOUT'
      ])
    },
    components: {
      'fd-login': Login
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  header-height = 70px
  header-color = #cccccc
  header-color-hover = #ffffff
  header-color-active = linear-gradient(180deg, #201f1f, #272727, #2a2a2a)
  .header
    position: relative
    box-sizing: border-box
    width: 100%
    padding: 0 calc(50% - 600px)
    margin: 0 auto
    height: header-height + 1px
    border-top: solid 1px #000000
    border-bottom: solid 1px #000000
    background: linear-gradient(180deg, #353535, #1a1919)
    &:before
      position: absolute
      left: 0
      top: 0
      content: ''
      width: 100%
      border-top: solid 1px #545454
    > div
      float: left
    .logo
      height: header-height
      width: 200px
      line-height: header-height
      font-size: 23px
      font-weight: 400
      color: #cccccc
      img
        height: 100%
    .main-nav
      height: header-height
      width: 600px
      ul
        display: flex
        justify-content: flex-start
        margin: 0
        padding: 0
        li
          list-style: none
          margin: 0
          padding: 0
          a
            position: relative
            box-sizing: border-box
            display: block
            width: 100%
            height: header-height - 1px
            line-height: header-height
            padding: 0 20px
            color: header-color
            font-size: 16px
            text-decoration: none
            overflow: hidden
            &:hover
              background: linear-gradient(180deg, #4a4a4a, #1a1919)
            &.active
              color: header-color-active
              background: header-color-active
              &:before
                content: ''
                position: absolute
                left: -2px
                top: 0
                height: 100%
                width: 4px
                border-radius: 100%
                background: rgba(0, 0, 0, 0.5)
                box-shadow: 0 2px 10px #000000
              &:after
                content: ''
                position: absolute
                right: -2px
                top: 0
                height: 100%
                width: 4px
                border-radius: 100%
                background: rgba(0, 0, 0, 0.5)
                box-shadow: 0 -2px 10px #000000
    .header-search
      height: header-height
      line-height: header-height
      width: 200px
      .el-input__inner
        background: #eaeaea
        border-color: transparent
        &:active
          border-color: transparent
    .header-login
      height: header-height
      width: 200px
    .header-username
      height: header-height
      width: 200px
      line-height: header-height
      text-align: center
      color: #cccccc
      a
        color: #ffffff
        font-size: 16px

</style>
