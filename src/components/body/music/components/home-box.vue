/*
create by YOU
*/



<template>
  <div class="home-box" :class="theme" :style="`background:${background}`">
    <div class="home-box-inner">
      <h1>
        <a href="javascript:;">
          {{ data.title }}
        </a>
      </h1>
      <ul class="music-group">
        <li v-for="(item, index) in data.list">
          <div class="s-bg"
               :style="`background:${backgroundInner} ${backgroundPosition[index]} / 400% 100% no-repeat`"></div>
          <h2>
            <a href="javascript:;">
              <span class="des">{{ item.des }}</span>
              <span class="content">{{ item.title }}</span>
            </a>
          </h2>
          <div class="play-button">
            <i class="play"></i>
            <i class="line"></i>
          </div>
          <ul class="songs">
            <li v-for="song in item.list">
              <a href="javascript:;">
                <div class="s-id">{{ song.index }}</div>
                <div class="s-name">{{ song.song }}</div>
                <div class="s-singer">{{ song.singer }}</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  import backgroundInner from './image/box-item-bg.jpg'
  export default {
    data () {
      return {
        backgroundPosition: [
          '0 0', '-300px 0', '-600px 0', '-900px 0'
        ]
      }
    },
    props: {
      data: {
        type: Object
      },
      background: {
        type: String,
        default: '#133131'
      },
      backgroundInner: {
        type: String,
        default: `url(${backgroundInner})`
      },
      theme: {
        type: String,
        default: 'light-light'
        // light-dark dark-dark dark-light
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  home-box-height = 800px
  group-height = 600px
  light = #ffffff
  light-des = rgba(255, 255, 255, 0.5)
  dark = #133131
  dark-des = rgba(0, 0, 0, 0.5)
  .home-box
    width: 100%
    .home-box-inner
      margin: 0 auto
      width: 1200px
      height: home-box-height
      h1
        height: 60px
        line-height: 60px
        padding: 50px 0 30px
        text-align: center
        a
          color: light
          font-size: 40px
          font-weight: 100
      .music-group
        width: 100%
        > li
          position: relative
          box-sizing: border-box
          float: left
          width: 25%
          height: group-height
          overflow: hidden
          &:hover
            .s-bg
              transform: scale(1.1, 1.1)
          .s-bg
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            transition: all 0.4s
            z-index: 0
          h2
            position: absolute
            left: 0
            top: 0
            height: 80px
            width: 100%
            padding-top: 50px
            text-align: center
            .des
              display: block
              font-size: 20px
              font-weight: 100
            .content
              display: block
              font-size: 30px
              font-weight: 100
          .play-button
            position: absolute
            left: 0
            top: 130px
            width: 100%
            height: 80px
            .line
              position: absolute
              left: 50%
              top: 40px
              width: 56px
              margin-left: -30px
              border: solid 2px rgba(255, 255, 255, 0.5)
          .songs
            position: absolute
            left: 0
            top: 220px
            width: 100%
            height: 350px
            li
              box-sizing: border-box
              width: 100%
              height: 60px
              padding: 10px 50px
              div
                font-weight: 400
              .s-id
                display: inline-block
                width: 20px
                font-size: 16px
              .s-name
                display: inline-block
                font-size: 16px
              .s-singer
                display: block
                margin-left: 24px
                font-size: 14px
    &.light-light
      h1 a
        color: light
      .music-group
        a, div, span
          color: light
        div.s-singer
          color: light-des
    &.light-dark
      h1 a
        color: light
      .music-group
        a, div, span
          color: dark
        div.s-singer
          color: dark-des
    &.dark-dark
      h1 a
        color: dark
      .music-group
        a, div, span
          color: dark
        div.s-singer
          color: dark-des
    &.dark-light
      h1 a
        color: dark
      .music-group
        a, div, span
          color: light
        div.s-singer
          color: light-des


</style>
