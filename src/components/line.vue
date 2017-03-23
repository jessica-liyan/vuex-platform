<template>
  <div class='line'>
    <IEcharts :option='line' :loading='loading' @ready='onReady' @click='onClick'></IEcharts>
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
    resident: [],
    loading: false,
    line: {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: []
      },
      yAxis: {},
      series: {
        name: 'Sales',
        type: 'line',
        data: []
      },
      color: []
    }
  }),
  created () {
    this.resident = this.$root.resident
    this.line.series.data = this.count(this.getDepart)
    this.line.xAxis.data = Array.from(new Set(this.getDepart))
    this.line.color = this.setColor
  },
  computed: {
    getDepart (state) {
      let residentDepart = []
      this.resident.forEach((item) => {
        residentDepart.push(item.department)
      })
      return residentDepart
    },
    setColor (state) {
      let color = ['rgb(245, 112, 105)', 'rgb(255, 179, 152)', 'rgb(159, 217, 190)', 'rgb(101, 138, 212)', 'rgb(213, 105, 153)']
      return color
    }
  },
  methods: {
    // 计算数组中各类别的数量，返回数量的数组
    count (arr) {
      let arrNum = []
      arr.sort()
      for (var i = 0; i < arr.length;) {
        let number = 0
        for (var j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            number++
          }
        }
        arrNum.push(number)
        i += number
      }
      return arrNum
    },
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.line{height:300px;}
</style>
