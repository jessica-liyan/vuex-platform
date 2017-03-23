<template>
  <div class='bar'>{{color}}
    <IEcharts :option='bar' :loading='loading' @ready='onReady' @click='onClick'></IEcharts>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3'
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'hello',
  components: {
    IEcharts
  },
  data: () => ({
    loading: false,
    bar: {
      title: {
        text: ''
      },
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {},
      series: {
        name: 'Sales',
        type: 'bar',
        data: []
      },
      color: []
    }
  }),
  created () {
    this.bar.series.data = this.age
    this.bar.xAxis.data = this.name
    this.bar.color = this.color
  },
  computed: {
    ...mapGetters({
      info: 'getResident',
      name: 'getName',
      age: 'getAge',
      color: 'setColor'
    })
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
    }),
    doRandom () {
      const that = this
      let data = []
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min))
      }
      that.loading = !that.loading
      that.bar.series[0].data = data
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.bar{height:300px;}
</style>
