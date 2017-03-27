<template>
  <div class="stat">
    <div class="tab" id="tab">
      <router-link v-for="item in tab" :to="item.url">
        <span>{{item.text}}</span>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      tab: [ {
        text: '年龄分布',
        url: '/count/bar'
      }, {
        text: '性别比例',
        url: '/count/pie'
      }, {
        text: '部门分布',
        url: '/count/line'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
