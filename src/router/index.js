import Vue from 'vue'
import Router from 'vue-router'

// pages
import Music from '../components/body/music/main.vue'
import MusicHome from '../components/body/music/home/main.vue'

Vue.use(Router)

let Empty = {}

// 音乐馆：主页，歌手，排行，分类
// 个人中心
// 社区
// 单页：歌手，歌曲

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index'
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      children: [
        {
          path: 'home',
          name: 'musicHome',
          component: MusicHome
        },
        {
          path: 'artists-list',
          name: 'musicArtistsList',
          component: Empty
        },
        {
          path: 'top-list',
          name: 'musicTopList',
          component: Empty
        },
        {
          path: 'classify',
          name: 'musicClassify',
          component: Empty
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Empty
    },
    {
      path: '/community',
      name: 'community',
      component: Empty
    },
    {
      path: '/singer',
      name: 'singer',
      component: Empty
    },
    {
      path: '/song',
      name: 'song',
      component: Empty
    }
  ],
  linkActiveClass: 'active'
})

export default router
