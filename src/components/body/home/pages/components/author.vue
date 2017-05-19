<template>
  <div class="author-item">
    <div class="author-avatar">
      <img :src="data.user_avatar" alt="">
    </div>
    <div class="author-right">
      <div class="author-name">
        <router-link :to="`/community/user/${data.user_name}`">{{ data.user_name }}</router-link>
      </div>
      <div class="author-middle">
        <span>歌单:{{ data.list_count }}</span><span class="vertical-line">|</span>
        <span>关注:{{ data.follow_count }}</span><span class="vertical-line">|</span>
        <span>粉丝:{{ data.fans_count }}</span>
      </div>
      <div class="author-bottom">
        <el-button v-if="followed" type="text" class="button" @click="removeFollow">取消关注</el-button>
        <el-button v-else type="text" class="button" @click="addFollow">关注</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        pre: '/music/author/'
      }
    },
    computed: {
      followed () {
        let name = this.data.user_name
        let follow = this.$store.state.follow
        if (follow) {
          for (let i = 0; i < follow.length; i++) {
            if (follow[i].user_name === name) {
              return true
            }
          }
        }
        return false
      }
    },
    methods: {
      removeFollow () {
        let that = this
        this.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/delete/follow',
          params: {
            user_name: that.$store.state.userData.user_name,
            follow_user_name: that.data.user_name
          }
        }).then(function (res) {
          console.log(res)
          that.$message('取消关注成功')
          that.$store.commit('LOGIN', {
            username: that.$store.state.userData.user_name,
            password: that.$store.state.userData.user_password
          })
        }).catch(function (err) {
          console.log(err)
          that.$message.error('取消关注失败')
        })
      },
      addFollow () {
        let that = this
        this.$http({
          method: 'post',
          url: 'http://222.24.63.118/post/create/follow',
          params: {
            user_name: that.$store.state.userData.user_name,
            follow_user_name: that.data.user_name
          }
        }).then(function (res) {
          console.log(res)
          that.$message('关注成功')
        }).catch(function (err) {
          console.log(err)
          that.$message.error('关注失败')
        })
      }
    },
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .author-item
    display: flex
    width: 48%
    min-width: 300px
    height: 100px
    margin: 0 1% 1% 0
    border: solid 1px #cccccc
    .author-avatar
      width: 80px
      height: 80px
      margin: 10px
      overflow: hidden
      img
        width: 100%
        height: 100%
    .author-right
      display: flex
      flex-direction: column
      justify-content: center
      .author-name
        height: 30px
        font-size: 16px
        a
          color: #000000
          &:hover
            color: #63a35c
      .author-middle
        display: flex
        justify-content: center
        align-items: center
        height: 25px
        font-size: 14px
        .vertical-line
          font-size: 12px
          padding: 0 3px
      .author-bottom
        height: 25px
</style>
