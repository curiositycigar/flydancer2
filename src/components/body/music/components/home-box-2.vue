/*
create by YOU
*/

<template>
  <div class="home-box-2" :class="theme" :style="`background:${background}`">
    <div class="home-box-2-inner">
      <h1>
        <a href="javascript:;">
          {{ data.title }}
        </a>
      </h1>
      <ul class="singer-group">
        <li v-for="(item, index) in data.list">
          <div class="singer-box-inner">
            <a :href="item.href">
              <div class="singer-image">
                <img :src="item.src" alt="">
              </div>
            </a>
            <a :href="item.href">
              <h2>{{ item.name }}</h2>
              <div class="singer-des">{{ item.des }}</div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
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
      theme: {
        type: String,
        default: 'light-light'
        // light-dark dark-dark dark-light
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  home-box-height = 650px
  group-height = 450px
  singer-inner-height = 400px
  singer-bg = rgba(0, 0, 0, 0.5)
  singer-bg-hover = #ff9494
  singer-image-height = 300px
  light = #ffffff
  light-des = rgba(255, 255, 255, 0.5)
  dark = #133131
  dark-des = rgba(0, 0, 0, 0.5)
  .home-box-2
    width: 100%
    .home-box-2-inner
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
      .singer-group
        width: 100%
        >li
          position: relative
          box-sizing: border-box
          float: left
          width: 25%
          height: group-height
          overflow: hidden
          transition: all 0.5s
          &:nth-child(n)
            background: #414141
          &:nth-child(2n)
            background: rgba(0,0,0,0.8)
          &:hover
            background: #31c27c
          .singer-box-inner
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: singer-inner-height
            .singer-image
              width: 100%
              height: singer-image-height
              margin-bottom: 30px
              overflow: hidden
              img
                width: 100%
                height: singer-image-height
                transition: all 0.3s
                &:hover
                  transform: scale(1.1,1.1)
            a
              text-align: center
              h2
                color: light
                font-weight: 100
                font-size: 18px
                margin: 10px 0
              .singer-des
                color: light-des
                font-weight: 100
                font-size: 14px
                margin: 0

    &.light-light
      h1 a
        color: light
      .singer-group
        h2
          color: light
        .singer-des
          color: light-des
    &.light-dark
      h1 a
        color: light
      .singer-group
        h2
          color: dark
        .singer-des
          color: dark-des
    &.dark-dark
      h1 a
        color: dark
      .singer-group
        h2
          color: dark
        .singer-des
          color: dark-des
    &.dark-light
      h1 a
        color: dark
      .singer-group
        h2
          color: light
        .singer-des
          color: light-des

</style>
