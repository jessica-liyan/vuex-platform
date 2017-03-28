<template>
  <div class="lazy">
    <VueLazyLoadImg 
      class="block"
      mode="diy"
      :time="300"
      :complete="true"
      :position="{ top: 0, right: 0, bottom: 0, left: 0 }"
      :diy="{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
      @before="before" 
      @success="success" 
      @error="error"
      v-for="index in [1,2,3,4,5,6,7,8,9]">
      <span>{{index}}</span>
      <img src="./../../static/img/default_trans.png" :data-src="'./../../static/img/' + index + '.jpg'" alt="">
    </VueLazyLoadImg>
  </div>
</template>

<script>
// mode 默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
// time 设置一个检测时间间隔
// complete页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
// diy 设置图片剪切规则，diy模式时才有效果
import VueLazyLoadImg from 'vue-lazy-load-img/src/VueLazyLoadImg'
export default {
  name: 'lazyload',
  components: {
    VueLazyLoadImg
  },
  data () {
    return {
    }
  },
  created () {
    console.log(VueLazyLoadImg)
  },
  methods: {
    before: function () { // 图片加载之前执行方法
    },
    success: function (el) { // 图片加载成功执行方法
      // el.classList.add('success')
    },
    error: function (el) { // 图片加载失败执行方法
      // el.src = './images/error.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{width:100%;text-align:center;}
img{transition: opacity 1s !important;}
</style>
