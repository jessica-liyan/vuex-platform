<template>
  <div class="waterfall">
    <div class="tab">
      <router-link to="/waterfall/vertical">垂直瀑布流</router-link>
      <router-link to="/waterfall/horizontal">水平瀑布流</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'waterfall',
  components: {
  },
  data () {
    return {
    }
  },
  created () {
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
