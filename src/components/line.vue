<template>
  <div class="line">
    <IEcharts :option="line" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3'

export default {
  name: 'hello',
  components: {
    IEcharts
  },
  data: () => ({
    loading: false,
    line: {
      title: {
        text: ''
      },
      tooltip: {},
      xAxis: {
        data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }),
  methods: {
    doRandom () {
      const that = this
      let data = []
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min))
      }
      that.loading = !that.loading
      that.line.series[0].data = data
    },
    onReady (instance) {
      console.log(instance)
    },
    onClick (event, instance, echarts) {
      console.log(arguments)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line{height:300px;}
</style>
