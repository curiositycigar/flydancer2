<template>
  <div class="top-list-nav">
    <div v-for="(group, index) in data" class="top-list-nav-group">
      <h2>{{ group.name }}</h2>
      <ul>
        <li v-for="(item, i) in group.list" :class="(active[0] === index && active[1] === i) ? 'active' : ''"
            @click="changeActive(index, i, item.query)">{{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        active: [0, 0],
        data: [
          {
            name: '巅峰榜',
            list: [
              {name: '热歌', query: '893573'},
              {name: '新歌', query: '893573'},
              {name: '内地', query: '893573'},
              {name: '港台', query: '893573'},
              {name: '欧美', query: '893573'},
              {name: '日韩', query: '893573'}
            ]
          },
          {
            name: '全球榜',
            list: [
              {name: '热歌', query: '893573'},
              {name: '新歌', query: '893573'},
              {name: '内地', query: '893573'},
              {name: '港台', query: '893573'},
              {name: '欧美', query: '893573'},
              {name: '日韩', query: '893573'}
            ]
          }
        ]
      }
    },
    methods: {
      changeActive (index, i, query) {
        this.active = [index, i]
        this.$emit('change-active', query)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .top-list-nav
    width: 100%
    border: solid 1px #efefef
    .top-list-nav-group
      h2
        height: 50px
        line-height: 50px
        margin: 0 25px 5px
        border-bottom: solid 1px #efefef
        font-size: 16px
        font-weight: 600
        text-align: center
        color: #133131
      ul
        li
          height: 40px
          line-height: 40px
          padding-left: 20px
          font-size: 14px
          font-weight: 400
          color: #133131
          cursor: pointer
          &:hover
            color: #ff9494
          &.active
            background: #ff9494
            color: #ffffff

</style>
