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
    artists: null
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
    }
  }
})

Vue.prototype.$store = store

export default store
