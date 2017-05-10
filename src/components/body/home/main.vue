/*
create by YOU
*/
<template>
  <div class="home">
    <div class="redBar"></div>
    <div v-if="login" class="header">
      <div class="avatar">
        <img :src="userData.user_avatar" alt="">
      </div>
      <div class="nickname">
        {{ userData.user_nick_name }}
      </div>
      <div class="faf">
        <div>
          <span>{{ userData.follow_count }}</span>
          <span>关注</span>
        </div>
        <div>
          <span>{{ userData.fans_count }}</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>
    <div v-if="login" class="home-contents">
      <ul class="home-nav">
        <li v-for="(item, index) in nav">
          <router-link :to="item.to">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="home-content-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <div v-else>
      你需要登录
    </div>
  </div>
</template>

<script type="text/babel">
  import store from '@/store'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        active: 1,
        nav: [
          {name: '歌单', to: '/home/list'},
          {name: '关注', to: '/home/follow'},
          {name: '收藏', to: '/home/love'},
          {name: '粉丝', to: '/home/fans'},
          {name: '上传的歌曲', to: '/home/upload'},
          {name: '个人设置', to: '/home/me'}
        ]
      }
    },
    store,
    computed: {
      ...mapState([
        'login',
        'userData'
      ])
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  ul, li
    margin: 0
    padding: 0
    list-style: none

  .home
    .header
      box-sizing: border-box
      display: flex
      flex-direction: column
      align-items: center
      width: 100%
      height: 400px
      padding-top: 100px
      background: url(./bg_user.jpg)
      z-index:-1
      .avatar
        box-sizing: border-box
        height: 120px
        width: 120px
        border: solid 5px #ffffff
        border-radius: 60px
        overflow: hidden
        img
          width: 100%
          height: 100%
      > div
        color: #ffffff
      .nickname
        height: 50px
        line-height: 50px
        margin-top: 20px
        font-size: 18px
        font-weight: 600
      .faf
        display: flex
        justify-content: center
        width: 100px
        > div
          display: flex
          flex-direction: column
          width: 50%
          text-align: center
    .home-contents
      width: 1200px
      margin: -50px auto 0 auto
      z-index: 10
      .home-nav
        display: flex
        justify-content: flex-start
        height: 50px
        > li
          > a
            height: 50px
            line-height: 50px
            margin: 0 20px
            color: #ffffff
            cursor: pointer
            &:hover
              color: #e7e1cd
            &.active
              color: #55a532
      .home-content-wrapper
        padding: 50px 20px
</style>
