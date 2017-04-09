<template>
  <div class="artist-list">
    <fd-home-box-2 :data="homeBox2" background="#ffdfdf" theme="dark-light"></fd-home-box-2>
    <fd-tags-group :data="tags" @change-active="changeActive"></fd-tags-group>
    <div class="artist-list-singers">
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
      <fd-singer-item></fd-singer-item>
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
          ['全部', '华语男', '华语女', '日韩男', '日韩女', '其他'],
          ['热门', 'A', 'B', 'C', 'D', 'E']
        ],
        homeBox2: {
          title: '排行榜',
          list: [
            {
              name: 'Jack Zhou',
              des: '歌曲数:188',
              src: singerImage[0],
              href: 'javascript:;'
            },
            {
              name: 'Jack Zhou',
              des: '歌曲数:188',
              src: singerImage[1],
              href: 'javascript:;'
            },
            {
              name: 'Jack Zhou',
              des: '歌曲数:188',
              src: singerImage[2],
              href: 'javascript:;'
            },
            {
              name: 'Jack Zhou',
              des: '歌曲数:188',
              src: singerImage[3],
              href: 'javascript:;'
            }
          ]
        }
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
