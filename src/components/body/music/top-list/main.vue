<template>
  <div class="top-list">
    <fd-home-box-1 :data="homeBox" background="#dfffff" theme="dark-light"></fd-home-box-1>
    <div class="top-list-wrapper">
      <div class="top-list-nav-wrapper">
        <fd-top-list-nav @change-active="handlerChange"></fd-top-list-nav>
      </div>
      <div class="top-list-section-wrapper">
        <fd-top-list-section :data="data" :title="title"></fd-top-list-section>
        <fd-load-more></fd-load-more>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import singerImage from '../components/image/singer'
  import TopListNav from './top-list-nav.vue'
  import TopListSection from './top-list-section.vue'
  import HomeBox1 from '../components/home-box-1.vue'
  import LoadMore from '../components/load-more.vue'
  export default {
    components: {
      'fd-home-box-1': HomeBox1,
      'fd-top-list-nav': TopListNav,
      'fd-top-list-section': TopListSection,
      'fd-load-more': LoadMore
    },
    data () {
      return {
        homeBox: {
          title: '推荐榜单',
          list: [
            {
              title: '流行指数',
              des: '巅峰榜',
              list: [
                {
                  index: 1,
                  song: '如果',
                  singer: '汪洋'
                },
                {
                  index: 2,
                  song: '如果没有你',
                  singer: '莫文蔚'
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  singer: '林俊杰'
                },
                {
                  index: 4,
                  song: '没那么简单',
                  singer: '汪洋'
                }
              ]
            },
            {
              title: '流行指数',
              des: '巅峰榜',
              list: [
                {
                  index: 1,
                  song: '如果',
                  singer: '汪洋'
                },
                {
                  index: 2,
                  song: '如果没有你',
                  singer: '莫文蔚'
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  singer: '林俊杰'
                },
                {
                  index: 4,
                  song: '没那么简单',
                  singer: '汪洋'
                }
              ]
            },
            {
              title: '流行指数',
              des: '巅峰榜',
              list: [
                {
                  index: 1,
                  song: '如果',
                  singer: '汪洋'
                },
                {
                  index: 2,
                  song: '如果没有你',
                  singer: '莫文蔚'
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  singer: '林俊杰'
                },
                {
                  index: 4,
                  song: '没那么简单',
                  singer: '汪洋'
                }
              ]
            },
            {
              title: '流行指数',
              des: '巅峰榜',
              list: [
                {
                  index: 1,
                  song: '如果',
                  singer: '汪洋'
                },
                {
                  index: 2,
                  song: '如果没有你',
                  singer: '莫文蔚'
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  singer: '林俊杰'
                },
                {
                  index: 4,
                  song: '没那么简单',
                  singer: '汪洋'
                }
              ]
            }
          ]
        },
        title: {
          index: '排行',
          title: '歌曲',
          des: '歌手',
          duration: '时长',
          from: '来源'
        },
        data: [
          {
            index: 1,
            name: '模特',
            des: '薛之谦',
            duration: '05:12',
            src: singerImage[0],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 2,
            name: '牛仔很忙',
            des: '周杰伦',
            duration: '05:12',
            src: singerImage[1],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 3,
            name: '好久不见',
            des: '陈奕迅',
            duration: '05:12',
            src: singerImage[2],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 4,
            name: '可惜没有如果',
            des: '林俊杰',
            duration: '05:12',
            src: singerImage[3],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 5,
            name: '模特',
            des: '薛之谦',
            duration: '05:12',
            src: singerImage[0],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 6,
            name: '牛仔很忙',
            des: '周杰伦',
            duration: '05:12',
            src: singerImage[1],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 7,
            name: '好久不见',
            des: '陈奕迅',
            duration: '05:12',
            src: singerImage[2],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          },
          {
            index: 8,
            name: '可惜没有如果',
            des: '林俊杰',
            duration: '05:12',
            src: singerImage[3],
            href: 'javascript:;',
            dHref: 'javascript:;',
            from: '网易云音乐'
          }
        ]
      }
    },
    methods: {
      handlerChange (query) {
        console.log(query)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-list
    .top-list-wrapper
      width: 1200px
      margin: 30px auto 0
      overflow: hidden
      .top-list-nav-wrapper
        float: left
        width: 200px
      .top-list-section-wrapper
        margin-left: 200px
        width: 1000px
</style>
