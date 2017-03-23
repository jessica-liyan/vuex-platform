<template>
  <div class="nav">
    <router-link v-for="item in menu" :to="item.url" class="nav-item row v-m">
        <span class="col t-c v-m mr-5 iconfont" :class="item.icon"></span>
        <span class="col t-l v-m">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'hello',
  data () {
    return {
      menu: this.$root.menu
    }
  },
  created () {
    api.nav(this)
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
