<template>
  <div class="nav">
    <router-link v-for="item in menu" :to="item.url" class="nav-item row v-m">
        <span class="col t-c v-m mr-5 iconfont" :class="item.icon"></span>
        <span class="col t-l v-m">{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'hello',
  computed: {
    ...mapGetters({
      menu: 'getMenu'
    })
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([])
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
