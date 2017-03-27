<template>
  <div class="slider">
    <swiper :options='swiperOption' ref='mySwiper' style="position:relative;">
      <swiperSlide v-for="slide in slides">
        <img :src="slide.src" class="v-m">
        <span class='slider-txt'>{{slide.txt}}</span>
      </swiperSlide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'slider',
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  data () {
    return {
      slides: [{
        src: './../../static/img/1b.jpg',
        txt: '图片一'
      }, {
        src: './../../static/img/2b.jpg',
        txt: '图片二'
      }, {
        src: './../../static/img/3b.jpg',
        txt: '图片三'
      }, {
        src: './../../static/img/4b.jpg',
        txt: '图片四'
      }],
      swiperOption: {
        autoplay: 2000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        setWrapperSize: true,
        mousewheelControl: true,
        observeParents: true
      }
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
