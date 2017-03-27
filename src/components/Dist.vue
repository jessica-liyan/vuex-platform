<template>
  <div class="daily">
    <Distpicker :prov='prov' :ids="val" @onchange='change'></Distpicker>
    <button class='btn btn-blue btn-big' @click='onclick'>确定</button>
  </div>
</template>

<script>
import Distpicker from 'vue-distpicker'
export default {
  name: 'daily',
  components: {
    Distpicker
  },
  data () {
    return {
      prov: 'province',
      val: [420000, 420100, 420102],
      arr: []
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    // 下拉框变化，可以得到当前选择对应的数组
    change (prov, city, dist) {
      this.arr = [prov, city, dist]
    },
    onclick () {
      console.log(this.arr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
