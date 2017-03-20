<template>
  <div id="app" class="view">
    <navBar></navBar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<style>
@import './assets/css/main.css';
@import './assets/fonts/iconfont.css'
</style>
