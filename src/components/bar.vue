<template>
  <div class='bar'>
    <IEcharts :option='bar' :loading='loading' @ready='onReady' @click='onClick'></IEcharts>
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
    bar: {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: [],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#48b',
            width: 1
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgb(102, 102, 102)',
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgb(237, 237, 237)',
            width: 1
          },
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#48b',
            width: 1
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgb(102, 102, 102)',
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgb(237, 237, 237)',
            width: 1
          },
          show: true
        },
        axisTick: {
          show: false
        }
      },
      series: {
        name: 'Sales',
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          normal: {
            label: {
              show: true,
              formatter: '{c}',
              position: 'center',
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            }
          }
        },
        data: []
      },
      color: []
    }
  }),
  created () {
    this.resident = this.$root.resident
    this.bar.series.data = this.getAge
    this.bar.xAxis.data = this.getName
    this.bar.color = this.setColor
  },
  computed: {
    getName () {
      let residentName = []
      this.resident.forEach((item) => {
        residentName.push(item.name)
      })
      return residentName
    },
    getAge (state) {
      let residentAge = []
      this.resident.forEach((item) => {
        residentAge.push(item.age)
      })
      return residentAge
    },
    setColor (state) {
      let color = ['rgb(245, 112, 105)', 'rgb(255, 179, 152)', 'rgb(159, 217, 190)', 'rgb(101, 138, 212)', 'rgb(213, 105, 153)']
      return color
    }
  },
  methods: {
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
