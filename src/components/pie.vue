<template>
  <div class='pie'>{{sex}}
    <IEcharts :option='pie' :loading='loading' @ready='onReady' @click='onClick'></IEcharts>
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
    pie: {
      title: {
        text: ''
      },
      tooltip: {},
      legend: {
        orient: 'vertical',
        x: 'left',
        data: [],
        y: 'top',
        textStyle: {
          color: 'rgb(51, 51, 51)',
          fontSize: 12,
          fontStyle: 'normal'
        }
      },
      series: [{
        name: '人数',
        type: 'pie',
        radius: ['50%', '70%'],
        data: [{
          name: '男',
          value: 230
        }, {
          name: '女',
          value: 100
        }]
      }],
      color: []
    }
  }),
  created () {
    this.legend.data = this.sex
    this.bar.series.data = this.age
    this.bar.color = this.color
  },
  computed: {
    ...mapGetters({
      sex: 'getSex',
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
      that.pie.series[0].data = data
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
.pie{height:300px;}
</style>
