// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import wilddog from './wilddog'
import IEcharts from 'vue-echarts-v3'
import VueTimepicker from 'vue2-timepicker'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoadImg from 'vue-lazy-load-img'
import VueScroller from 'vue-scroller'
import VueResource from 'vue-resource'

Vue.use(IEcharts)
Vue.use(VueTimepicker)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoadImg)
Vue.use(VueScroller)
Vue.use(VueResource)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  wilddog,
  store,
  template: '<App/>',
  components: { App }
})
