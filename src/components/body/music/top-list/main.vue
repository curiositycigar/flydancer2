<template>
  <div class="top-list">
    <fd-home-box-1 :data="homeBox" theme="light-light"></fd-home-box-1>
    <div class="top-list-wrapper">
      <div class="top-list-nav-wrapper">
        <fd-top-list-nav @change-active="handlerChange"></fd-top-list-nav>
      </div>
      <div class="top-list-section-wrapper">
        <fd-top-list-section></fd-top-list-section>
        <fd-load-more></fd-load-more>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
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
        }
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
