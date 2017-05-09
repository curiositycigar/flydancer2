/**
 * Created by YOU on 2017/5/5.
 */
import Vue from 'vue'
import VueX from 'vuex'
import Axios from 'axios'

Vue.use(VueX)

let store = new VueX.Store({
  state: {
    userid: 23123,
    username: '',
    nickname: '',
    playList: [],
    artists: null,
    mySongs: null
  },
  getters: {
    getArtists (state) {
      if (state.artists === null) {
        state.artists = new Promise(function (resolve, reject) {
          let url = 'http://222.24.63.118/v2/api/singer/app1_singer'
          Axios.get(url).then(function (res) {
            if (res.status === 200) {
              let data = res.data
              if (data.status === 200) {
                resolve(data.data)
              }
            }
          })
        })
      }
      return state.artists
    },
    getMySongs (state) {
      if (state.mySongs === null) {
        state.mySongs = new Promise(function (resolve, reject) {
          resolve([
            {
              name: '我喜欢的',
              count: 100,
              open: true,
              author: 'LitCigar',
              love: 10,
              songs: []
            },
            {
              name: '搞笑的',
              count: 5,
              open: false,
              author: 'LitCigar',
              love: 10,
              songs: []
            }
          ])
        })
      }
      return state.mySongs
    }
  },
  mutations: {
    deleteMySongs (state, index) {
      state.mySongs = new Promise(function (resolve, reject) {
        resolve([
          {
            name: '我喜欢的',
            count: 100,
            open: true,
            author: 'LitCigar',
            love: 10,
            songs: []
          }
        ])
      })
    },
    editMySongs (state, index) {
    }
  }
})

Vue.prototype.$store = store

export default store
