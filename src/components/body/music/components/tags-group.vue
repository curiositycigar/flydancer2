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
    box-sizing: border-box;
    width: 1200px;
    padding: 20px;
    margin: 20px auto;
    border: solid 1px #ccc;
    box-shadow: 0 0 2px 2px #f5f5f5;
    .tags
      a
        display: inline-block
        padding: 3px 10px
        margin: 0 10px 10px 0
        border: solid 1px transparent
        border-radius: 5px
        color: #133131
        transition: all 0.3s
        font-size: 14px
        &:hover
          color: #cccccc
        &.active
          border: solid 1px #ccc
          background: linear-gradient(180deg, #f5f5f5, #ffffff 10%, #eeeeee)
          color: #000000
</style>
