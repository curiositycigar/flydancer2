<template>
  <div class="tags-group">
    <div v-for="(g,index) in data" class="tags">
      <a v-for="(item,i) in g" href="javascript:;" :class="activeIndex[index] === i ? 'active' : ''" :key="i"
         @click="changeActive(index, i)">{{ item }}</a>
    </div>
    <div class="tags-choose"></div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        activeIndex: []
      }
    },
    mounted () {
      for (let i = 0; i < this.data.length; i++) {
        this.$set(this.activeIndex, i, 0)
      }
    },
    computed: {},
    methods: {
      changeActive (index, i) {
        this.$set(this.activeIndex, index, i)
        this.$emit('change-active', this.activeIndex)
      }
    },
    props: {
      data: {
        type: Array
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tags-group
    box-sizing: border-box
    width: 1200px
    padding: 20px
    margin: 20px auto
    background: #fbfbfb
    .tags
      a
        display: inline-block
        padding: 3px 10px
        margin: 0 10px 10px 0
        color: #133131
        transition: all 0.3s
        &:hover
          color: #ff9494
        &.active
          background: #ff9494
          color: #ffffff
</style>
