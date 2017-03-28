<template>
  <div class="photos">
    <div class="tab">
      <router-link to="/photos/default">默认模式</router-link>
      <router-link to="/photos/diy">裁剪模式</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photos',
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
