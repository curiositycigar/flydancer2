import Vue from 'vue'
import Router from 'vue-router'

let Empty = {}

Vue.use(Router)

const route = {
  routes: [
    {
      path: '/',
      name: 'index'
    },
    {
      path: '/music',
      name: 'music',
      component: Empty,
      children: [
        {
          path: 'home',
          name: 'musicHome',
          component: Empty
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
          name: 'musicclassify',
          component: Empty
        }
      ]
    },
    {
      path: '/home',
      name: '',
      component: Empty
    },
    {
      path: '/community',
      name: '',
      component: Empty
    }
  ]
}
