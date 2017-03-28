<template>
  <div id="app" class="view">
    <navBar></navBar>
    <ScrollBar class="main" custom-class="my-scrollbar" ref="Scrollbar">
      <router-view></router-view>
    </ScrollBar>
  </div>
</template>

<script>
import ScrollBar from 'vue2-scrollbar'
import navBar from './components/NavBar.vue'
require('vue2-scrollbar/dist/style/app.css')
require('vue2-scrollbar/dist/style/vue2-scrollbar.css')
export default {
  name: 'app',
  components: {
    navBar,
    ScrollBar
  },
  methods: {
  }
}
</script>

<style>
@import './assets/css/main.css';
@import './assets/fonts/iconfont.css';
</style>
