<template>
  <div class="song-table">
    <div class="song-table-head">
      <div class="song-item-index">{{ title.index }}</div>
      <div class="song-item-title">{{ title.title }}</div>
      <div class="song-item-des">{{ title.des }}</div>
      <div class="song-item-duration">{{ title.duration }}</div>
      <div class="song-time-from">{{ title.from }}</div>
    </div>
    <div v-for="item in data" class="song-item">
      <div class="song-item-index">{{ item.index }}</div>
      <div class="song-item-title">
        <router-link :to="pre + item.id">
          <img :src="item.src" alt="img">
          <div class="song-item-name">{{ item.name }}</div>
        </router-link>
      </div>
      <div class="song-item-des">
        <router-link :to="singerPre + item.singerId">{{ item.des }}</router-link>
      </div>
      <div class="song-item-duration">{{ item.duration }}</div>
      <div class="song-time-from">{{ item.from }}</div>
    </div>
    `

  </div>
</template>

<script type="text/babel">
  export default {
    name: 'fdSongTable',
    data () {
      return {
        pre: '/music/song/',
        singerPre: '/music/artist/'
      }
    },
    methods: {},
    props: {
      data: {
        type: Array
      },
      title: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  song-item-height = 50px
  .song-table
    .song-table-head
      width: 100%
      height: song-item-height
      padding: 4px 0
      border-top: solid 1px #ff9494
      > div
        float: left
        height: song-item-height
        line-height: song-item-height
        font-size: 16px
        text-align: left
        color: #133131
      .song-item-index
        width: 5%
      .song-item-title
        width: 35%
      .song-item-des
        width: 25%
      .song-item-duration
        width: 20%
      .song-time-from
        width: 15%
    .song-item
      width: 100%
      height: song-item-height
      padding: 4px 0
      &:hover
        background: #fafafa
      > div
        float: left
        height: song-item-height
        line-height: song-item-height
      .song-item-index
        width: 5%
        font-size: 20px
        text-align: center
        color: #ff9494
      .song-item-title
        width: 35%
        img
          display: block
          float: left
          height: song-item-height
          width: song-item-height
        .song-item-name
          float: left
          height: song-item-height
          margin-left: 20px
          color: #133131
          &:hover
            color: #ff949494
      .song-item-des
        width: 25%
        a
          color: #133131
          &:hover
            color: #ff949494
      .song-item-duration
        width: 20%
      .song-time-from
        width: 15%
</style>
