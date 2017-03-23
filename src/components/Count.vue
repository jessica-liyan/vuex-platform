<template>
  <div class="stat">
    <div class="stat-tab">
      <router-link v-for="item in tab" :to="item.url">
        <span>{{item.text}}</span>
      </router-link>
    </div>
    <div class="stat-chart">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
  },
  methods: {
  },
  data () {
    return {
      tab: [ {
        text: '按部门统计',
        url: '/count/bar'
      }, {
        text: '按性别统计',
        url: '/count/pie'
      }, {
        text: '按时间统计',
        url: '/count/line'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stat-tab{background:#f3f3f3;}
.stat-tab a{font-size:14px;color:#333;display:inline-block;height:40px;line-height:40px;box-sizing:border-box;padding:0 20px;}
.stat-tab a:hover{color:#447DC8;}
.stat-tab .router-link-active{color:#447DC8;border-bottom:2px solid #447DC8;}
.stat-chart{padding:20px;box-sizing:border-box;}
</style>
