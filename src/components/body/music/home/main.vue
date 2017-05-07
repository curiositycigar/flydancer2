/*
create by YOU
*/

<template>
  <div>
    <fd-home-box-2 :data="homeBox2" :background="`url(${BoxBg})`" theme="light-light"></fd-home-box-2>
    <fd-home-box-1 :data="homeBox1" background="#fefefe" theme="dark-light"></fd-home-box-1>
    <fd-home-box-2 :data="homeBox3" theme="light-light"></fd-home-box-2>
  </div>
</template>

<script type="text/babel">
  import BoxBg from '../components/image/box-bg.jpg'
  import singerImage from '../components/image/singer'
  import HomeBox1 from '../components/home-box-1.vue'
  import HomeBox2 from '../components/home-box-2.vue'
  export default {
    data () {
      return {
        homeBox1: {
          title: '歌曲排行榜',
          list: [
            {
              title: '流行指数',
              des: '巅峰榜',
              list: [
                {
                  index: 1,
                  song: '如果',
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
                },
                {
                  index: 2,
                  song: '如果没有你',
                  id: 976745435,
                  singer: '莫文蔚',
                  singerId: 85646746
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  id: 976745435,
                  singer: '林俊杰',
                  singerId: 85646746
                },
                {
                  index: 4,
                  song: '没那么简单',
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
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
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
                },
                {
                  index: 2,
                  song: '如果没有你',
                  id: 976745435,
                  singer: '莫文蔚',
                  singerId: 85646746
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  id: 976745435,
                  singer: '林俊杰',
                  singerId: 85646746
                },
                {
                  index: 4,
                  song: '没那么简单',
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
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
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
                },
                {
                  index: 2,
                  song: '如果没有你',
                  id: 976745435,
                  singer: '莫文蔚',
                  singerId: 85646746
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  id: 976745435,
                  singer: '林俊杰',
                  singerId: 85646746
                },
                {
                  index: 4,
                  song: '没那么简单',
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
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
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
                },
                {
                  index: 2,
                  song: '如果没有你',
                  id: 976745435,
                  singer: '莫文蔚',
                  singerId: 85646746
                },
                {
                  index: 3,
                  song: '可惜没有如果',
                  id: 976745435,
                  singer: '林俊杰',
                  singerId: 85646746
                },
                {
                  index: 4,
                  song: '没那么简单',
                  id: 976745435,
                  singer: '汪洋',
                  singerId: 85646746
                }
              ]
            }
          ]
        },
        homeBox2: {
          title: '歌手排行榜',
          list: [
            {
              name: '薛之谦',
              des: '歌曲数:119',
              src: singerImage[0],
              href: 'javascript:;'
            },
            {
              name: '周杰伦',
              des: '歌曲数:341',
              src: singerImage[1],
              href: 'javascript:;'
            },
            {
              name: '陈奕迅',
              des: '歌曲数:819',
              src: singerImage[2],
              href: 'javascript:;'
            },
            {
              name: '林俊杰',
              des: '歌曲数:301',
              src: singerImage[3],
              href: 'javascript:;'
            }
          ]
        },
        homeBox3: {
          title: '歌手推荐',
          list: [
            {
              name: '薛之谦',
              des: '歌曲数:119',
              src: singerImage[0],
              href: 'javascript:;'
            },
            {
              name: '周杰伦',
              des: '歌曲数:341',
              src: singerImage[1],
              href: 'javascript:;'
            },
            {
              name: '陈奕迅',
              des: '歌曲数:819',
              src: singerImage[2],
              href: 'javascript:;'
            },
            {
              name: '林俊杰',
              des: '歌曲数:301',
              src: singerImage[3],
              href: 'javascript:;'
            }
          ]
        },
        BoxBg: BoxBg
      }
    },
    components: {
      'fd-home-box-1': HomeBox1,
      'fd-home-box-2': HomeBox2
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
