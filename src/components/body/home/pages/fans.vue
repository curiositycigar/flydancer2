<template>
  <div class="home-fans">
    <fd-author v-for="item in fans" :key="item.id" :data="item"></fd-author>
  </div>
</template>

<script type="text/babel">
  import pic from './pic.jpg'
  import Author from './components/author.vue'
  export default {
    components: {
      'fd-author': Author
    },
    data () {
      return {
        fans: [
          {
            id: 221321,
            src: pic,
            name: 'FlyDancer',
            lists: 5,
            follows: 10,
            fans: 12,
            follow: false
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: false
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: false
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: false
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: false
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: false
          },
          {
            id: 221321,
            src: pic,
            name: 'Bello',
            lists: 5,
            follows: 213,
            fans: 121,
            follow: false
          }
        ],
        pre: '/user/'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-fans
    display: flex
    flex-wrap: wrap
    justify-content: flex-start

</style>
