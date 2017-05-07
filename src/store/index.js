/**
 * Created by YOU on 2017/5/5.
 */
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

let store = new VueX.Store({
  state: {
    userid: 23123,
    username: '',
    nickname: '',
    playList: []
  },
  mutations: {}
})

export default store
