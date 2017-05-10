/**
 * Created by YOU on 2017/5/5.
 */
import Vue from 'vue'
import VueX from 'vuex'
import Axios from 'axios'

Vue.use(VueX)

let store = new VueX.Store({
  state: {
    login: false,
    userData: {},
    playList: [],
    // 歌手列表
    artists: null,
    // 歌单
    mySongs: {},
    // 收藏
    collection: {},
    // 关注
    follow: {},
    // 粉丝
    fans: {},
    // 上传
    upload: {}
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
  },
  mutations: {
    // 新建歌单
    addMySongs (state, name) {
    },
    // 删除歌单
    deleteMySongs (state, index) {
      state.mySongs = [
        {
          name: '搞笑的',
          count: 100,
          open: true,
          author: 'LitCigar',
          love: 10,
          songs: []
        }
      ]
    },
    // 编辑歌单(待开发)
    editMySongs (state, index) {
    },
    // toggle歌单公开属性
    toggleMysongs () {
    },
    // 删除歌单中收藏的歌曲
    deleteListItem (state, index) {
    },
    // 关注
    doFollow () {
    },
    // 取消关注
    notFollow () {
    },
    // 收藏
    // {
    //    ...data,
    //    success ()
    //    error ()
    // }
    // 收藏外部音乐
    collectionOutside (state, data) {
    },
    // 收藏内部音乐
    collectionInside (state, data) {
    },
    // 登录
    LOGIN (state, data) {
      Axios.get('http://222.24.63.118/v3/user/app1_user/18829291269').then(function (res) {
        if (res.status === 200) {
          state.userData = res.data.user_info[0]
          state.mySongs = res.data.my_music_list
          state.collection = res.data.collection
          state.follow = res.data.follow
          state.fans = res.data.fans
          state.upload = res.data.upload_info
          state.login = true
        }
      })
    },
    LOGOUT (state, data) {
      state.login = false
    }
  }
})

Vue.prototype.$store = store

export default store
