import Vue from 'vue'
import Router from 'vue-router'

// pages
import Music from '../components/body/music/main.vue'
import MusicHome from '../components/body/music/home/main.vue'
import MusicArtistsList from '../components/body/music/artist-list/mian.vue'
import MusicTopList from '../components/body/music/top-list/main.vue'
import MusicClassify from '../components/body/music/classify/main.vue'
import MusicSearch from '../components/body/music/search/main.vue'

import Home from '../components/body/home/main.vue'
import HomeList from '../components/body/home/pages/list.vue'
import HomeFollow from '../components/body/home/pages/follow.vue'
import HomeFans from '../components/body/home/pages/fans.vue'
import HomeUpload from '../components/body/home/pages/upload.vue'
import HomeLove from '../components/body/home/pages/love.vue'
import HomeMe from '../components/body/home/pages/me.vue'
import HomePassword from '../components/body/home/pages/password.vue'
import Community from '../components/body/community/main.vue'

import User from '../components/body/components/user.vue'
import Song from '../components/body/components/song.vue'
import Artist from '../components/body/components/artist.vue'

Vue.use(Router)

// 音乐馆：主页，歌手，排行，分类
// 个人中心
// 社区
// 单页：歌手，歌曲

const router = new Router({
  mode: 'history',
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
        },
        {
          path: 'search',
          name: 'musicSearch',
          component: MusicSearch
        },
        {
          path: 'user/:id',
          name: 'user',
          component: User
        },
        {
          path: 'song/:id',
          name: 'song',
          component: Song
        },
        {
          path: 'artist/:id',
          name: 'artist',
          component: Artist
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          beforeEnter (to, from, next) {
            return next('/home/me')
          }
        },
        {
          path: 'list',
          name: 'my-list',
          component: HomeList
        },
        {
          path: 'follow',
          name: 'follow',
          component: HomeFollow
        },
        {
          path: 'fans',
          name: 'fans',
          component: HomeFans
        },
        {
          path: 'upload',
          name: 'my-upload',
          component: HomeUpload
        },
        {
          path: 'love',
          name: 'my-love',
          component: HomeLove
        },
        {
          path: 'me',
          name: 'my-me',
          component: HomeMe
        },
        {
          path: 'password',
          name: 'my-password',
          component: HomePassword
        }
      ]
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (!/^\/home.*/.test(from.path)) {
      return {x: 0, y: 0}
    }
  },
  linkActiveClass: 'active'
})

export default router
