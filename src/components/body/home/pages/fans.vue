<template>
  <div class="home-fans">
    <fd-author v-for="(item, index) in fans" :key="index" :data="item"></fd-author>
  </div>
</template>

<script type="text/babel">
  import Author from './components/author.vue'
  import {mapState} from 'vuex'
  export default {
    components: {
      'fd-author': Author
    },
    data () {
      return {
        pre: '/user/'
      }
    },
    computed: {
      ...mapState([
        'fans'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-fans
    display: flex
    flex-wrap: wrap
    justify-content: flex-start

</style>
