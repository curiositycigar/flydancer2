<template>
  <div class="artist-list">
    <fd-home-box-2 :data="homeBox2" background="#ffdfdf" theme="dark-light"></fd-home-box-2>
    <fd-tags-group :data="tags" @change-active="changeActive"></fd-tags-group>
    <div class="artist-list-singers">
      <fd-singer-item v-for="(item,index) in data" :data="item" :key="index"></fd-singer-item>
    </div>
  </div>
</template>

<script type="text/babel">
  import singerImage from '../components/image/singer'
  import TagsGroup from '../components/tags-group.vue'
  import SingerItem from '../components/singer-item.vue'
  import HomeBox2 from '../components/home-box-2.vue'
  export default {
    data () {
      return {
        tags: [
          ['全部', '华语男', '华语女', '华语组合', '日韩男', '日韩女', '日韩组合', '欧美男', '欧美女', '欧美组合', '其他'],
          ['热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        ],
        homeBox2: {
          title: '推荐歌手',
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
        data: [
          {
            name: '许嵩',
            src: singerImage[0],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[1],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[2],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[3],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[0],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[1],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[3],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[0],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[1],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[2],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[3],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[0],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[1],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[2],
            href: 'javascript:;'
          },
          {
            name: '许嵩',
            src: singerImage[3],
            href: 'javascript:;'
          }
        ]
      }
    },
    components: {
      'fd-tags-group': TagsGroup,
      'fd-singer-item': SingerItem,
      'fd-home-box-2': HomeBox2
    },
    methods: {
      changeActive (message) {
        console.log(message)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .artist-list-singers
    width: 1200px
    margin: 0 auto
    .singer-item-wrapper
      float: left
</style>
