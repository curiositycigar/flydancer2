<template>
  <div class="home-follow">
    <fd-author v-for="(item, index) in follow" :key="index" :data="item"></fd-author>
  </div>
</template>

<script type="text/babel">
  import Author from './components/author.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      'fd-author': Author
    },
    computed: {
      ...mapState([
        'follow'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-follow
    display: flex
    justify-content: flex-start
    flex-wrap: wrap

</style>
