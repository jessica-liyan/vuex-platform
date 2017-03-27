<template>
  <div class="lazy">
    <div v-for="item in [1,2,3,4,5,6,7,8,9,10]"  style="background:url('../../static/img/default.jpg') center no-repeat #fff">
      <img src="../../static/img/default_trans.png" v-lazyload:opt.fadein="img" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
import 'vue-lazyload-img'

export default {
  name: 'slider',
  components: {
  },
  data () {
    return {
      defaultImg: '../../static/img/default.jpg',
      img: '../../static/img/lazy.jpg'
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
