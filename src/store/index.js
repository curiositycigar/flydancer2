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
    // 修改用户数据
    updateUserData (state, data) {
    },
    // 修改密码
    updatePassword (state, data) {
    },
    // 新建歌单
    addMySongs (state, data) {
      store.commit('LOGIN', {
        username: state.userData.user_name,
        password: state.userData.user_password
      })
    },
    // 删除歌单
    deleteMySongs (state, data) {
    },
    // 编辑歌单(待开发)
    editMySongs (state, data) {
    },
    // toggle歌单公开属性
    toggleMySongs (state, data) {
    },
    // 删除歌单中收藏的歌曲
    deleteListItem (state, data) {
      state.mySongs[data.i].music = state.mySongs[data.i].music.filter(function (item, index) {
        if (index === data.j) {
          return false
        }
        return true
      })
      state.mySongs = Object.assign([], state.mySongs)
    },
    // 关注
    doFollow (state, data) {
    },
    // 取消关注
    notFollow (state, data) {
    },
    // 删除收藏的歌单
    deleteCollection (state, data) {
    },
    // 收藏歌曲
    // {
    //    ...data,
    //    success ()
    //    error ()
    // }
    // 收藏外部音乐
    collectionOutside (state, data) {
      console.log(data.data)
      Axios({
        method: 'post',
        url: 'http://222.24.63.118/post/create/notmyself/collection',
        params: data.data
      }).then(function (res) {
        console.log(res)
        data.message('收藏成功')
        store.commit('LOGIN', {
          username: state.userData.user_name,
          password: state.userData.user_password
        })
      }).catch(function (err) {
        console.log(err)
        data.message('收藏失败')
      })
    },
    // 收藏内部音乐
    collectionInside (state, data) {
    },
    // 上传
    uploadSong (state, data) {
      store.commit('LOGIN', {
        username: state.userData.user_name,
        password: state.userData.user_password
      })
    },
    deleteUploadSong (state, data) {
      state.upload = state.upload.filter(function (item) {
        if (item.upload_id === data.upload_id) {
          return false
        }
        return true
      })
    },
    REGISTER (state, data) {
      Axios({
        method: 'post',
        url: 'http://222.24.63.118/post/createuser',
        params: {
          user_name: data.username,
          user_password: data.password
        }
      }).then(function (res) {
        console.log(res)
        data.message('注册成功')
        store.commit('LOGIN', {
          username: data.username,
          password: data.password
        })
      }).catch(function (err) {
        data.message('注册失败')
        console.log(err)
      })
    },
    // 登录
    LOGIN (state, data) {
      Axios({
        method: 'post',
        url: 'http://222.24.63.118/v3/user',
        params: {
          user_name: data.username,
          user_password: data.password
        }
      }).then(function (res) {
        if (res.status === 200) {
          console.log('login', res.data)
          state.userData = res.data.user_info[0]
          state.mySongs = res.data.my_music_list
          state.collection = res.data.collection
          state.follow = res.data.follow
          state.fans = res.data.fans
          state.upload = res.data.upload_info
          state.login = true
          data.message('登录成功')
        }
      }).catch(function (err) {
        console.log(err)
        data.message.error('登录失败,用户名或密码错误')
      })
    },
    // 登出
    LOGOUT (state, data) {
      state.login = false
    }
  }
})

Vue.prototype.$store = store

export default store
