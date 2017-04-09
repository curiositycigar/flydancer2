<template>
  <div class="classify">
    <fd-tags-group :data="tags" @change-active="changeActive"></fd-tags-group>
    <div class="classify-section">
      <fd-classify-item v-for="(item, index) in data" :data="item" :key="index"></fd-classify-item>
    </div>
  </div>
</template>

<script type="text/babel">
  import TagsGroup from '../components/tags-group.vue'
  import ClassifyItem from '../components/classify-item.vue'
  export default {
    data () {
      return {
        tags: [
          ['全部', '国语', '英语', '韩语', '日语', '德语'],
          ['全部', '流行', '轻音乐', '摇滚', 'R&B', '嘻哈', '电子', '古典'],
          ['全部', 'ACG', '经典', '网络歌曲', '影视', 'KTV', '儿歌', '古风'],
          ['全部', '伤感', '安静', '快乐', '治愈', '甜蜜', '寂寞', '宣泄', '思念'],
          ['全部', '睡前', '夜店', '学习', '运动', '开车', '约会', '工作', '旅行', '派对', '婚礼', '咖啡馆']
        ],
        data: [
          {
            name: '你是我的眼',
            singer: '林宥嘉',
            des: '播放量:15.6万',
            src: '',
            href: 'javascript:;',
            singerHref: 'javascript:;'
          },
          {
            name: '你是我的眼',
            singer: '林宥嘉',
            des: '播放量:15.6万',
            src: '',
            href: 'javascript:;',
            singerHref: 'javascript:;'
          },
          {
            name: '你是我的眼',
            singer: '林宥嘉',
            des: '播放量:15.6万',
            src: '',
            href: 'javascript:;',
            singerHref: 'javascript:;'
          },
          {
            name: '你是我的眼',
            singer: '林宥嘉',
            des: '播放量:15.6万',
            src: '',
            href: 'javascript:;',
            singerHref: 'javascript:;'
          }
        ]
      }
    },
    components: {
      'fd-tags-group': TagsGroup,
      'fd-classify-item': ClassifyItem
    },
    methods: {
      changeActive (message) {
        console.log(message)
        this.data.push(
          {
            name: '你是我的眼',
            singer: '林宥嘉',
            des: '播放量:15.6万',
            src: '',
            href: 'javascript:;',
            singerHref: 'javascript:;'
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classify-section
    width: 1200px
    margin: 0 auto
    .fd-classify-item
      float: left
</style>
