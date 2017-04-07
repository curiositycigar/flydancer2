/*
create by YOU
*/







<template>
  <div>
    <fd-home-box :data="homeBox"></fd-home-box>
  </div>
</template>

<script type="text/babel">
  import HomeBox from '../components/home-box.vue'
  export default {
    data () {
      return {
        homeBox: {
          title: '排行榜',
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
    components: {
      'fd-home-box': HomeBox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
