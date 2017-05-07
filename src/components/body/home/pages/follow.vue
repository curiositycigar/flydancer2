<template>
  <div class="home-follow">
    <fd-author v-for="item in follows" :key="item.id" :data="item"></fd-author>
  </div>
</template>

<script type="text/babel">
  import Author from './components/author.vue'
  import pic from './pic.jpg'
  export default {
    data () {
      return {
        follows: [
          {
            id: 221321,
            src: pic,
            name: 'FlyDancer',
            lists: 5,
            follows: 10,
            fans: 12,
            follow: true
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: true
          }
        ],
        to: ''
      }
    },
    components: {
      'fd-author': Author
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-follow
    display: flex
    justify-content: flex-start
    flex-wrap: wrap

</style>
