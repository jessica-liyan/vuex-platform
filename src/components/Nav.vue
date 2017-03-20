<template>
  <div class="hello">
    {{count}}--{{doneTodos}}--{{importTodos}}--{{doneTodosNum}}
    {{nav}}
    <p v-on:click="increment()">increment</p>
    <p v-on:click="incrementAsync()">incrementAsync</p>
    <p v-on:click="actionA()">actionA</p>
    <p v-on:click="actionB()">actionC</p>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'hello',
  computed: {
    count () {
      return this.$store.state.count
    },
    nav () {
      return this.$store.state.nav
    },
    ...mapGetters(['doneTodos', 'importTodos', 'doneTodosNum'])
  },
  methods: {
    add () {
      return this.$store.commit('increment')
    },
    actionA () {
      return this.$store.dispatch('actionA').then((userinfo) => console.log(userinfo))
    },
    ...mapMutations(['increment']),
    // this.$store.dispatch('xxx') 分发 action
    ...mapActions([
      'incrementAsync', // 映射 this.increment() 为 this.$store.dispatch('increment')
      'actionB'
    ])
  },
  created () {
    return this.$store.commit('getNav')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
