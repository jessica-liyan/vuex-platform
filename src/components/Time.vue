<template>
  <div class="daily">
    <VueTimepicker v-model='defaultValue' format="HH:mm:ss" :minute-interval="5" @change='change'></VueTimepicker>
    {{defaultValue}}
  </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker'
export default {
  name: 'daily',
  components: {
    VueTimepicker
  },
  data () {
    return {
      // 默认/初始化时间，用v-model动态绑定时间
      // 时间格式化 format="HH:mm:ss"
      // 时间间隔  :minute-interval="5"
      defaultValue: {
        HH: '10',
        mm: '02',
        ss: '05'
      }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    // 返回当前的时间对象，{HH: "14",H: "14",hh: "14"...}
    change (eventData) {
      console.log(eventData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
