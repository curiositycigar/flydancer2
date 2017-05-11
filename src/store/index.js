/**
 * Created by YOU on 2017/5/5.
 */
import Vue from 'vue'
import VueX from 'vuex'
import Axios from 'axios'
import $ from 'jquery'

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
    },
    // 删除歌单
    deleteMySongs (state, data) {
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
    editMySongs (state, data) {
    },
    // toggle歌单公开属性
    toggleMysongs (state, data) {
    },
    // 删除歌单中收藏的歌曲
    deleteListItem (state, data) {
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
    },
    // 收藏内部音乐
    collectionInside (state, data) {
    },
    // 上传
    uploadSong (state, data) {
      $.ajax({
        type: 'POST',
        url: '',
        data: data.data,
        processData: false,
        contentType: 'multipart/form-data',
        success: function (res) {
          console.log(res)
        }
      })
      // let formData = new FormData()
      // formData.append('upload_user_name', state.userData.user_name)
      // formData.append('upload_music_name', data.data.upload_music_name)
      // formData.append('upload_music_file_url', data.data.upload_music_file_url)
      // Axios({
      //   method: 'post',
      //   url: 'http://222.24.63.118/post/upload',
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   },
      //   params: formData
      // }).then(function (res) {
      //   console.log(res)
      //   state.upload.push({
      //     upload_id: '1',
      //     upload_user_name: state.userData.user_name,
      //     upload_music_name: data.data.upload_music_name,
      //     upload_open: '1',
      //     upload_date: '2017-05-09 11:20:27.503527',
      //     upload_music_file_url: 'http://222.24.63.118:8080/upload/upload/jianshu',
      //     from_self: '1'
      //   })
      //   data.message('提交成功')
      // }).catch(function () {
      //   data.message.error('提交失败')
      // })
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
          state.userData = res.data.user_info[0]
          state.mySongs = res.data.my_music_list
          state.collection = res.data.collection
          state.follow = res.data.follow
          state.fans = res.data.fans
          state.upload = res.data.upload_info
          state.login = true
        }
      }).catch(function (err) {
        console.log(err)
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
