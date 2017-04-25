import Vue from 'vue'
import Router from 'vue-router'

// pages
import Music from '../components/body/music/main.vue'
import MusicHome from '../components/body/music/home/main.vue'
import MusicArtistsList from '../components/body/music/artist-list/mian.vue'
import MusicTopList from '../components/body/music/top-list/main.vue'
import MusicClassify from '../components/body/music/classify/main.vue'
import Home from '../components/body/home/main.vue'

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
      name: 'index',
      beforeEnter (to, from, next) {
        return next('/music')
      }
    },
    {
      path: '/music',
      component: Music,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next('/music/home')
          }
        },
        {
          path: 'home',
          name: 'musicHome',
          component: MusicHome
        },
        {
          path: 'artists-list',
          name: 'musicArtistsList',
          component: MusicArtistsList
        },
        {
          path: 'top-list',
          name: 'musicTopList',
          component: MusicTopList
        },
        {
          path: 'classify',
          name: 'musicClassify',
          component: MusicClassify
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
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
