<template>
  <div class='pie'>
    <IEcharts :option='pie' :loading='loading' @ready='onReady' @click='onClick'></IEcharts>
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
      series: {
        name: '人数',
        type: 'pie',
        radius: ['50%', '70%'],
        data: []
      },
      color: []
    }
  }),
  created () {
    this.resident = this.$root.resident
    this.pie.legend.data = this.getSex
    this.pie.series.data = this.count(this.getSex)
    this.pie.color = this.setColor
  },
  computed: {
    getSex () {
      let residentSex = []
      this.resident.forEach((item) => {
        residentSex.push(item.sex)
      })
      return residentSex
    },
    setColor (state) {
      let color = ['rgb(245, 112, 105)', 'rgb(255, 179, 152)', 'rgb(159, 217, 190)', 'rgb(101, 138, 212)', 'rgb(213, 105, 153)']
      return color
    }
  },
  methods: {
    // 计算数组中各类别的数量，返回类型和数量的数组
    count (arr) {
      let arrCount = []
      arr.sort()
      for (var i = 0; i < arr.length;) {
        let number = 0
        for (var j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            number++
          }
        }
        arrCount.push({name: arr[i], value: number})
        i += number
      }
      return arrCount
    },
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
